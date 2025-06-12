import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NationalVisionPage() {
  const visionItems = [
    {
      title: "더불어 잘사는 포용국가",
      description: "국민 모두가 공정한 기회와 복지를 누리는 사회",
      icon: "🤝",
      details: [
        "청년·신혼부부 주거지원 확대",
        "청년·여성·고령자 맞춤형 일자리 확대",
        "사회적 이동성 및 교육기회 평등 실현",
      ],
    },
    {
      title: "혁신을 선도하는 미래국가",
      description: "과학기술과 혁신으로 미래성장동력 창출",
      icon: "🚀",
      details: [
        "AI·바이오 등 신산업 육성",
        "디지털·그린 전환 가속화",
        "스타트업·벤처 생태계 활성화",
      ],
    },
    {
      title: "안전하고 지속가능한 대한민국",
      description: "기후위기 대응과 국민 안전 보장",
      icon: "🌱",
      details: [
        "2050 탄소중립 실현",
        "재생에너지 확대 및 에너지 전환",
        "재난·재해 대응 역량 강화",
      ],
    },
    {
      title: "평화와 번영의 한반도",
      description: "한반도 평화정착과 외교안보 강화",
      icon: "🕊️",
      details: [
        "남북 대화·협력 지속 추진",
        "한반도 비핵화 및 평화체제 구축",
        "동북아 평화협력 체제 강화",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 페이지 헤더 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">국정비전</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          국민과 함께 만들어가는 더 나은 대한민국, 모든 국민이 행복하고 안전한
          미래를 향한 국정 비전을 제시합니다.
        </p>
      </div>
      {/* 메인 비전 배너 */}
      <div className="relative mb-12">
        <div className="relative h-64 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                국민이 주인인 나라, 더불어 잘사는 대한민국
              </h2>
              <p className="text-lg md:text-xl">
                공정, 상식, 통합, 미래로 가는 대한민국
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 4대 국정비전 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">4대 국정비전</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visionItems.map((item, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-3xl">{item.icon}</span>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {item.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-start space-x-2 text-sm"
                    >
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {/* 국정목표 */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">국정목표</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                2027년
              </div>
              <p className="text-sm text-gray-600">
                청년·신혼부부 주거지원 확대
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                2030년
              </div>
              <p className="text-sm text-gray-600">OECD 이하 노동시간 실현</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                2050년
              </div>
              <p className="text-sm text-gray-600">탄소중립 실현</p>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* 추진 전략 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">추진 전략</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl mb-2">📊</div>
              <h3 className="font-medium mb-2">경제성장과 일자리</h3>
              <p className="text-sm text-gray-600">
                미래산업 및 신성장동력 창출, 양질의 일자리 확대
              </p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl mb-2">🛡️</div>
              <h3 className="font-medium mb-2">사회안전망과 복지</h3>
              <p className="text-sm text-gray-600">
                청년·신혼부부·취약계층 주거 및 복지 지원 강화
              </p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl mb-2">🌍</div>
              <h3 className="font-medium mb-2">기후·에너지 전환</h3>
              <p className="text-sm text-gray-600">
                탄소중립, 재생에너지, 친환경 산업 육성
              </p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl mb-2">🕊️</div>
              <h3 className="font-medium mb-2">평화와 외교안보</h3>
              <p className="text-sm text-gray-600">
                한반도 평화체제 구축, 외교안보 강화
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
