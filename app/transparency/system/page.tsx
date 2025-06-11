import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Clock, Users, ChevronRight } from "lucide-react"

export default function InformationDisclosureSystemPage() {
  const disclosureTypes = [
    {
      title: "사전공표정보",
      description: "국민이 알아야 할 중요한 정보를 미리 공개",
      icon: "📋",
      examples: ["조직도 및 업무분장", "예산 및 결산", "주요 정책 및 계획", "통계 및 현황"],
    },
    {
      title: "청구공개정보",
      description: "국민의 청구에 따라 공개하는 정보",
      icon: "📝",
      examples: ["회의록", "검토서", "계약서", "기타 행정정보"],
    },
    {
      title: "비공개정보",
      description: "법령에 따라 공개가 제한되는 정보",
      icon: "🔒",
      examples: ["개인정보", "국가기밀", "수사정보", "영업비밀"],
    },
    {
      title: "부분공개정보",
      description: "일부만 공개 가능한 정보",
      icon: "📄",
      examples: ["개인정보 포함 문서", "영업비밀 포함 계약서", "보안사항 포함 자료"],
    },
  ]

  const procedures = [
    {
      step: 1,
      title: "정보공개 청구",
      description: "온라인 또는 방문을 통해 정보공개 청구서 제출",
      duration: "즉시",
    },
    {
      step: 2,
      title: "접수 및 검토",
      description: "청구 내용 검토 및 담당 부서 배정",
      duration: "1일",
    },
    {
      step: 3,
      title: "공개 여부 결정",
      description: "공개, 부분공개, 비공개 여부 결정",
      duration: "10일",
    },
    {
      step: 4,
      title: "결과 통지",
      description: "결정 결과 및 공개 정보 제공",
      duration: "즉시",
    },
  ]

  const statistics = [
    { label: "연간 정보공개 청구", value: "2,847건", color: "text-blue-600" },
    { label: "공개율", value: "89.2%", color: "text-green-600" },
    { label: "평균 처리기간", value: "7.3일", color: "text-purple-600" },
    { label: "만족도", value: "4.2/5.0", color: "text-orange-600" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 페이지 헤더 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">정보공개제도</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          국민의 알 권리 보장과 정부의 투명성 확보를 위한 정보공개제도를 소개합니다.
        </p>
      </div>

      {/* 정보공개제도 개요 */}
      <div className="mb-12">
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4">정보공개제도란?</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  정보공개제도는 국민의 알 권리를 보장하고 정부의 투명성을 높이기 위해 공공기관이 보유·관리하는 정보를
                  국민에게 공개하는 제도입니다.
                </p>
                <p>
                  「공공기관의 정보공개에 관한 법률」에 근거하여 운영되며, 국민 누구나 공공기관에 정보공개를 청구할 수
                  있습니다.
                </p>
                <p>
                  대통령실은 국정 운영의 투명성을 높이고 국민의 신뢰를 확보하기 위해 적극적인 정보공개 정책을 추진하고
                  있습니다.
                </p>
              </div>
              <div className="mt-6">
                <Button>정보공개 청구하기</Button>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="정보공개제도 개념도"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Card>
      </div>

      {/* 정보공개 유형 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">정보공개 유형</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {disclosureTypes.map((type, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-3xl">{type.icon}</span>
                  <CardTitle className="text-lg">{type.title}</CardTitle>
                </div>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </CardHeader>
              <CardContent>
                <h4 className="font-medium mb-3">주요 예시</h4>
                <ul className="space-y-2">
                  {type.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="flex items-start space-x-2 text-sm">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 정보공개 절차 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">정보공개 절차</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {procedures.map((procedure, index) => (
            <div key={index} className="relative">
              <Card className="h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold">{procedure.step}</span>
                  </div>
                  <h3 className="font-bold mb-2">{procedure.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{procedure.description}</p>
                  <Badge variant="outline" className="text-xs">
                    소요시간: {procedure.duration}
                  </Badge>
                </CardContent>
              </Card>
              {index < procedures.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <ChevronRight className="h-6 w-6 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 정보공개 통계 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">2024년 정보공개 현황</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {statistics.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className={`text-2xl md:text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 주요 공개 정보 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">주요 공개 정보</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-lg">조직 및 인사</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• 조직도 및 업무분장</li>
                <li>• 주요 보직자 현황</li>
                <li>• 정원 및 현원</li>
                <li>• 인사발령 사항</li>
              </ul>
              <Button variant="outline" size="sm" className="w-full mt-4">
                자세히 보기
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-green-600" />
                <CardTitle className="text-lg">예산 및 결산</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• 연도별 예산서</li>
                <li>• 결산서</li>
                <li>• 주요 사업 예산</li>
                <li>• 예산 집행 현황</li>
              </ul>
              <Button variant="outline" size="sm" className="w-full mt-4">
                자세히 보기
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-purple-600" />
                <CardTitle className="text-lg">정책 및 업무</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• 주요 정책 계획</li>
                <li>• 업무 추진 현황</li>
                <li>• 회의록</li>
                <li>• 보고서</li>
              </ul>
              <Button variant="outline" size="sm" className="w-full mt-4">
                자세히 보기
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 정보공개 원칙 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-center">정보공개 원칙</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="font-medium mb-2">투명성</h3>
              <p className="text-sm text-gray-600">국정 운영의 모든 과정을 투명하게 공개</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-medium mb-2">신속성</h3>
              <p className="text-sm text-gray-600">법정 기한 내 신속한 정보 제공</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-medium mb-2">정확성</h3>
              <p className="text-sm text-gray-600">정확하고 신뢰할 수 있는 정보 제공</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-medium mb-2">접근성</h3>
              <p className="text-sm text-gray-600">누구나 쉽게 이용할 수 있는 서비스</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
