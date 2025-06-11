"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, FileText, Download, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function PolicyResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedYear, setSelectedYear] = useState("all")

  const years = ["all", "2024", "2023", "2022"]

  const resources = [
    {
      id: 1,
      title: "2024 정책대 관리 활용 종합 자료집",
      type: "종합 자료집",
      date: "2024.12.01",
      year: "2024",
      summary:
        "2024년 주요 정책의 추진 현황과 성과를 종합적으로 정리한 자료집으로, 정책 관리 시스템의 운영 사례와 우수 성과를 담고 있습니다.",
      image: "/placeholder.svg?height=200&width=300",
      fileSize: "12.5MB",
      pages: 156,
      views: 8750,
      isNew: true,
    },
    {
      id: 2,
      title: "정책 성과 측정 가이드라인",
      type: "가이드라인",
      date: "2024.10.15",
      year: "2024",
      summary: "정책의 성과를 객관적으로 측정하기 위한 지표 설정과 평가 방법론을 담은 가이드라인입니다.",
      image: "/placeholder.svg?height=200&width=300",
      fileSize: "4.8MB",
      pages: 48,
      views: 5620,
    },
    {
      id: 3,
      title: "정책 모니터링 시스템 운영 매뉴얼",
      type: "매뉴얼",
      date: "2024.08.20",
      year: "2024",
      summary: "정책 추진 현황을 실시간으로 모니터링하는 시스템의 운영 방법과 활용 사례를 담은 매뉴얼입니다.",
      image: "/placeholder.svg?height=200&width=300",
      fileSize: "6.2MB",
      pages: 72,
      views: 4380,
    },
    {
      id: 4,
      title: "2023 정책대 관리 활용 종합 자료집",
      type: "종합 자료집",
      date: "2023.12.05",
      year: "2023",
      summary: "2023년 주요 정책의 추진 현황과 성과를 종합적으로 정리한 자료집입니다.",
      image: "/placeholder.svg?height=200&width=300",
      fileSize: "11.8MB",
      pages: 142,
      views: 12450,
    },
    {
      id: 5,
      title: "정책 피드백 체계 구축 사례집",
      type: "사례집",
      date: "2023.09.10",
      year: "2023",
      summary: "정책 실행 과정에서 수집된 피드백을 정책 개선에 활용한 우수 사례를 소개합니다.",
      image: "/placeholder.svg?height=200&width=300",
      fileSize: "5.5MB",
      pages: 64,
      views: 3870,
    },
    {
      id: 6,
      title: "2022 정책대 관리 활용 종합 자료집",
      type: "종합 자료집",
      date: "2022.12.10",
      year: "2022",
      summary: "2022년 주요 정책의 추진 현황과 성과를 종합적으로 정리한 자료집입니다.",
      image: "/placeholder.svg?height=200&width=300",
      fileSize: "10.5MB",
      pages: 128,
      views: 15780,
    },
  ]

  const featuredResource = resources[0]

  // 검색 및 필터링 적용
  const filteredResources = resources.filter((resource) => {
    const matchesSearch = searchQuery
      ? resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.summary.toLowerCase().includes(searchQuery.toLowerCase())
      : true
    const matchesYear = selectedYear === "all" ? true : resource.year === selectedYear
    return matchesSearch && matchesYear
  })

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 페이지 헤더 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">정책대 관리 활용 자료집</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          정책 관리와 활용에 관한 다양한 자료집, 가이드라인, 매뉴얼을 제공합니다.
        </p>
      </div>

      {/* 주요 자료 하이라이트 */}
      <div className="mb-12">
        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image
                src={featuredResource.image || "/placeholder.svg"}
                alt={featuredResource.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center space-x-2 mb-3">
                <Badge variant="outline">{featuredResource.type}</Badge>
                <span className="text-sm text-gray-500">{featuredResource.date}</span>
                {featuredResource.isNew && (
                  <Badge variant="secondary" className="bg-red-100 text-red-800">
                    NEW
                  </Badge>
                )}
              </div>
              <h2 className="text-2xl font-bold mb-4">{featuredResource.title}</h2>
              <p className="text-gray-600 mb-6">{featuredResource.summary}</p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <FileText className="h-4 w-4 mr-1" />
                  <span>{featuredResource.pages}페이지</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Download className="h-4 w-4 mr-1" />
                  <span>{featuredResource.fileSize}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <Button>자료 다운로드</Button>
                <div className="flex items-center text-sm text-gray-500">
                  <span>조회 {featuredResource.views.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* 검색 및 필터 */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="자료 검색..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500 whitespace-nowrap">연도별</span>
            <div className="flex space-x-1">
              {years.map((year) => (
                <Button
                  key={year}
                  variant={selectedYear === year ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedYear(year)}
                >
                  {year === "all" ? "전체" : year}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* 자료 목록 */}
        <div className="space-y-6">
          {filteredResources.slice(1).map((resource) => (
            <Card key={resource.id} className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-48 h-48 md:h-auto flex-shrink-0">
                  <Image
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="outline">{resource.type}</Badge>
                    <span className="text-sm text-gray-500">{resource.date}</span>
                    {resource.isNew && (
                      <Badge variant="secondary" className="bg-red-100 text-red-800">
                        NEW
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{resource.summary}</p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <FileText className="h-4 w-4 mr-1" />
                      <span>{resource.pages}페이지</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Download className="h-4 w-4 mr-1" />
                      <span>{resource.fileSize}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>조회 {resource.views.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Button variant="outline" size="sm">
                      자료 다운로드
                    </Button>
                    <Link href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                      미리보기 <ChevronRight className="h-4 w-4 ml-1" />
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
              다음
            </Button>
          </div>
        </div>
      </div>

      {/* 자료 유형 안내 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">자료 유형 안내</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">종합 자료집</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                연간 정책 추진 현황과 성과를 종합적으로 정리한 자료집으로, 정책 관리 시스템의 운영 사례와 우수 성과를
                담고 있습니다.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">가이드라인</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                정책 기획, 실행, 평가 등 정책 관리의 각 단계별 표준화된 방법론과 절차를 제시하는 지침서입니다.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">매뉴얼</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                정책 관리 시스템의 구체적인 운영 방법과 활용 방안을 단계별로 상세히 설명한 실무 지침서입니다.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">사례집</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                정책 관리 시스템을 효과적으로 활용한 우수 사례와 성공 요인을 분석하여 정리한 자료집입니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 자료 활용 안내 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">자료 활용 안내</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-3">자료 이용 대상</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                <li>중앙부처 및 지방자치단체 정책 담당자</li>
                <li>정책 연구기관 및 학계 연구자</li>
                <li>정책에 관심 있는 일반 국민</li>
                <li>언론 및 미디어 관계자</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">활용 방법</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                <li>정책 기획 및 설계 참고자료</li>
                <li>정책 성과 측정 및 평가 도구</li>
                <li>정책 개선 및 보완 사례 학습</li>
                <li>정책 연구 및 분석 기초자료</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">저작권 안내</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                <li>출처 표시 후 자유롭게 활용 가능</li>
                <li>상업적 목적의 무단 사용 금지</li>
                <li>내용 임의 변경 및 왜곡 금지</li>
                <li>공공누리 제1유형 적용</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
