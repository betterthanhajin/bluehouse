"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Calendar, Clock, Video, FileText } from "lucide-react"

export default function PolicyBriefingsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "전체" },
    { id: "economy", name: "경제" },
    { id: "social", name: "사회" },
    { id: "foreign", name: "외교" },
    { id: "security", name: "안보" },
  ]

  const briefings = [
    {
      id: 1,
      title: "2025년 경제정책방향 브리핑",
      speaker: "기획재정부 장관",
      date: "2024.12.15",
      time: "14:00",
      category: "economy",
      summary:
        "2025년 경제 전망과 주요 경제정책 방향을 담은 브리핑으로, 경제 활력 제고와 구조개혁 추진 방안을 발표합니다.",
      image: "/placeholder.svg?height=200&width=300",
      hasVideo: true,
      hasTranscript: true,
      views: 12580,
      isLive: false,
      isNew: true,
    },
    {
      id: 2,
      title: "디지털 혁신 추진 계획 발표",
      speaker: "과학기술정보통신부 장관",
      date: "2024.11.20",
      time: "10:30",
      category: "economy",
      summary:
        "디지털 전환 가속화를 위한 정부의 종합 계획으로, AI, 빅데이터, 클라우드 등 핵심 기술 육성 방안을 발표합니다.",
      image: "/placeholder.svg?height=200&width=300",
      hasVideo: true,
      hasTranscript: true,
      views: 9870,
      isLive: false,
    },
    {
      id: 3,
      title: "탄소중립 이행 현황 브리핑",
      speaker: "환경부 장관",
      date: "2024.10.05",
      time: "11:00",
      category: "social",
      summary: "2050 탄소중립 목표 달성을 위한 부문별 추진 현황과 향후 계획을 발표합니다.",
      image: "/placeholder.svg?height=200&width=300",
      hasVideo: true,
      hasTranscript: true,
      views: 7650,
      isLive: false,
    },
    {
      id: 4,
      title: "한-미 정상회담 결과 브리핑",
      speaker: "외교부 장관",
      date: "2024.09.10",
      time: "16:00",
      category: "foreign",
      summary: "한-미 정상회담의 주요 성과와 합의 사항에 대해 설명합니다.",
      image: "/placeholder.svg?height=200&width=300",
      hasVideo: true,
      hasTranscript: false,
      views: 18420,
      isLive: false,
    },
    {
      id: 5,
      title: "사회안전망 강화 대책 발표",
      speaker: "보건복지부 장관",
      date: "2024.08.15",
      time: "14:30",
      category: "social",
      summary: "취약계층 지원 확대와 복지 사각지대 해소를 위한 종합 대책을 발표합니다.",
      image: "/placeholder.svg?height=200&width=300",
      hasVideo: false,
      hasTranscript: true,
      views: 6750,
      isLive: false,
    },
  ]

  const upcomingBriefings = [
    {
      title: "2025년 교육혁신 방안 브리핑",
      speaker: "교육부 장관",
      date: "2024.12.20",
      time: "10:00",
      isLive: true,
    },
    {
      title: "신산업 육성 전략 발표",
      speaker: "산업통상자원부 장관",
      date: "2024.12.22",
      time: "14:00",
      isLive: false,
    },
  ]

  const filteredBriefings =
    selectedCategory === "all" ? briefings : briefings.filter((b) => b.category === selectedCategory)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 페이지 헤더 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">정책브리핑</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          주요 정책과 현안에 대한 정부 부처의 브리핑과 발표 자료를 제공합니다.
        </p>
      </div>

      {/* 예정된 브리핑 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">예정된 브리핑</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingBriefings.map((briefing, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-600">
                      {briefing.date} {briefing.time}
                    </span>
                  </div>
                  {briefing.isLive && (
                    <Badge className="bg-red-100 text-red-800">
                      <span className="mr-1 h-2 w-2 rounded-full bg-red-600 animate-pulse inline-block"></span>
                      LIVE 예정
                    </Badge>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{briefing.title}</h3>
                <p className="text-gray-600 mb-4">발표자: {briefing.speaker}</p>
                <div className="flex justify-between items-center">
                  <Button variant={briefing.isLive ? "default" : "outline"}>
                    {briefing.isLive ? "알림 설정" : "일정 확인"}
                  </Button>
                  {briefing.isLive && (
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>시작 {calculateTimeRemaining(briefing.date, briefing.time)}</span>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* 브리핑 필터 및 목록 */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">지난 브리핑</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="space-y-6">
          {filteredBriefings.map((briefing) => (
            <Card key={briefing.id} className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-48 h-48 md:h-auto flex-shrink-0">
                  <Image
                    src={briefing.image || "/placeholder.svg"}
                    alt={briefing.title}
                    fill
                    className="object-cover"
                  />
                  {briefing.hasVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[8px] border-l-blue-800 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="outline">{getCategoryName(briefing.category)}</Badge>
                    <span className="text-sm text-gray-500">
                      {briefing.date} {briefing.time}
                    </span>
                    {briefing.isNew && (
                      <Badge variant="secondary" className="bg-red-100 text-red-800">
                        NEW
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{briefing.title}</h3>
                  <p className="text-gray-600 mb-2">발표자: {briefing.speaker}</p>
                  <p className="text-gray-600 mb-4 line-clamp-2">{briefing.summary}</p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    {briefing.hasVideo && (
                      <div className="flex items-center text-sm text-gray-500">
                        <Video className="h-4 w-4 mr-1" />
                        <span>영상</span>
                      </div>
                    )}
                    {briefing.hasTranscript && (
                      <div className="flex items-center text-sm text-gray-500">
                        <FileText className="h-4 w-4 mr-1" />
                        <span>스크립트</span>
                      </div>
                    )}
                    <div className="flex items-center text-sm text-gray-500">
                      <span>조회 {briefing.views.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    {briefing.hasVideo && <Button size="sm">영상 보기</Button>}
                    {briefing.hasTranscript && (
                      <Button size="sm" variant="outline">
                        스크립트
                      </Button>
                    )}
                    <Link href="#" className="text-blue-600 hover:text-blue-800 flex items-center ml-auto">
                      상세보기 <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* 페이지네이션 */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-1">
            <Button variant="outline" size="sm" disabled>
              이전
            </Button>
            <Button variant="default" size="sm">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              다음
            </Button>
          </div>
        </div>
      </div>

      {/* 브리핑 통계 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">브리핑 통계</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">124</div>
              <p className="text-sm text-gray-600">연간 브리핑</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">18</div>
              <p className="text-sm text-gray-600">부처</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">85%</div>
              <p className="text-sm text-gray-600">영상 제공률</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">92%</div>
              <p className="text-sm text-gray-600">스크립트 제공률</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// 카테고리 이름 가져오기
function getCategoryName(categoryId: string) {
  const categories = {
    economy: "경제",
    social: "사회",
    foreign: "외교",
    security: "안보",
  }
  return categories[categoryId as keyof typeof categories] || categoryId
}

// 남은 시간 계산 (예시 함수)
function calculateTimeRemaining(date: string, time: string) {
  return "2시간 후"
}
