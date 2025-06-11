"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, FileText, Download, CheckCircle, Clock } from "lucide-react"

export default function PolicyManagementPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "전체" },
    { id: "economy", name: "경제" },
    { id: "social", name: "사회" },
    { id: "foreign", name: "외교" },
    { id: "security", name: "안보" },
  ]

  const policies = [
    {
      id: 1,
      title: "기본소득 정책 추진 현황",
      category: "economy",
      date: "2024.12.15",
      summary: "모든 국민에게 기본적인 소득을 보장하는 기본소득 정책의 추진 현황과 성과, 향후 계획을 담은 자료입니다.",
      image: "/placeholder.svg?height=200&width=300",
      status: "진행중",
      progress: 65,
      department: "기획재정부",
      fileSize: "4.8MB",
      views: 12580,
      isNew: true,
    },
    {
      id: 2,
      title: "디지털 뉴딜 2.0 추진 전략",
      category: "economy",
      date: "2024.11.20",
      summary:
        "디지털 전환 가속화를 위한 디지털 뉴딜 2.0 전략으로, AI, 빅데이터, 클라우드 등 핵심 기술 육성 방안을 담고 있습니다.",
      image: "/placeholder.svg?height=200&width=300",
      status: "진행중",
      progress: 45,
      department: "과학기술정보통신부",
      fileSize: "5.2MB",
      views: 9870,
    },
    {
      id: 3,
      title: "2050 탄소중립 로드맵",
      category: "social",
      date: "2024.10.05",
      summary: "2050년까지 탄소중립 달성을 위한 단계별 추진 전략과 부문별 감축 목표를 담은 로드맵입니다.",
      image: "/placeholder.svg?height=200&width=300",
      status: "진행중",
      progress: 30,
      department: "환경부",
      fileSize: "6.5MB",
      views: 7650,
    },
    {
      id: 4,
      title: "한반도 평화 프로세스",
      category: "foreign",
      date: "2024.09.10",
      summary: "한반도 평화 정착을 위한 단계별 접근 전략과 남북 협력 방안을 제시합니다.",
      image: "/placeholder.svg?height=200&width=300",
      status: "진행중",
      progress: 25,
      department: "통일부",
      fileSize: "3.7MB",
      views: 8420,
    },
    {
      id: 5,
      title: "국민 주거복지 로드맵",
      category: "social",
      date: "2024.08.15",
      summary: "모든 국민의 주거권 보장을 위한 주택 공급 확대와 주거 복지 강화 방안을 담고 있습니다.",
      image: "/placeholder.svg?height=200&width=300",
      status: "완료",
      progress: 100,
      department: "국토교통부",
      fileSize: "4.2MB",
      views: 6750,
    },
  ]

  const featuredPolicy = policies[0]
  const completedPolicies = [
    {
      title: "청년 일자리 창출 정책",
      department: "고용노동부",
      date: "2024.07.15",
      achievement: "청년 일자리 50만개 창출",
    },
    {
      title: "의료 보장성 강화 정책",
      department: "보건복지부",
      date: "2024.06.20",
      achievement: "건강보험 보장률 90% 달성",
    },
    {
      title: "신재생에너지 확대 정책",
      department: "산업통상자원부",
      date: "2024.05.10",
      achievement: "신재생에너지 비중 30% 달성",
    },
  ]

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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "완료":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "진행중":
        return <Clock className="h-4 w-4 text-blue-600" />
      default:
        return null
    }
  }

  const filteredPolicies =
    selectedCategory === "all" ? policies : policies.filter((p) => p.category === selectedCategory)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 페이지 헤더 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">정책대 관리 활용</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          국정과제와 주요 정책의 추진 현황과 성과를 체계적으로 관리하고 활용하는 시스템을 소개합니다.
        </p>
      </div>

      {/* 정책대 관리 시스템 소개 */}
      <div className="mb-12">
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4">정책대 관리 시스템이란?</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  정책대 관리 시스템은 국정과제와 주요 정책을 체계적으로 관리하고 성과를 측정하는 대통령실의 핵심
                  시스템입니다.
                </p>
                <p>
                  정책의 기획부터 실행, 평가까지 전 과정을 통합 관리하여 정책의 일관성과 효율성을 높이고, 국민에게
                  정책의 추진 현황과 성과를 투명하게 공개합니다.
                </p>
                <p>
                  데이터 기반의 과학적 정책 관리를 통해 정책의 효과를 극대화하고, 국민의 삶의 질 향상에 실질적으로
                  기여하는 정책 추진을 목표로 합니다.
                </p>
              </div>
              <div className="mt-6">
                <Button>시스템 상세 소개</Button>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="정책대 관리 시스템 개념도"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Card>
      </div>

      {/* 주요 정책 하이라이트 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">주요 정책 하이라이트</h2>
        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image
                src={featuredPolicy.image || "/placeholder.svg"}
                alt={featuredPolicy.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center space-x-2 mb-3">
                <Badge variant="outline">{getCategoryName(featuredPolicy.category)}</Badge>
                <span className="text-sm text-gray-500">{featuredPolicy.date}</span>
                {featuredPolicy.isNew && (
                  <Badge variant="secondary" className="bg-red-100 text-red-800">
                    NEW
                  </Badge>
                )}
              </div>
              <h2 className="text-2xl font-bold mb-4">{featuredPolicy.title}</h2>
              <p className="text-gray-600 mb-4">{featuredPolicy.summary}</p>

              {/* 진행률 */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(featuredPolicy.status)}
                    <Badge className={getStatusColor(featuredPolicy.status)}>{featuredPolicy.status}</Badge>
                  </div>
                  <span className="text-sm font-medium">{featuredPolicy.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${featuredPolicy.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-sm text-gray-500">
                  <FileText className="h-4 w-4 mr-1" />
                  <span>담당: {featuredPolicy.department}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Download className="h-4 w-4 mr-1" />
                  <span>{featuredPolicy.fileSize}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Button>상세 보기</Button>
                <div className="flex items-center text-sm text-gray-500">
                  <span>조회 {featuredPolicy.views.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* 정책 필터 및 목록 */}
      <div className="mb-12">
        <Tabs defaultValue="progress" className="mb-8">
          <TabsList>
            <TabsTrigger value="progress">추진 현황</TabsTrigger>
            <TabsTrigger value="achievement">주요 성과</TabsTrigger>
            <TabsTrigger value="evaluation">정책 평가</TabsTrigger>
          </TabsList>

          <div className="flex flex-wrap gap-2 my-6">
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

          <TabsContent value="progress" className="mt-0">
            <div className="space-y-6">
              {filteredPolicies.slice(1).map((policy) => (
                <Card key={policy.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-48 h-48 md:h-auto flex-shrink-0">
                      <Image
                        src={policy.image || "/placeholder.svg"}
                        alt={policy.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline">{getCategoryName(policy.category)}</Badge>
                        <span className="text-sm text-gray-500">{policy.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{policy.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{policy.summary}</p>

                      {/* 진행률 */}
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(policy.status)}
                            <Badge className={getStatusColor(policy.status)}>{policy.status}</Badge>
                          </div>
                          <span className="text-sm font-medium">{policy.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${policy.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <FileText className="h-4 w-4 mr-1" />
                          <span>담당: {policy.department}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <Button variant="outline" size="sm">
                          상세 보기
                        </Button>
                        <Link href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                          자료 다운로드 <ChevronRight className="h-4 w-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievement" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {completedPolicies.map((policy, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <Badge className="bg-green-100 text-green-800">완료</Badge>
                    </div>
                    <CardTitle className="text-lg">{policy.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">담당 부처:</span>
                        <span className="font-medium">{policy.department}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">완료일:</span>
                        <span className="font-medium">{policy.date}</span>
                      </div>
                      <div className="pt-4 border-t">
                        <h4 className="font-medium mb-2">주요 성과</h4>
                        <p className="text-sm text-gray-700">{policy.achievement}</p>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        상세 성과 보기
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="evaluation" className="mt-0">
            <div className="p-8 text-center text-gray-500">
              <p>정책 평가 결과가 여기에 표시됩니다.</p>
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

      {/* 정책대 관리 프로세스 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">정책대 관리 프로세스</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl mb-2">1️⃣</div>
              <h3 className="font-medium mb-2">정책 기획</h3>
              <p className="text-sm text-gray-600">국정과제 및 주요 정책 기획</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl mb-2">2️⃣</div>
              <h3 className="font-medium mb-2">실행 계획</h3>
              <p className="text-sm text-gray-600">세부 실행 계획 수립</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl mb-2">3️⃣</div>
              <h3 className="font-medium mb-2">정책 실행</h3>
              <p className="text-sm text-gray-600">부처별 정책 추진</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl mb-2">4️⃣</div>
              <h3 className="font-medium mb-2">성과 측정</h3>
              <p className="text-sm text-gray-600">정책 성과 모니터링</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl mb-2">5️⃣</div>
              <h3 className="font-medium mb-2">평가 및 개선</h3>
              <p className="text-sm text-gray-600">정책 평가 및 보완</p>
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
