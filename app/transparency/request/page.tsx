"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { FileText, Search, Clock, CheckCircle, AlertCircle } from "lucide-react"

export default function InformationRequestPage() {
  const [requestType, setRequestType] = useState("online")

  const recentRequests = [
    {
      id: "REQ-2024-001234",
      title: "2024년 대통령실 예산 현황",
      date: "2024.12.10",
      status: "처리완료",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: "REQ-2024-001233",
      title: "주요 정책 회의록",
      date: "2024.12.08",
      status: "처리중",
      statusColor: "bg-blue-100 text-blue-800",
    },
    {
      id: "REQ-2024-001232",
      title: "조직도 및 업무분장",
      date: "2024.12.05",
      status: "처리완료",
      statusColor: "bg-green-100 text-green-800",
    },
  ]

  const faqItems = [
    {
      question: "정보공개 청구는 누구나 할 수 있나요?",
      answer: "네, 국민 누구나 공공기관에 정보공개를 청구할 수 있습니다. 외국인도 청구 가능합니다.",
    },
    {
      question: "정보공개 청구 비용이 있나요?",
      answer: "청구 자체는 무료이며, 정보 제공 시 복사비 등 실비만 부담하시면 됩니다.",
    },
    {
      question: "처리 기간은 얼마나 걸리나요?",
      answer: "법정 처리 기간은 10일이며, 부득이한 경우 10일 연장 가능합니다.",
    },
    {
      question: "비공개 결정에 불복할 수 있나요?",
      answer: "네, 정보공개위원회에 이의신청하거나 행정심판, 행정소송을 제기할 수 있습니다.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 페이지 헤더 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">정보공개청구</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          대통령실이 보유한 정보의 공개를 청구하고 처리 현황을 확인할 수 있습니다.
        </p>
      </div>

      {/* 탭 메뉴 */}
      <Tabs defaultValue="request" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="request">정보공개 청구</TabsTrigger>
          <TabsTrigger value="status">처리 현황 조회</TabsTrigger>
          <TabsTrigger value="faq">자주 묻는 질문</TabsTrigger>
        </TabsList>

        {/* 정보공개 청구 */}
        <TabsContent value="request" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">정보공개 청구서</CardTitle>
                  <p className="text-gray-600">청구하고자 하는 정보를 구체적으로 기재해 주세요.</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* 청구자 정보 */}
                  <div>
                    <h3 className="font-medium mb-4">청구자 정보</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">성명 *</Label>
                        <Input id="name" placeholder="홍길동" />
                      </div>
                      <div>
                        <Label htmlFor="phone">연락처 *</Label>
                        <Input id="phone" placeholder="010-1234-5678" />
                      </div>
                      <div>
                        <Label htmlFor="email">이메일 *</Label>
                        <Input id="email" type="email" placeholder="example@email.com" />
                      </div>
                      <div>
                        <Label htmlFor="address">주소</Label>
                        <Input id="address" placeholder="서울시 종로구..." />
                      </div>
                    </div>
                  </div>

                  {/* 청구 정보 */}
                  <div>
                    <h3 className="font-medium mb-4">청구 정보</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="title">청구 제목 *</Label>
                        <Input id="title" placeholder="예: 2024년 대통령실 예산 현황" />
                      </div>
                      <div>
                        <Label htmlFor="content">청구 내용 *</Label>
                        <Textarea
                          id="content"
                          placeholder="청구하고자 하는 정보를 구체적으로 기재해 주세요."
                          rows={5}
                        />
                      </div>
                      <div>
                        <Label htmlFor="purpose">청구 목적</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="청구 목적을 선택하세요" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="research">학술연구</SelectItem>
                            <SelectItem value="business">업무참고</SelectItem>
                            <SelectItem value="personal">개인적 관심</SelectItem>
                            <SelectItem value="media">언론보도</SelectItem>
                            <SelectItem value="other">기타</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* 정보 제공 방법 */}
                  <div>
                    <h3 className="font-medium mb-4">정보 제공 방법</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="email-delivery" />
                        <Label htmlFor="email-delivery">이메일</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="mail-delivery" />
                        <Label htmlFor="mail-delivery">우편</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="visit-delivery" />
                        <Label htmlFor="visit-delivery">직접 방문</Label>
                      </div>
                    </div>
                  </div>

                  {/* 개인정보 처리 동의 */}
                  <div className="border-t pt-6">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="privacy-agree" />
                      <Label htmlFor="privacy-agree" className="text-sm">
                        개인정보 수집·이용에 동의합니다. (필수)
                      </Label>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      수집항목: 성명, 연락처, 이메일, 주소 / 이용목적: 정보공개 청구 처리 및 결과 통지 / 보유기간: 3년
                    </p>
                  </div>

                  <Button className="w-full" size="lg">
                    정보공개 청구하기
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              {/* 청구 안내 */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">청구 안내</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">처리 기간</p>
                      <p className="text-sm text-gray-600">법정 기간 10일 (연장 시 최대 20일)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FileText className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">제공 방법</p>
                      <p className="text-sm text-gray-600">이메일, 우편, 직접 방문 중 선택</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">처리 결과</p>
                      <p className="text-sm text-gray-600">공개, 부분공개, 비공개 중 결정</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 최근 청구 현황 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">최근 청구 현황</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentRequests.map((request) => (
                      <div key={request.id} className="border-b pb-3 last:border-b-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-medium text-sm">{request.title}</p>
                          <Badge className={request.statusColor}>{request.status}</Badge>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>{request.id}</span>
                          <span>{request.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    전체 현황 보기
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* 처리 현황 조회 */}
        <TabsContent value="status" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">처리 현황 조회</CardTitle>
              <p className="text-gray-600">청구번호 또는 개인정보를 입력하여 처리 현황을 확인하세요.</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-4">청구번호로 조회</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="request-id">청구번호</Label>
                      <Input id="request-id" placeholder="REQ-2024-001234" />
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
                      <Label htmlFor="search-phone">연락처</Label>
                      <Input id="search-phone" placeholder="010-1234-5678" />
                    </div>
                    <Button className="w-full">
                      <Search className="h-4 w-4 mr-2" />
                      조회하기
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 자주 묻는 질문 */}
        <TabsContent value="faq" className="mt-6">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-start space-x-2">
                    <span className="text-blue-600">Q.</span>
                    <span>{item.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-2">
                    <span className="text-green-600 font-bold">A.</span>
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* 관련 링크 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">관련 서비스</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <FileText className="h-6 w-6" />
              <span>사전공표정보</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <AlertCircle className="h-6 w-6" />
              <span>이의신청</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
              <CheckCircle className="h-6 w-6" />
              <span>만족도 조사</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
