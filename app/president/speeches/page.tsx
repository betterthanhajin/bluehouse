"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PresidentialSpeechesPage() {
  // 실제 데이터 기반: 취임사 요약, 10대 공약, 임기 첫 주 메시지
  const inauguralSummary = `
  "회복과 성장, 다시 대한민국!"
  - 국민 통합과 공정, 상식의 회복
  - 민생경제 안정과 기회 국가 실현
  - 미래세대와 청년을 위한 사회 대전환
  - 약자와 동행하는 포용적 성장
  - 국제사회와의 협력 및 평화외교
  `;

  const pledges = [
    "청년 지원 확대 및 법적 청년 기준 상향 추진",
    "주거·금융 등 청년과 서민을 위한 정책 강화",
    "물가 안정 및 민생경제 긴급 대응",
    "기회 국가(교육·일자리·주거 등 공정한 기회 제공)",
    "사회안전망 강화 및 약자 보호",
    "기후위기 대응 및 미래산업 육성",
    "국민통합과 지역균형 발전",
    "한반도 평화와 외교 다변화",
    "디지털·AI 혁신 국가",
    "부정부패 근절 및 공정사회 실현",
  ];

  const firstWeekMessages = [
    {
      title: "물가 대응 지시",
      content:
        "라면 2000원 진짜인가… 물가 안정과 민생경제 대응을 최우선 과제로 지시.",
      date: "2025.06.11",
    },
    {
      title: "청년 정책 기준 현실화",
      content: "법적 청년 기준(현행 34세) 상향 검토 및 청년 지원 확대 지시.",
      date: "2025.06.12",
    },
    {
      title: "국민과의 소통 강화 약속",
      content: "국민과 직접 소통하는 대통령이 되겠다는 의지 표명.",
      date: "2025.06.10",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* 대통령 프로필 헤더 */}
      <div className="flex flex-col items-center mb-14">
        <div className="relative w-28 h-28 mb-4">
          <Image
            src="/image/korea-president.webp"
            alt="이재명 대통령"
            fill
            className="rounded-full object-cover border-4 border-blue-200 shadow-lg"
            priority
          />
        </div>
        <h1 className="text-4xl font-extrabold mb-1 tracking-tight">
          이재명 대통령
        </h1>
        <div className="text-blue-700 font-semibold text-lg mb-2 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          {`"회복과 성장, 다시 대한민국!"`}
        </div>
        <p className="text-base text-gray-500">
          대통령의 국정철학, 비전, 약속을 직접 확인하세요.
        </p>
      </div>

      {/* 취임사 요약 */}
      <div className="mb-12">
        <Card className="overflow-hidden bg-blue-50/70 border-blue-100 shadow-md">
          <CardHeader className="flex flex-row items-center gap-3 pb-2">
            <div className="flex-shrink-0">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
                <svg
                  className="w-7 h-7 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17v-2a4 4 0 014-4h2m-6 6h6a2 2 0 002-2v-6a2 2 0 00-2-2h-6a2 2 0 00-2 2v6a2 2 0 002 2z"
                  ></path>
                </svg>
              </span>
            </div>
            <CardTitle className="text-2xl text-blue-900">
              취임사 주요 메시지
            </CardTitle>
          </CardHeader>
          <CardContent>
            <blockquote className="relative text-blue-900 text-lg font-medium pl-8 border-l-4 border-blue-400 bg-white/70 rounded p-6 mt-2">
              <svg
                className="absolute left-2 top-4 w-6 h-6 text-blue-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.17 8A5.001 5.001 0 002 13v1a3 3 0 003 3h3a1 1 0 001-1v-4a4 4 0 00-4-4zm9 0a5.001 5.001 0 00-5.17 5H14a1 1 0 011 1v4a1 1 0 001 1h3a3 3 0 003-3v-1a5 5 0 00-5-5z"></path>
              </svg>
              <span className="whitespace-pre-line">{inauguralSummary}</span>
            </blockquote>
          </CardContent>
        </Card>
      </div>

      {/* 주요 공약 */}
      <div className="mb-12">
        <Card className="overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 border-blue-100 shadow-md">
          <CardHeader className="pb-2 flex flex-row items-center gap-3">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
              <svg
                className="w-7 h-7 text-blue-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2"
                ></path>
                <circle cx="12" cy="12" r="10" />
              </svg>
            </span>
            <CardTitle className="text-2xl text-blue-900">주요 공약</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {pledges.map((pledge, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-white/80 rounded-lg p-4 shadow-sm border border-blue-50 hover:border-blue-300 transition-all group"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-200 text-blue-800 font-bold flex items-center justify-center text-lg group-hover:bg-blue-500 group-hover:text-white transition-all">
                    {idx + 1}
                  </span>
                  <span className="text-gray-800 group-hover:text-blue-800 font-medium">
                    {pledge}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 임기 첫 주 주요 메시지 */}
      <div className="mb-12">
        <Card className="overflow-hidden bg-white border-blue-100 shadow-md">
          <CardHeader className="pb-2 flex flex-row items-center gap-3">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
              <svg
                className="w-7 h-7 text-blue-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3"
                ></path>
                <circle cx="12" cy="12" r="10" />
              </svg>
            </span>
            <CardTitle className="text-2xl text-blue-900">
              임기 첫 주 주요 메시지
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative pl-6 mt-6">
              {/* 타임라인 라인 */}
              <div className="absolute left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-blue-100 to-transparent rounded-full"></div>
              <ul className="space-y-8">
                {firstWeekMessages.map((msg, idx) => (
                  <li key={idx} className="relative flex items-start gap-4">
                    {/* 타임라인 점 */}
                    <span className="absolute left-[-14px] top-2 w-4 h-4 rounded-full border-4 border-white bg-blue-400 shadow-md"></span>
                    <div className="ml-2">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded">
                          {msg.date}
                        </span>
                        <span className="text-base font-semibold text-blue-900">
                          {msg.title}
                        </span>
                      </div>
                      <div className="text-gray-700 text-sm pl-1">
                        {msg.content}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
