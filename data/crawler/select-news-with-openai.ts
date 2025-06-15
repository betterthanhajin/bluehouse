import { GoogleNewsItem } from "./google-news";
import { openai } from "./openai-client";
import { isValidImageUrl } from "./image-url-check";

/**
 * 대통령실 공식 활용에 적합한 3개 뉴스를 Vision API로 선정합니다.
 * @param links GoogleNewsItem[]
 * @returns 선정된 3개 GoogleNewsItem
 */
export async function selectNewsWithOpenAI(
  links: GoogleNewsItem[]
): Promise<GoogleNewsItem[]> {
  // 1. 프롬프트 및 이미지 URL 준비
  // ogImage 없는 기사와 이미지 URL이 유효하지 않은 기사 제외
  const validCandidates: GoogleNewsItem[] = [];
  await Promise.all(
    links.map(async (l) => {
      if (l.ogImage && (await isValidImageUrl(l.ogImage))) {
        validCandidates.push(l);
      }
    })
  );

  // Vision 모델 입력 포맷 구성
  // 각 기사별로 텍스트(제목, 요약, URL)와 ogImage URL을 묶음
  // GPT-4o는 최대 16개 이미지(기사)만 허용하므로, 16개씩 나누어 처리
  const candidates = validCandidates;
  const BATCH_SIZE = 16;
  let allSelections: { idxInCandidates: number; reason: string }[] = [];
  for (
    let batchStart = 0;
    batchStart < candidates.length;
    batchStart += BATCH_SIZE
  ) {
    const batch = candidates.slice(batchStart, batchStart + BATCH_SIZE);
    const batchMessages: any[] = [
      {
        role: "system",
        content: `당신은 대한민국 대통령실과 이재명 대통령을 홍보하기 위한 AI 비서입니다.\n\n아래 기사 목록 중에서 대통령실에서 공식적으로 활용하기에 가장 적합한 3개의 뉴스를 선정하세요.\n\n선정 기준:\n- 기사 내용과 이미지(og:image)가 모두 신뢰성과 품격, 공공성을 갖추었는지 (이미지에 대통령 모습 또는 대통령실 또는 공개석상, 정부 관련 이미지가 나왔는지)\n- 대통령실의 공식 메시지, 홍보, 보도자료, SNS 등에 사용해도 무방할 정도로 적합한지\n- 선정 사유를 간단히 설명할 것\n\n결과는 반드시 JSON 배열로만 반환하세요. 각 원소는 { index, reason } 형태여야 합니다. index는 아래 기사 목록의 순서(0부터 시작), reason은 1~2문장으로 선정 이유를 적으세요.\n\n아래부터 기사 목록입니다.`,
      },
    ];
    batch.forEach((item, idx) => {
      batchMessages.push({
        role: "user",
        content: [
          {
            type: "text",
            text: `기사 #${idx}\n제목: ${item.title}\n요약: ${item.summary}\n링크: ${item.href}`,
          },
          ...(item.ogImage && item.ogImage.length > 0
            ? [{ type: "image_url", image_url: { url: item.ogImage } }]
            : []),
        ],
      });
    });
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: batchMessages,
      max_tokens: 1024,
      temperature: 0.2,
    });
    let selected: { index: number; reason: string }[] = [];
    try {
      const content = completion.choices[0]?.message?.content;
      const jsonText = content?.match(/\[.*\]/s)?.[0];
      if (jsonText) {
        selected = JSON.parse(jsonText);
      }
    } catch (e) {
      throw new Error("OpenAI 응답 파싱 오류: " + e);
    }
    // index는 batch 내 인덱스이므로 전체 candidates 기준으로 변환
    allSelections.push(
      ...selected.map((sel) => ({
        idxInCandidates: batchStart + sel.index,
        reason: sel.reason,
      }))
    );
  }
  // 여러 batch에서 뽑힌 기사 중 최대 3개만 선정(중복 제거, 우선순위: 앞 batch 우선)
  const seen = new Set<number>();
  const finalSelections: { idxInCandidates: number; reason: string }[] = [];
  for (const sel of allSelections) {
    if (!seen.has(sel.idxInCandidates) && finalSelections.length < 3) {
      seen.add(sel.idxInCandidates);
      finalSelections.push(sel);
    }
  }
  // 반환
  return finalSelections.map((sel) => {
    const item = candidates[sel.idxInCandidates];
    (item as any).__openai_reason = sel.reason;
    return item;
  });
}
