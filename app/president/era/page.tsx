import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PresidentEraPage() {
  const achievements = [
    {
      year: "2022",
      title: "새로운 시작",
      description: "국민과 함께하는 정부 출범",
      highlights: ["국민 소통 강화", "정부 혁신 추진", "코로나19 극복"],
    },
    {
      year: "2023",
      title: "변화와 혁신",
      description: "디지털 전환과 그린뉴딜 본격 추진",
      highlights: ["K-뉴딜 2.0 발표", "탄소중립 로드맵 구체화", "글로벌 외교 확대"],
    },
    {
      year: "2024",
      title: "성과와 도약",
      description: "국정과제 가시적 성과 창출",
      highlights: ["경제 회복 가속화", "사회안전망 확충", "한반도 평화 진전"],
    },
  ]

  const keyPolicies = [
    {
      icon: "💰",
      title: "기본소득 도입",
      description: "모든 국민의 기본적 생활 보장을 위한 혁신적 복지정책",
      status: "시범사업 진행중",
    },
    {
      icon: "🌱",
      title: "그린뉴딜",
      description: "탄소중립 실현과 친환경 경제 전환",
      status: "본격 추진",
    },
    {
      icon: "🚀",
      title: "디지털 뉴딜",
      description: "디지털 전환을 통한 미래 성장동력 확보",
      status: "성과 가시화",
    },
    {
      icon: "🏠",
      title: "주거복지 확대",
      description: "모든 국민의 주거권 보장을 위한 종합대책",
      status: "단계적 시행",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 페이지 헤더 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">이재명 시대</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          국민과 함께 만들어가는 새로운 대한민국, 이재명 대통령이 이끄는 변화와 혁신의 시대를 소개합니다.
        </p>
      </div>

      {/* 메인 비전 섹션 */}
      <div className="relative mb-16">
        <div className="relative h-80 rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=320&width=1200" alt="이재명 시대 비전" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/70"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                국민이 주인인 나라
                <br />
                더불어 잘사는 대한민국
              </h2>
              <p className="text-lg md:text-xl opacity-90">
                혁신과 포용, 평화와 번영을 통해 모든 국민이 행복한 미래를 만들어갑니다
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 시대적 성과 타임라인 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">이재명 정부 주요 성과</h2>
        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold">{achievement.year}</span>
                </div>
              </div>
              <Card className="flex-1">
                <CardHeader>
                  <CardTitle className="text-xl">{achievement.title}</CardTitle>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {achievement.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* 핵심 정책 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">이재명 시대 핵심 정책</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyPolicies.map((policy, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-3xl">{policy.icon}</span>
                  <CardTitle className="text-lg">{policy.title}</CardTitle>
                </div>
                <p className="text-gray-600">{policy.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">추진 상태</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {policy.status}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 국민과의 약속 */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl text-center">국민과의 약속</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-medium mb-2">소통하는 정부</h3>
              <p className="text-sm text-gray-600">국민의 목소리에 귀 기울이는 열린 정부</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">⚖️</div>
              <h3 className="font-medium mb-2">공정한 사회</h3>
              <p className="text-sm text-gray-600">기회는 평등하고 과정은 공정한 사회</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🌟</div>
              <h3 className="font-medium mb-2">혁신 성장</h3>
              <p className="text-sm text-gray-600">미래를 준비하는 혁신적 성장</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🕊️</div>
              <h3 className="font-medium mb-2">평화 번영</h3>
              <p className="text-sm text-gray-600">한반도 평화와 공동 번영</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
