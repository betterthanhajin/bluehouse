"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, FileText, Download, Calendar } from "lucide-react"

export default function GovernmentReportsPage() {
  const [selectedYear, setSelectedYear] = useState("2024")

  const years = ["2024", "2023", "2022"]

  const reports = [
    {
      id: 1,
      title: "2024년 경제정책방향",
      ministry: "기획재정부",
      date: "2024.12.15",
      summary:
        "2025년 경제 전망과 주요 경제정책 방향을 담은 보고서로, 경제 활력 제고와 구조개혁 추진 방안을 제시합니다.",
      image: "/placeholder.svg?height=200&width=300",
      fileSize: "5.2MB",
      pages: 48,
      views: 12580,
      isNew: true,
    },
    {
      id: 2,
      title: "디지털 혁신 추진 계획",
      ministry: "과학기술정보통신부",
      date: "2024.11.20",
      summary:
        "디지털 전환 가속화를 위한 정부의 종합 계획으로, AI, 빅데이터, 클라우드 등 핵심 기술 육성 방안을 담고 있습니다.",
      image: "/placeholder.svg?height=200&width=300",
      fileSize: "4.8MB",
      pages: 36,
      views: 9870,
    },
    {
      id: 3,
      title: "탄소중립 이행 현황",
      ministry: "환경부",
      date: "2024.10.05",
      summary: "2050 탄소중립 목표 달성을 위한 부문별 추진 현황과 향후 계획을 담은 보고서입니다.",
      image: "/placeholder.svg?height=200&width=300",
      fileSize: "6.5MB",
      pages: 52,
      views: 7650,
    },
    {
      id: 4,
      title: "국가 안보 전략",
      ministry: "국방부",
      date: "2024.09.10",
      summary: "변화하는 국제 정세에 대응하기 위한 국가 안보 전략과 국방 혁신 방안을 제시합니다.",
      image: "/placeholder.svg?height=200&width=300",
      fileSize: "3.7MB",
      pages: 30,
      views: 8420,
    },
    {
      id: 5,
      title: "사회안전망 강화 대책",
      ministry: "보건복지부",
      date: "2024.08.15",
      summary: "취약계층 지원 확대와 복지 사각지대 해소를 위한 종합 대책을 담고 있습니다.",
      image: "/placeholder.svg?height=200&width=300",
      fileSize: "4.2MB",
      pages: 42,
      views: 6750,
    },
  ]

  const featuredReport = reports[0]
  const upcomingReports = [
    {
      title: "2025년 교육혁신 방안",
      ministry: "교육부",
      date: "2024.12.20",
    },
    {
      title: "신산업 육성 전략",
      ministry: "산업통상자원부",
      date: "2024.12.22",
    },
    {
      title: "국토균형발전 계획",
      ministry: "국토교통부",
      date: "2024.12.28",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 페이지 헤더 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">정부 업무보고</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          각 부처의 주요 정책과 업무 추진 현황을 담은 정부 업무보고 자료를 제공합니다.
        </p>
      </div>

      {/* 주요 업무보고 하이라이트 */}
      <div className="mb-12">
        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image
                src={featuredReport.image || "/placeholder.svg"}
                alt={featuredReport.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center space-x-2 mb-3">
                <Badge variant="default">{featuredReport.ministry}</Badge>
                <span className="text-sm text-gray-500">{featuredReport.date}</span>
                {featuredReport.isNew && (
                  <Badge variant="secondary" className="bg-red-100 text-red-800">
                    NEW
                  </Badge>
                )}
              </div>
              <h2 className="text-2xl font-bold mb-4">{featuredReport.title}</h2>
              <p className="text-gray-600 mb-6">{featuredReport.summary}</p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <FileText className="h-4 w-4 mr-1" />
                  <span>{featuredReport.pages}페이지</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Download className="h-4 w-4 mr-1" />
                  <span>{featuredReport.fileSize}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Button>자료 다운로드</Button>
                <div className="flex items-center text-sm text-gray-500">
                  <span>조회 {featuredReport.views.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* 업무보고 필터 및 목록 */}
      <div className="mb-12">
        <Tabs defaultValue="all" className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <TabsList>
              <TabsTrigger value="all">전체</TabsTrigger>
              <TabsTrigger value="economy">경제</TabsTrigger>
              <TabsTrigger value="social">사회</TabsTrigger>
              <TabsTrigger value="foreign">외교</TabsTrigger>
              <TabsTrigger value="security">안보</TabsTrigger>
            </TabsList>

            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <span className="text-sm text-gray-500">연도별</span>
              <div className="flex space-x-1">
                {years.map((year) => (
                  <Button
                    key={year}
                    variant={selectedYear === year ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedYear(year)}
                  >
                    {year}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="space-y-6">
              {reports.slice(1).map((report) => (
                <Card key={report.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-48 h-48 md:h-auto flex-shrink-0">
                      <Image
                        src={report.image || "/placeholder.svg"}
                        alt={report.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="default">{report.ministry}</Badge>
                        <span className="text-sm text-gray-500">{report.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{report.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{report.summary}</p>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <FileText className="h-4 w-4 mr-1" />
                          <span>{report.pages}페이지</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Download className="h-4 w-4 mr-1" />
                          <span>{report.fileSize}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <Button variant="outline" size="sm">
                          자료 다운로드
                        </Button>
                        <Link href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                          상세보기 <ChevronRight className="h-4 w-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* 다른 탭 콘텐츠들도 유사한 구조로 구현 가능 */}
          <TabsContent value="economy" className="mt-0">
            <div className="p-8 text-center text-gray-500">
              <p>경제 분야 업무보고가 여기에 표시됩니다.</p>
            </div>
          </TabsContent>
        </Tabs>

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

      {/* 예정된 업무보고 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">예정된 업무보고</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingReports.map((report, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{report.title}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-sm text-gray-500">{report.ministry}</span>
                      <span className="text-xs text-gray-400">|</span>
                      <span className="text-sm text-gray-500">{report.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">업무보고 통계</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">87</div>
                <p className="text-sm text-gray-600">연간 업무보고</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">18</div>
                <p className="text-sm text-gray-600">부처</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">4</div>
                <p className="text-sm text-gray-600">분기별 보고</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">12</div>
                <p className="text-sm text-gray-600">특별 보고</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 업무보고 절차 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">업무보고 절차</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl mb-2">1️⃣</div>
              <h3 className="font-medium mb-2">부처별 자료 준비</h3>
              <p className="text-sm text-gray-600">각 부처에서 업무 현황과 계획 자료 준비</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl mb-2">2️⃣</div>
              <h3 className="font-medium mb-2">대통령실 사전 검토</h3>
              <p className="text-sm text-gray-600">대통령실에서 자료 검토 및 피드백</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl mb-2">3️⃣</div>
              <h3 className="font-medium mb-2">대통령 보고</h3>
              <p className="text-sm text-gray-600">대통령 주재 업무보고 회의 진행</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl mb-2">4️⃣</div>
              <h3 className="font-medium mb-2">국민 공개</h3>
              <p className="text-sm text-gray-600">업무보고 결과 국민 공개 및 피드백 수렴</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
