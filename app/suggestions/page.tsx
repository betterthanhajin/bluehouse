"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { ChevronRight, Lightbulb, CheckCircle, Clock, TrendingUp, Search } from "lucide-react"

export default function CitizenSuggestionsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const statistics = [
    { label: "총 제안 수", value: "15,847건", icon: Lightbulb, color: "text-blue-600" },
    { label: "처리 완료", value: "12,456건", icon: CheckCircle, color: "text-green-600" },
    { label: "검토 중", value: "2,891건", icon: Clock, color: "text-orange-600" },
    { label: "정책 반영", value: "1,234건", icon: TrendingUp, color: "text-purple-600" },
  ]

  const featuredSuggestions = [
    {
      id: 1,
      title: "대중교통 무료화 정책 제안",
      author: "김○○",
      date: "2024.12.10",
      category: "교통",
      summary: "환경보호와 서민 부담 경감을 위한 대중교통 무료화 정책을 제안합니다.",
      likes: 2847,
      status: "검토중",
      statusColor: "bg-blue-100 text-blue-800",
      isHot: true,
    },
    {
      id: 2,
      title: "청년 주거지원 확대 방안",
      author: "이○○",
      date: "2024.12.08",
      category: "주거",
      summary: "청년들의 주거 안정을 위한 다양한 지원 방안을 제안드립니다.",
      likes: 1956,
      status: "정책반영",
      statusColor: "bg-green-100 text-green-800",
      isHot: true,
    },
    {
      id: 3,
      title: "디지털 교육 격차 해소 방안",
      author: "박○○",
      date: "2024.12.05",
      category: "교육",
      summary: "농어촌 지역 학생들의 디지털 교육 격차를 해소하기 위한 제안입니다.",
      likes: 1523,
      status: "검토중",
      statusColor: "bg-blue-100 text-blue-800",
      isHot: false,
    },
  ]

  const categories = [
    { name: "경제", count: 3247, color: "bg-blue-100 text-blue-800" },
    { name: "사회", count: 2856, color: "bg-green-100 text-green-800" },
    { name: "교육", count: 2134, color: "bg-purple-100 text-purple-800" },
    { name: "환경", count: 1892, color: "bg-emerald-100 text-emerald-800" },
    { name: "교통", count: 1567, color: "bg-orange-100 text-orange-800" },
    { name: "문화", count: 1234, color: "bg-pink-100 text-pink-800" },
  ]

  const successStories = [
    {
      title: "반려동물 동반 출입 가능 공간 확대",
      description: "시민 제안으로 공원과 카페 등에서 반려동물 동반 출입이 가능해졌습니다.",
      date: "2024.11.15",
      impact: "전국 500여 곳 확대",
    },
    {
      title: "야간 안전 귀가 서비스 도입",
      description: "여성 안전을 위한 야간 귀가 서비스가 시민 제안으로 도입되었습니다.",
      date: "2024.10.20",
      impact: "월 평균 2,000명 이용",
    },
    {
      title: "장애인 접근성 개선 사업",
      description: "장애인 편의시설 확충에 대한 제안이 정책에 반영되었습니다.",
      date: "2024.09.10",
      impact: "공공시설 1,200곳 개선",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 페이지 헤더 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">국민제안</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          국민 여러분의 소중한 의견과 제안으로 더 나은 정책을 만들어갑니다. 여러분의 목소리가 정책이 됩니다.
        </p>
      </div>

      {/* 제안하기 CTA */}
      <div className="mb-12">
        <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">정책 제안하기</h2>
              <p className="text-lg mb-6 opacity-90">
                여러분의 아이디어가 대한민국을 바꿉니다. 지금 바로 정책을 제안해보세요!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Lightbulb className="h-5 w-5 mr-2" />
                  제안하기
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  제안 가이드
                </Button>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="국민제안 일러스트"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Card>
      </div>

      {/* 통계 현황 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">국민제안 현황</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {statistics.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <IconComponent className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                  <div className={`text-2xl md:text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* 탭 메뉴 */}
      <Tabs defaultValue="featured" className="mb-12">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="featured">인기 제안</TabsTrigger>
          <TabsTrigger value="recent">최신 제안</TabsTrigger>
          <TabsTrigger value="categories">분야별</TabsTrigger>
          <TabsTrigger value="success">성공 사례</TabsTrigger>
        </TabsList>

        {/* 인기 제안 */}
        <TabsContent value="featured" className="mt-6">
          <div className="space-y-6">
            {featuredSuggestions.map((suggestion) => (
              <Card key={suggestion.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{suggestion.category}</Badge>
                      <Badge className={suggestion.statusColor}>{suggestion.status}</Badge>
                      {suggestion.isHot && <Badge className="bg-red-100 text-red-800">🔥 HOT</Badge>}
                    </div>
                    <span className="text-sm text-gray-500">{suggestion.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{suggestion.title}</h3>
                  <p className="text-gray-600 mb-4">{suggestion.summary}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>제안자: {suggestion.author}</span>
                      <div className="flex items-center space-x-1">
                        <span>👍</span>
                        <span>{suggestion.likes.toLocaleString()}</span>
                      </div>
                    </div>
                    <Link href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                      자세히 보기 <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* 최신 제안 */}
        <TabsContent value="recent" className="mt-6">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="제안 검색..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="p-8 text-center text-gray-500">
            <p>최신 제안 목록이 여기에 표시됩니다.</p>
          </div>
        </TabsContent>

        {/* 분야별 제안 */}
        <TabsContent value="categories" className="mt-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-2">{category.count.toLocaleString()}</div>
                  <Badge className={category.color}>건</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* 성공 사례 */}
        <TabsContent value="success" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <Badge className="bg-green-100 text-green-800">정책반영</Badge>
                  </div>
                  <CardTitle className="text-lg">{story.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">반영일:</span>
                      <span className="font-medium">{story.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">효과:</span>
                      <span className="font-medium text-green-600">{story.impact}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* 제안 프로세스 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">제안 처리 프로세스</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: 1, title: "제안 접수", description: "온라인으로 제안서 제출", duration: "즉시" },
            { step: 2, title: "검토", description: "담당 부서에서 제안 검토", duration: "7일" },
            { step: 3, title: "심사", description: "전문가 위원회 심사", duration: "14일" },
            { step: 4, title: "결과 통보", description: "채택/불채택 결과 통보", duration: "3일" },
            { step: 5, title: "정책 반영", description: "채택된 제안의 정책 반영", duration: "30일" },
          ].map((process, index) => (
            <div key={index} className="relative">
              <Card className="h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold">{process.step}</span>
                  </div>
                  <h3 className="font-bold mb-2">{process.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{process.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {process.duration}
                  </Badge>
                </CardContent>
              </Card>
              {index < 4 && (
                <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                  <ChevronRight className="h-6 w-6 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 참여 방법 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-center">국민제안 참여 방법</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="font-medium mb-2">아이디어 제안</h3>
              <p className="text-sm text-gray-600">일상에서 느끼는 불편함이나 개선 아이디어를 자유롭게 제안해주세요</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🗳️</div>
              <h3 className="font-medium mb-2">제안 평가</h3>
              <p className="text-sm text-gray-600">
                다른 국민들의 제안에 공감하고 의견을 나누어 더 좋은 정책을 만들어가세요
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📢</div>
              <h3 className="font-medium mb-2">정책 홍보</h3>
              <p className="text-sm text-gray-600">
                좋은 정책 제안을 주변에 알려 더 많은 사람들이 참여할 수 있도록 도와주세요
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
