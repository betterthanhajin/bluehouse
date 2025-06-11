"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, AlertCircle } from "lucide-react"

export default function PresidentialPledgesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const pledgeCategories = [
    { id: "all", name: "전체", count: 50 },
    { id: "economy", name: "경제", count: 12 },
    { id: "welfare", name: "복지", count: 10 },
    { id: "education", name: "교육", count: 8 },
    { id: "environment", name: "환경", count: 7 },
    { id: "diplomacy", name: "외교", count: 6 },
    { id: "others", name: "기타", count: 7 },
  ]

  const pledges = [
    {
      id: 1,
      category: "economy",
      title: "기본소득 월 50만원 지급",
      description: "모든 국민에게 월 50만원의 기본소득을 지급하여 기본적 생활을 보장합니다.",
      status: "진행중",
      progress: 65,
      timeline: "2025년 시범사업 → 2026년 본격 시행",
      budget: "연간 300조원",
      icon: "💰",
    },
    {
      id: 2,
      category: "welfare",
      title: "국민건강보험 보장성 90% 확대",
      description: "의료비 부담을 줄이고 모든 국민이 양질의 의료서비스를 받을 수 있도록 합니다.",
      status: "완료",
      progress: 100,
      timeline: "2023년 완료",
      budget: "연간 15조원",
      icon: "🏥",
    },
    {
      id: 3,
      category: "education",
      title: "대학 등록금 반값 실현",
      description: "교육 기회 평등을 위해 대학 등록금을 50% 인하합니다.",
      status: "진행중",
      progress: 40,
      timeline: "2024년 단계적 시행",
      budget: "연간 8조원",
      icon: "🎓",
    },
    {
      id: 4,
      category: "environment",
      title: "2050 탄소중립 달성",
      description: "친환경 에너지 전환과 녹색산업 육성으로 탄소중립을 실현합니다.",
      status: "진행중",
      progress: 30,
      timeline: "2050년 목표",
      budget: "연간 50조원",
      icon: "🌱",
    },
    {
      id: 5,
      category: "economy",
      title: "청년 일자리 100만개 창출",
      description: "양질의 청년 일자리를 100만개 창출하여 청년 실업 문제를 해결합니다.",
      status: "진행중",
      progress: 75,
      timeline: "2025년 목표",
      budget: "연간 20조원",
      icon: "👨‍💼",
    },
    {
      id: 6,
      category: "welfare",
      title: "아동수당 월 30만원 지급",
      description: "만 18세 미만 모든 아동에게 월 30만원의 아동수당을 지급합니다.",
      status: "완료",
      progress: 100,
      timeline: "2023년 시행",
      budget: "연간 25조원",
      icon: "👶",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "완료":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "진행중":
        return <Clock className="h-4 w-4 text-blue-600" />
      case "지연":
        return <AlertCircle className="h-4 w-4 text-red-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "완료":
        return "bg-green-100 text-green-800"
      case "진행중":
        return "bg-blue-100 text-blue-800"
      case "지연":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredPledges = selectedCategory === "all" ? pledges : pledges.filter((p) => p.category === selectedCategory)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 페이지 헤더 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">정책대표 공약</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          국민과의 약속을 지키기 위한 이재명 정부의 핵심 공약과 추진 현황을 투명하게 공개합니다.
        </p>
      </div>

      {/* 전체 현황 요약 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50개</div>
            <p className="text-sm text-gray-600">전체 공약</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">15개</div>
            <p className="text-sm text-gray-600">완료</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">32개</div>
            <p className="text-sm text-gray-600">진행중</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">3개</div>
            <p className="text-sm text-gray-600">지연</p>
          </CardContent>
        </Card>
      </div>

      {/* 카테고리 필터 */}
      <div className="flex flex-wrap gap-2 mb-8">
        {pledgeCategories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category.id)}
            className="flex items-center space-x-2"
          >
            <span>{category.name}</span>
            <Badge variant="secondary" className="ml-1">
              {category.count}
            </Badge>
          </Button>
        ))}
      </div>

      {/* 공약 목록 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredPledges.map((pledge) => (
          <Card key={pledge.id} className="h-full">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{pledge.icon}</span>
                  <div>
                    <CardTitle className="text-lg">{pledge.title}</CardTitle>
                    <div className="flex items-center space-x-2 mt-1">
                      {getStatusIcon(pledge.status)}
                      <Badge className={getStatusColor(pledge.status)}>{pledge.status}</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{pledge.description}</p>

              {/* 진행률 */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">진행률</span>
                  <span className="text-sm font-medium">{pledge.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${pledge.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* 세부 정보 */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">추진 일정:</span>
                  <span className="font-medium">{pledge.timeline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">소요 예산:</span>
                  <span className="font-medium">{pledge.budget}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 공약 이행 원칙 */}
      <Card className="mt-12">
        <CardHeader>
          <CardTitle className="text-xl text-center">공약 이행 원칙</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-medium mb-2">투명한 공개</h3>
              <p className="text-sm text-gray-600">모든 공약의 추진 현황을 투명하게 공개합니다</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="font-medium mb-2">약속된 일정</h3>
              <p className="text-sm text-gray-600">국민과 약속한 일정에 맞춰 차질없이 추진합니다</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-medium mb-2">성과 중심</h3>
              <p className="text-sm text-gray-600">실질적 성과를 통해 국민 삶의 질을 향상시킵니다</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
