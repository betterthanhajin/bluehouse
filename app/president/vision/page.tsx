import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function NationalVisionPage() {
  const visionItems = [
    {
      title: "함께 잘사는 포용국가",
      description: "모든 국민이 차별받지 않고 공정한 기회를 누리는 사회",
      icon: "🤝",
      details: [
        "기본소득 도입을 통한 사회안전망 강화",
        "청년, 여성, 고령자 맞춤형 일자리 창출",
        "교육기회 평등과 사회적 이동성 확대",
      ],
    },
    {
      title: "혁신적 포용국가",
      description: "과학기술과 혁신을 통한 미래 성장동력 확보",
      icon: "🚀",
      details: [
        "디지털 뉴딜과 그린 뉴딜 추진",
        "AI, 바이오, 우주항공 등 신산업 육성",
        "스타트업과 벤처기업 생태계 조성",
      ],
    },
    {
      title: "안전하고 지속가능한 국가",
      description: "기후변화 대응과 지속가능한 발전 추구",
      icon: "🌱",
      details: ["2050 탄소중립 실현", "재생에너지 확대와 에너지 전환", "순환경제와 친환경 산업 육성"],
    },
    {
      title: "평화와 번영의 한반도",
      description: "한반도 평화 정착과 통일 기반 구축",
      icon: "🕊️",
      details: ["남북 대화와 협력 지속 추진", "한반도 비핵화와 평화체제 구축", "동북아 평화협력 체제 강화"],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 페이지 헤더 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">국정비전</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          국민과 함께 만들어가는 더 나은 대한민국, 모든 국민이 행복하고 안전한 미래를 향한 국정 비전을 제시합니다.
        </p>
      </div>

      {/* 메인 비전 배너 */}
      <div className="relative mb-12">
        <div className="relative h-64 rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=256&width=1200" alt="국정비전 배경" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">국민이 주인인 나라, 정의로운 대한민국</h2>
              <p className="text-lg md:text-xl">더불어 잘사는 포용국가를 향한 대전환</p>
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
                    <li key={detailIndex} className="flex items-start space-x-2 text-sm">
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
              <div className="text-3xl font-bold text-blue-600 mb-2">120개</div>
              <p className="text-sm text-gray-600">국정과제</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">6대</div>
              <p className="text-sm text-gray-600">정책방향</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2027년</div>
              <p className="text-sm text-gray-600">목표 달성</p>
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
              <h3 className="font-medium mb-2">데이터 기반 정책</h3>
              <p className="text-sm text-gray-600">과학적 근거에 기반한 정책 수립</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl mb-2">🤝</div>
              <h3 className="font-medium mb-2">국민 참여</h3>
              <p className="text-sm text-gray-600">국민과 함께하는 정책 결정</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-medium mb-2">신속한 실행</h3>
              <p className="text-sm text-gray-600">빠르고 효율적인 정책 실행</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl mb-2">🔄</div>
              <h3 className="font-medium mb-2">지속적 개선</h3>
              <p className="text-sm text-gray-600">성과 평가와 지속적 보완</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
