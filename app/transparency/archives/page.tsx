"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronRight, Search, FileText, Download, Eye } from "lucide-react"

export default function PresidentialArchivesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPresident, setSelectedPresident] = useState("all")

  const presidents = [
    { id: "all", name: "전체", period: "" },
    { id: "lee-jm", name: "이재명", period: "2022~현재" },
    { id: "moon-jae-in", name: "문재인", period: "2017~2022" },
    { id: "park-geun-hye", name: "박근혜", period: "2013~2017" },
    { id: "lee-myung-bak", name: "이명박", period: "2008~2013" },
  ]

  const archives = [
    {
      id: 1,
      president: "이재명",
      title: "2024년 신년사",
      date: "2024.01.01",
      category: "연설문",
      description: "2024년 새해를 맞아 국민께 드리는 대통령의 신년 인사말",
      image: "/placeholder.svg?height=200&width=300",
      fileSize: "2.5MB",
      views: 15420,
      isNew: true,
    },
    {
      id: 2,
      president: "이재명",
      title: "제79주년 광복절 경축사",
      date: "2024.08.15",
      category: "경축사",
      description: "광복 79주년을 맞아 발표한 대통령의 경축사",
      image: "/placeholder.svg?height=200&width=300",
      fileSize: "3.2MB",
      views: 12580,
    },
    {
      id: 3,
      president: "문재인",
      title: "2022년 신년사",
      date: "2022.01.01",
      category: "연설문",
      description: "2022년 새해를 맞아 국민께 드리는 신년 인사말",
      image: "/placeholder.svg?height=200&width=300",
      fileSize: "2.8MB",
      views: 28750,
    },
    {
      id: 4,
      president: "문재인",
      title: "코로나19 극복 국민담화",
      date: "2020.03.19",
      category: "담화문",
      description: "코로나19 위기 극복을 위한 대통령의 특별 담화",
      image: "/placeholder.svg?height=200&width=300",
      fileSize: "1.8MB",
      views: 45620,
    },
    {
      id: 5,
      president: "박근혜",
      title: "2016년 신년사",
      date: "2016.01.01",
      category: "연설문",
      description: "2016년 새해를 맞아 국민께 드리는 신년 인사말",
      image: "/placeholder.svg?height=200&width=300",
      fileSize: "2.1MB",
      views: 18930,
    },
  ]

  const categories = [
    { name: "연설문", count: 1247, color: "bg-blue-100 text-blue-800" },
    { name: "담화문", count: 856, color: "bg-green-100 text-green-800" },
    { name: "기자회견", count: 634, color: "bg-purple-100 text-purple-800" },
    { name: "서면인터뷰", count: 423, color: "bg-orange-100 text-orange-800" },
  ]

  const featuredArchive = archives[0]

  const filteredArchives = archives.filter((archive) => {
    const matchesSearch = searchQuery
      ? archive.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        archive.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true
    const matchesPresident =
      selectedPresident === "all" ? true : archive.president === getPresidentName(selectedPresident)
    return matchesSearch && matchesPresident
  })

  function getPresidentName(id: string) {
    const president = presidents.find((p) => p.id === id)
    return president ? president.name : ""
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 페이지 헤더 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">대통령 기록관</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          역대 대통령의 주요 연설문, 담화문, 기자회견 등 중요한 기록을 보존하고 공개합니다.
        </p>
      </div>

      {/* 기록관 소개 */}
      <div className="mb-12">
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4">대통령 기록관이란?</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  대통령 기록관은 「대통령기록물 관리에 관한 법률」에 따라 대통령의 공적 활동과 관련된 모든 기록물을
                  체계적으로 수집, 보존, 관리하는 기관입니다.
                </p>
                <p>
                  역대 대통령의 연설문, 담화문, 기자회견, 정책 자료 등을 디지털화하여 국민들이 쉽게 접근할 수 있도록
                  서비스하고 있습니다.
                </p>
                <p>이를 통해 대한민국의 정치사와 정책사를 연구하고 학습할 수 있는 소중한 자료를 제공하고 있습니다.</p>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="대통령 기록관 전경"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Card>
      </div>

      {/* 주요 기록 하이라이트 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">주요 기록 하이라이트</h2>
        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image
                src={featuredArchive.image || "/placeholder.svg"}
                alt={featuredArchive.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center space-x-2 mb-3">
                <Badge variant="outline">{featuredArchive.president}</Badge>
                <Badge className="bg-blue-100 text-blue-800">{featuredArchive.category}</Badge>
                <span className="text-sm text-gray-500">{featuredArchive.date}</span>
                {featuredArchive.isNew && (
                  <Badge variant="secondary" className="bg-red-100 text-red-800">
                    NEW
                  </Badge>
                )}
              </div>
              <h2 className="text-2xl font-bold mb-4">{featuredArchive.title}</h2>
              <p className="text-gray-600 mb-6">{featuredArchive.description}</p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <FileText className="h-4 w-4 mr-1" />
                  <span>{featuredArchive.fileSize}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Eye className="h-4 w-4 mr-1" />
                  <span>조회 {featuredArchive.views.toLocaleString()}</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Button>전문 보기</Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  다운로드
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* 기록 분류 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">기록 분류</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <h3 className="font-bold mb-2">{category.name}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">{category.count.toLocaleString()}</div>
                <Badge className={category.color}>건</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 기록 검색 및 목록 */}
      <div className="mb-12">
        <Tabs defaultValue="search" className="mb-8">
          <TabsList>
            <TabsTrigger value="search">기록 검색</TabsTrigger>
            <TabsTrigger value="timeline">연대기별</TabsTrigger>
            <TabsTrigger value="category">분류별</TabsTrigger>
          </TabsList>

          <TabsContent value="search" className="mt-6">
            {/* 검색 필터 */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="기록 검색..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={selectedPresident} onValueChange={setSelectedPresident}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="대통령 선택" />
                </SelectTrigger>
                <SelectContent>
                  {presidents.map((president) => (
                    <SelectItem key={president.id} value={president.id}>
                      {president.name} {president.period}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* 기록 목록 */}
            <div className="space-y-6">
              {filteredArchives.slice(1).map((archive) => (
                <Card key={archive.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-48 h-48 md:h-auto flex-shrink-0">
                      <Image
                        src={archive.image || "/placeholder.svg"}
                        alt={archive.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline">{archive.president}</Badge>
                        <Badge className="bg-blue-100 text-blue-800">{archive.category}</Badge>
                        <span className="text-sm text-gray-500">{archive.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{archive.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{archive.description}</p>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <FileText className="h-4 w-4 mr-1" />
                          <span>{archive.fileSize}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Eye className="h-4 w-4 mr-1" />
                          <span>조회 {archive.views.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            전문 보기
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-1" />
                            다운로드
                          </Button>
                        </div>
                        <Link href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
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
          </TabsContent>

          <TabsContent value="timeline" className="mt-6">
            <div className="p-8 text-center text-gray-500">
              <p>연대기별 기록이 여기에 표시됩니다.</p>
            </div>
          </TabsContent>

          <TabsContent value="category" className="mt-6">
            <div className="p-8 text-center text-gray-500">
              <p>분류별 기록이 여기에 표시됩니다.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* 기록관 이용 안내 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">기록관 이용 안내</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-3">이용 대상</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                <li>학술 연구자 및 학생</li>
                <li>언론 및 미디어 관계자</li>
                <li>정책 연구기관</li>
                <li>일반 국민</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">제공 서비스</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                <li>온라인 열람 및 검색</li>
                <li>원문 다운로드</li>
                <li>연구 지원 서비스</li>
                <li>교육 프로그램</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">이용 시간</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                <li>온라인: 24시간 이용 가능</li>
                <li>방문 열람: 평일 09:00~18:00</li>
                <li>휴관일: 토·일요일, 공휴일</li>
                <li>사전 예약 필수</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
