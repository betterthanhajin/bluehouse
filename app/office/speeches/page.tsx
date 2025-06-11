"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, FileText } from "lucide-react"

export default function PresidentialSpeechesPage() {
  const [selectedYear, setSelectedYear] = useState("2024")

  const years = ["2024", "2023", "2022"]

  const speeches = [
    {
      id: 1,
      title: "2025년 신년사",
      date: "2024.12.31",
      category: "연설문",
      excerpt:
        "존경하는 국민 여러분, 2025년 새해가 밝았습니다. 지난 한 해 국민 여러분의 성원에 깊이 감사드리며, 새해에는 더욱 희망찬 대한민국을 만들어 나가겠습니다...",
      image: "/placeholder.svg?height=200&width=300",
      type: "text",
      views: 12580,
    },
    {
      id: 2,
      title: "제79주년 광복절 경축사",
      date: "2024.08.15",
      category: "경축사",
      excerpt:
        "존경하는 국민 여러분, 해외 동포 여러분, 오늘은 제79주년 광복절입니다. 먼저 나라의 독립을 위해 희생하신 순국선열과 애국지사 여러분께 깊은 감사와 경의를 표합니다...",
      image: "/placeholder.svg?height=200&width=300",
      type: "text",
      views: 9870,
    },
    {
      id: 3,
      title: "UN 총회 기조연설",
      date: "2024.09.20",
      category: "연설문",
      excerpt:
        "존경하는 의장님, 그리고 각국 대표 여러분, 오늘 이 자리에서 대한민국을 대표하여 연설하게 된 것을 영광으로 생각합니다. 세계는 지금 기후변화, 팬데믹, 경제 불평등 등 다양한 도전에 직면해 있습니다...",
      image: "/placeholder.svg?height=200&width=300",
      type: "video",
      views: 15420,
    },
    {
      id: 4,
      title: "한-미 정상회담 공동 기자회견",
      date: "2024.06.15",
      category: "기자회견",
      excerpt:
        "안녕하십니까, 오늘 바이든 대통령과의 정상회담을 통해 한미동맹의 굳건함을 다시 한번 확인했습니다. 양국은 안보, 경제, 기술 등 다양한 분야에서 협력을 강화하기로 합의했습니다...",
      image: "/placeholder.svg?height=200&width=300",
      type: "video",
      views: 18750,
    },
    {
      id: 5,
      title: "디지털 혁신 전략 발표",
      date: "2024.05.10",
      category: "정책연설",
      excerpt:
        "디지털 대전환 시대를 맞아 대한민국이 글로벌 디지털 강국으로 도약하기 위한 전략을 발표합니다. 인공지능, 빅데이터, 클라우드 등 핵심 기술 분야에서 세계를 선도하는 나라를 만들겠습니다...",
      image: "/placeholder.svg?height=200&width=300",
      type: "text",
      views: 7650,
    },
  ]

  const featuredSpeech = speeches[0]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 페이지 헤더 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">대통령의 말과 글</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          대통령의 주요 연설문, 기자회견, 담화문 등을 통해 국정 철학과 비전을 확인하세요.
        </p>
      </div>

      {/* 주요 연설 하이라이트 */}
      <div className="mb-12">
        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image
                src={featuredSpeech.image || "/placeholder.svg"}
                alt={featuredSpeech.title}
                fill
                className="object-cover"
                priority
              />
              {featuredSpeech.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[12px] border-l-blue-800 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              )}
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  {featuredSpeech.category}
                </span>
                <span className="text-sm text-gray-500">{featuredSpeech.date}</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">{featuredSpeech.title}</h2>
              <p className="text-gray-600 mb-6">{featuredSpeech.excerpt}</p>
              <div className="flex items-center justify-between">
                <Button>전문 보기</Button>
                <div className="flex items-center text-sm text-gray-500">
                  <FileText className="h-4 w-4 mr-1" />
                  <span>조회 {featuredSpeech.views.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* 연설문 필터 및 목록 */}
      <div className="mb-8">
        <Tabs defaultValue="all" className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <TabsList>
              <TabsTrigger value="all">전체</TabsTrigger>
              <TabsTrigger value="speech">연설문</TabsTrigger>
              <TabsTrigger value="briefing">기자회견</TabsTrigger>
              <TabsTrigger value="statement">담화문</TabsTrigger>
              <TabsTrigger value="interview">인터뷰</TabsTrigger>
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
              {speeches.slice(1).map((speech) => (
                <Card key={speech.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-48 h-48 md:h-auto flex-shrink-0">
                      <Image
                        src={speech.image || "/placeholder.svg"}
                        alt={speech.title}
                        fill
                        className="object-cover"
                      />
                      {speech.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                            <div className="w-0 h-0 border-l-[8px] border-l-blue-800 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {speech.category}
                        </span>
                        <span className="text-sm text-gray-500">{speech.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{speech.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{speech.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <Link href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                          자세히 보기 <ChevronRight className="h-4 w-4 ml-1" />
                        </Link>
                        <div className="flex items-center text-sm text-gray-500">
                          <FileText className="h-4 w-4 mr-1" />
                          <span>조회 {speech.views.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* 다른 탭 콘텐츠들도 유사한 구조로 구현 가능 */}
          <TabsContent value="speech" className="mt-0">
            <div className="p-8 text-center text-gray-500">
              <p>연설문 카테고리의 콘텐츠가 여기에 표시됩니다.</p>
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

      {/* 연설문 통계 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">연설 통계</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">152</div>
              <p className="text-sm text-gray-600">총 연설 횟수</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">48</div>
              <p className="text-sm text-gray-600">국제 연설</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">35</div>
              <p className="text-sm text-gray-600">정책 발표</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">69</div>
              <p className="text-sm text-gray-600">국민 담화</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
