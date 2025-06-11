"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Lightbulb, FileText, Users, AlertCircle, CheckCircle } from "lucide-react"

export default function SubmitSuggestionPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    summary: "",
    content: "",
    background: "",
    solution: "",
    effect: "",
    name: "",
    email: "",
    phone: "",
    region: "",
    isPublic: true,
  })

  const categories = ["경제", "사회", "교육", "환경", "교통", "문화", "보건", "복지", "안전", "기타"]

  const regions = [
    "서울특별시",
    "부산광역시",
    "대구광역시",
    "인천광역시",
    "광주광역시",
    "대전광역시",
    "울산광역시",
    "세종특별자치시",
    "경기도",
    "강원도",
    "충청북도",
    "충청남도",
    "전라북도",
    "전라남도",
    "경상북도",
    "경상남도",
    "제주특별자치도",
  ]

  const steps = [
    { number: 1, title: "제안 분야", description: "제안하실 분야를 선택해주세요" },
    { number: 2, title: "제안 내용", description: "구체적인 제안 내용을 작성해주세요" },
    { number: 3, title: "제안자 정보", description: "제안자 정보를 입력해주세요" },
    { number: 4, title: "제출 완료", description: "제안서 제출이 완료되었습니다" },
  ]

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // 제출 로직
    setCurrentStep(4)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 페이지 헤더 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">정책 제안하기</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          여러분의 소중한 아이디어로 더 나은 정책을 만들어갑니다. 구체적이고 실현 가능한 제안을 부탁드립니다.
        </p>
      </div>

      {/* 진행 단계 */}
      <div className="mb-12">
        <div className="flex items-center justify-center space-x-4 mb-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  currentStep >= step.number ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                {currentStep > step.number ? <CheckCircle className="h-6 w-6" /> : step.number}
              </div>
              {index < steps.length - 1 && (
                <div className={`w-16 h-1 mx-2 ${currentStep > step.number ? "bg-blue-600" : "bg-gray-200"}`} />
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold">{steps[currentStep - 1]?.title}</h2>
          <p className="text-gray-600">{steps[currentStep - 1]?.description}</p>
        </div>
      </div>

      {/* 제안 양식 */}
      <div className="max-w-4xl mx-auto">
        {currentStep === 1 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="h-5 w-5" />
                <span>제안 분야 선택</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="category">제안 분야 *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="제안하실 분야를 선택해주세요" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="title">제안 제목 *</Label>
                <Input
                  id="title"
                  placeholder="제안의 핵심을 간단명료하게 작성해주세요 (최대 100자)"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  maxLength={100}
                />
                <p className="text-sm text-gray-500 mt-1">{formData.title.length}/100자</p>
              </div>

              <div>
                <Label htmlFor="summary">제안 요약 *</Label>
                <Textarea
                  id="summary"
                  placeholder="제안 내용을 간단히 요약해주세요 (최대 200자)"
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  maxLength={200}
                  rows={3}
                />
                <p className="text-sm text-gray-500 mt-1">{formData.summary.length}/200자</p>
              </div>

              <div className="flex justify-end">
                <Button onClick={handleNext} disabled={!formData.category || !formData.title || !formData.summary}>
                  다음 단계
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 2 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5" />
                <span>제안 내용 작성</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="background">현황 및 문제점 *</Label>
                <Textarea
                  id="background"
                  placeholder="현재 상황과 해결이 필요한 문제점을 구체적으로 설명해주세요"
                  value={formData.background}
                  onChange={(e) => setFormData({ ...formData, background: e.target.value })}
                  rows={4}
                />
              </div>

              <div>
                <Label htmlFor="solution">제안 내용 *</Label>
                <Textarea
                  id="solution"
                  placeholder="문제 해결을 위한 구체적인 방안을 제시해주세요"
                  value={formData.solution}
                  onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                  rows={5}
                />
              </div>

              <div>
                <Label htmlFor="effect">기대 효과</Label>
                <Textarea
                  id="effect"
                  placeholder="제안이 실현될 경우 예상되는 효과를 설명해주세요"
                  value={formData.effect}
                  onChange={(e) => setFormData({ ...formData, effect: e.target.value })}
                  rows={3}
                />
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={handlePrev}>
                  이전 단계
                </Button>
                <Button onClick={handleNext} disabled={!formData.background || !formData.solution}>
                  다음 단계
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 3 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>제안자 정보</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">성명 *</Label>
                  <Input
                    id="name"
                    placeholder="실명을 입력해주세요"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="email">이메일 *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">연락처</Label>
                  <Input
                    id="phone"
                    placeholder="010-1234-5678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="region">거주 지역</Label>
                  <Select
                    value={formData.region}
                    onValueChange={(value) => setFormData({ ...formData, region: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="거주 지역을 선택해주세요" />
                    </SelectTrigger>
                    <SelectContent>
                      {regions.map((region) => (
                        <SelectItem key={region} value={region}>
                          {region}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label>공개 설정</Label>
                <RadioGroup
                  value={formData.isPublic ? "public" : "private"}
                  onValueChange={(value) => setFormData({ ...formData, isPublic: value === "public" })}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="public" id="public" />
                    <Label htmlFor="public">공개 (제안자명 공개)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="private" id="private" />
                    <Label htmlFor="private">비공개 (익명 처리)</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="border-t pt-6">
                <div className="flex items-start space-x-2">
                  <Checkbox id="privacy-agree" />
                  <Label htmlFor="privacy-agree" className="text-sm">
                    개인정보 수집·이용에 동의합니다. (필수)
                  </Label>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  수집항목: 성명, 이메일, 연락처, 거주지역 / 이용목적: 제안 처리 및 결과 통지 / 보유기간: 3년
                </p>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={handlePrev}>
                  이전 단계
                </Button>
                <Button onClick={handleSubmit} disabled={!formData.name || !formData.email}>
                  제안 제출
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {currentStep === 4 && (
          <Card>
            <CardContent className="p-12 text-center">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">제안이 성공적으로 제출되었습니다!</h2>
              <p className="text-gray-600 mb-6">
                소중한 제안을 해주셔서 감사합니다. 제안번호는 <strong>SUG-2024-001234</strong>입니다.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h3 className="font-bold mb-2">다음 단계</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 7일 이내에 담당 부서에서 제안을 검토합니다</li>
                  <li>• 검토 결과는 이메일로 통지됩니다</li>
                  <li>• 제안번호로 처리 현황을 확인할 수 있습니다</li>
                </ul>
              </div>
              <div className="flex justify-center space-x-4">
                <Button onClick={() => (window.location.href = "/suggestions")}>제안 목록 보기</Button>
                <Button variant="outline" onClick={() => (window.location.href = "/suggestions/status")}>
                  처리 현황 조회
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* 제안 가이드 */}
      {currentStep < 4 && (
        <div className="max-w-4xl mx-auto mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-blue-600" />
                <span>제안 작성 가이드</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-3 text-green-600">좋은 제안의 조건</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                    <li>구체적이고 실현 가능한 내용</li>
                    <li>명확한 문제 인식과 해결 방안</li>
                    <li>공익성과 효과성을 고려한 제안</li>
                    <li>관련 법령과 정책을 고려한 내용</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-3 text-red-600">피해야 할 내용</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                    <li>개인적 이익만을 추구하는 제안</li>
                    <li>비방이나 욕설이 포함된 내용</li>
                    <li>현행 법령에 위배되는 제안</li>
                    <li>추상적이고 막연한 내용</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
