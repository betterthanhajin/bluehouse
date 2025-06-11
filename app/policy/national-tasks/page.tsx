"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight } from "lucide-react"

export default function NationalTasksPage() {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(0)

  const categories = [
    {
      title: "국민이 주인인 정부",
      subtitle: "투명하고 공정한 정부 운영",
      taskCount: 20,
      color: "bg-blue-100 text-blue-800",
      tasks: [
        "국정 투명성 강화",
        "공정한 인사시스템 구축",
        "부패척결과 공직기강 확립",
        "국민 소통 채널 확대",
        "정부혁신과 디지털 전환",
      ],
    },
    {
      title: "더불어 잘사는 경제",
      subtitle: "포용적 성장과 일자리 창출",
      taskCount: 25,
      color: "bg-green-100 text-green-800",
      tasks: ["혁신성장 동력 확충", "중소기업과 소상공인 지원", "양질의 일자리 창출", "공정경제 실현", "지역균형발전"],
    },
    {
      title: "국민 안전과 생명 보호",
      subtitle: "안전한 사회 구현",
      taskCount: 15,
      color: "bg-red-100 text-red-800",
      tasks: ["재난안전관리체계 강화", "사회안전망 확충", "먹거리 안전 확보", "교통안전 강화", "범죄 예방과 치안 강화"],
    },
    {
      title: "모두가 누리는 포용사회",
      subtitle: "차별 없는 공정한 사회",
      taskCount: 20,
      color: "bg-purple-100 text-purple-800",
      tasks: ["사회적 약자 보호", "교육기회 확대", "의료접근성 향상", "주거복지 강화", "문화향유 기회 확대"],
    },
    {
      title: "자유롭고 평화로운 한반도",
      subtitle: "평화와 번영의 한반도",
      taskCount: 12,
      color: "bg-indigo-100 text-indigo-800",
      tasks: ["한반도 평화프로세스 추진", "남북협력 확대", "국방력 강화", "외교역량 확충", "통일기반 구축"],
    },
    {
      title: "역동적 혁신성장",
      subtitle: "미래 성장동력 확보",
      taskCount: 28,
      color: "bg-orange-100 text-orange-800",
      tasks: ["디지털 뉴딜 추진", "그린 뉴딜 실현", "신산업 육성", "R&D 혁신", "인재양성"],
    },
  ]

  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 페이지 헤더 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">120대 국정과제</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          국민과의 약속을 지키고 더 나은 대한민국을 만들기 위한 6개 분야 120개 국정과제를 체계적으로 추진합니다.
        </p>
      </div>

      {/* 통계 요약 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">120개</div>
            <p className="text-sm text-gray-600">국정과제</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">6개</div>
            <p className="text-sm text-gray-600">정책분야</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
            <p className="text-sm text-gray-600">추진률</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">2027</div>
            <p className="text-sm text-gray-600">완료목표</p>
          </CardContent>
        </Card>
      </div>

      {/* 6대 정책분야 */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-6">6대 정책분야</h2>
        {categories.map((category, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader
              className="cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => toggleCategory(index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${category.color}`}>
                    {category.taskCount}개 과제
                  </span>
                  <div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <p className="text-gray-600 text-sm mt-1">{category.subtitle}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  {expandedCategory === index ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </CardHeader>
            {expandedCategory === index && (
              <CardContent className="pt-0">
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-3">주요 과제</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {category.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex items-center space-x-2 p-2 bg-gray-50 rounded">
                        <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
                        <span className="text-sm">{task}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <Button variant="outline" size="sm">
                      상세 과제 보기
                    </Button>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {/* 추진 현황 */}
      <Card className="mt-12">
        <CardHeader>
          <CardTitle className="text-xl">추진 현황</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">전체 추진률</span>
                <span className="text-sm font-medium">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-1">72개</div>
                <p className="text-sm text-gray-600">완료</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600 mb-1">30개</div>
                <p className="text-sm text-gray-600">진행중</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-600 mb-1">18개</div>
                <p className="text-sm text-gray-600">계획수립</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
