"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, FileText, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react"

export default function SuggestionStatusPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchType, setSearchType] = useState("number")

  const mySubmissions = [
    {
      id: "SUG-2024-001234",
      title: "대중교통 무료화 정책 제안",
      date: "2024.12.10",
      status: "검토중",
      statusColor: "bg-blue-100 text-blue-800",
      progress: 60,
      feedback: "담당 부서에서 검토 중입니다. 곧 결과를 알려드리겠습니다.",
    },
    {
      id: "SUG-2024-001156",
      title: "공원 내 반려동물 놀이터 설치",
      date: "2024.11.25",
      status: "정책반영",
      statusColor: "bg-green-100 text-green-800",
      progress: 100,
      feedback: "우수한 제안으로 평가되어 2025년 예산에 반영되었습니다.",
    },
    {
      id: "SUG-2024-000987",
      title: "야간 안전 귀가 서비스 확대",
      date: "2024.10.15",
      status: "불채택",
      statusColor: "bg-red-100 text-red-800",
      progress: 100,
      feedback: "유사한 서비스가 이미 운영 중이어서 불채택되었습니다.",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "접수":
        return <FileText className="h-4 w-4" />
      case "검토중":
        return <Clock className="h-4 w-4" />
      case "정책반영":
        return <CheckCircle className="h-4 w-4" />
      case "불채택":
        return <XCircle className="h-4 w-4" />
      default:
        return <AlertCircle className="h-4 w-4" />
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 페이지 헤더 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">제안 현황 조회</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          제출하신 제안의 처리 현황을 확인하고 피드백을 받아보세요.
        </p>
      </div>

      {/* 탭 메뉴 */}
      <Tabs defaultValue="search" className="mb-12">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="search">제안 조회</TabsTrigger>
          <TabsTrigger value="my">내 제안 현황</TabsTrigger>
        </TabsList>

        {/* 제안 조회 */}
        <TabsContent value="search" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>제안 현황 조회</CardTitle>
              <p className="text-gray-600">제안번호 또는 개인정보를 입력하여 처리 현황을 확인하세요.</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium mb-4">제안번호로 조회</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="suggestion-id">제안번호</Label>
                      <Input
                        id="suggestion-id"
                        placeholder="SUG-2024-001234"
                        value={searchType === "number" ? searchQuery : ""}
                        onChange={(e) => {
                          setSearchQuery(e.target.value)
                          setSearchType("number")
                        }}
                      />
                    </div>
                    <Button className="w-full">
                      <Search className="h-4 w-4 mr-2" />
                      조회하기
                    </Button>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-4">개인정보로 조회</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="search-name">성명</Label>
                      <Input id="search-name" placeholder="홍길동" />
                    </div>
                    <div>
                      <Label htmlFor="search-email">이메일</Label>
                      <Input id="search-email" type="email" placeholder="example@email.com" />
                    </div>
                    <Button className="w-full">
                      <Search className="h-4 w-4 mr-2" />
                      조회하기
                    </Button>
                  </div>
                </div>
              </div>

              {/* 조회 결과 예시 */}
              <div className="mt-8 pt-8 border-t">
                <h3 className="font-medium mb-4">조회 결과</h3>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-bold text-lg">대중교통 무료화 정책 제안</h4>
                        <p className="text-gray-600">제안번호: SUG-2024-001234</p>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">검토중</Badge>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">제안일:</span>
                          <span className="ml-2 font-medium">2024.12.10</span>
                        </div>
                        <div>
                          <span className="text-gray-500">분야:</span>
                          <span className="ml-2 font-medium">교통</span>
                        </div>
                        <div>
                          <span className="text-gray-500">담당부서:</span>
                          <span className="ml-2 font-medium">국토교통부</span>
                        </div>
                        <div>
                          <span className="text-gray-500">예상 완료일:</span>
                          <span className="ml-2 font-medium">2024.12.24</span>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">처리 진행률</span>
                          <span className="text-sm font-medium">60%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: "60%" }}></div>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h5 className="font-medium mb-2">처리 현황</h5>
                        <p className="text-sm text-gray-700">
                          담당 부서에서 제안 내용을 검토 중입니다. 관련 전문가 의견 수렴 후 최종 결과를
                          알려드리겠습니다.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 내 제안 현황 */}
        <TabsContent value="my" className="mt-6">
          <div className="space-y-6">
            {mySubmissions.map((submission) => (
              <Card key={submission.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg mb-1">{submission.title}</h3>
                      <p className="text-gray-600 text-sm">제안번호: {submission.id}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(submission.status)}
                      <Badge className={submission.statusColor}>{submission.status}</Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-500">제안일:</span>
                      <span className="ml-2 font-medium">{submission.date}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">진행률:</span>
                      <span className="ml-2 font-medium">{submission.progress}%</span>
                    </div>
                    <div>
                      <span className="text-gray-500">상태:</span>
                      <span className="ml-2 font-medium">{submission.status}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          submission.status === "정책반영"
                            ? "bg-green-600"
                            : submission.status === "불채택"
                              ? "bg-red-600"
                              : "bg-blue-600"
                        }`}
                        style={{ width: `${submission.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">피드백</h4>
                    <p className="text-sm text-gray-700">{submission.feedback}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* 처리 단계 안내 */}
      <Card>
        <CardHeader>
          <CardTitle>제안 처리 단계</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { status: "접수", description: "제안서 접수 완료", color: "bg-gray-100" },
              { status: "검토", description: "담당 부서 검토", color: "bg-blue-100" },
              { status: "심사", description: "전문가 위원회 심사", color: "bg-yellow-100" },
              { status: "결정", description: "채택/불채택 결정", color: "bg-purple-100" },
              { status: "완료", description: "정책 반영 또는 완료", color: "bg-green-100" },
            ].map((step, index) => (
              <div key={index} className={`p-4 rounded-lg text-center ${step.color}`}>
                <h3 className="font-bold mb-2">{step.status}</h3>
                <p className="text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
