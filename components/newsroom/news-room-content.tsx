"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Plus, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import OfficeOfThePresidentIcon from "../office-of-the-president-icon"

// Dummy data (이전과 동일)
const photoNewsData = [
  {
    id: 1,
    title: "국민께 드리는 말씀",
    date: "2024.12.14",
    image: "/placeholder.svg?height=300&width=400",
    description: "이재명 대통령이 국민께 드리는 새해 인사말을 전하고 있습니다.",
  },
  {
    id: 2,
    title: "한-미 정상회담",
    date: "2024.12.12",
    image: "/placeholder.svg?height=300&width=400",
    description: "한-미 양국 정상이 양자회담을 진행하고 있습니다.",
  },
  {
    id: 3,
    title: "G20 정상회의 참석",
    date: "2024.12.10",
    image: "/placeholder.svg?height=300&width=400",
    description: "대통령이 G20 정상회의에 참석하여 국제 현안을 논의했습니다.",
  },
]
const shortsData = [
  {
    id: 1,
    title: "대통령 일정 하이라이트",
    date: "2024.12.14",
    image: "/placeholder.svg?height=200&width=350",
    duration: "1:30",
  },
  {
    id: 2,
    title: "정책 브리핑 요약",
    date: "2024.12.13",
    image: "/placeholder.svg?height=200&width=350",
    duration: "2:15",
  },
]
const mainNewsData = [
  {
    id: 1,
    title: "대통령, 2025년 신년사 발표",
    summary: "이재명 대통령이 2025년 새해를 맞아 국민께 드리는 신년사를 발표했습니다.",
    date: "2024.12.31",
    category: "주요뉴스",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "한-일 정상회담 개최",
    summary: "양국 관계 발전과 지역 평화를 위한 협력 방안을 논의했습니다.",
    date: "2024.12.28",
    category: "외교",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "경제정책 방향 발표",
    summary: "2025년 경제 활성화를 위한 새로운 정책 방향을 제시했습니다.",
    date: "2024.12.25",
    category: "경제",
    image: "/placeholder.svg?height=200&width=300",
  },
]
const factCheckData = [
  {
    id: 1,
    title: "전 세계 돌며 지원한 유치권... 국익 지키며 발전 사례해야!",
    summary: "부산 엑스포 유치하고 나서의 소식",
    date: "2024.12.02",
    isNew: true,
  },
  {
    id: 2,
    title: "대통령, 공주산성시장 방문해 상인들과 소상공인들 격려",
    summary:
      "이재명 대통령은 오늘(12.2, 월) 오후 공주산성시장을 방문해 시장 상인 및 지역 소상공인을 격려하는 만남을 이어갔습니다.",
    date: "2024.12.02",
    isNew: false,
  },
  {
    id: 3,
    title: '대통령 "전향적인 내수·소비 진작 대책 강구" 주문',
    summary:
      '이재명 대통령은 오늘(12.2, 월) 오전 수석비서관회의에서 "전향적인 내수·소비 진작 대책을 강구하라"고 주문했습니다.',
    date: "2024.12.02",
    isNew: false,
  },
]

export default function NewsRoomContent() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [currentShortsIndex, setCurrentShortsIndex] = useState(0)

  useEffect(() => {
    if (photoNewsData.length === 0) return
    const photoInterval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex === photoNewsData.length - 1 ? 0 : prevIndex + 1))
    }, 4000)
    return () => clearInterval(photoInterval)
  }, [photoNewsData.length])

  useEffect(() => {
    if (shortsData.length === 0) return
    const shortsInterval = setInterval(() => {
      setCurrentShortsIndex((prevIndex) => (prevIndex === shortsData.length - 1 ? 0 : prevIndex + 1))
    }, 5000)
    return () => clearInterval(shortsInterval)
  }, [shortsData.length])

  const handleSlideControl = (type: "photo" | "shorts", direction: "prev" | "next" | number) => {
    if (type === "photo") {
      if (photoNewsData.length === 0) return
      if (direction === "prev") setCurrentPhotoIndex((prev) => (prev === 0 ? photoNewsData.length - 1 : prev - 1))
      else if (direction === "next") setCurrentPhotoIndex((prev) => (prev === photoNewsData.length - 1 ? 0 : prev + 1))
      else if (typeof direction === "number") setCurrentPhotoIndex(direction)
    } else {
      if (shortsData.length === 0) return
      if (direction === "prev") setCurrentShortsIndex((prev) => (prev === 0 ? shortsData.length - 1 : prev - 1))
      else if (direction === "next") setCurrentShortsIndex((prev) => (prev === shortsData.length - 1 ? 0 : prev + 1))
      else if (typeof direction === "number") setCurrentShortsIndex(direction)
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* 좌측 컬럼 (lg:col-span-3) */}
      <div className="lg:col-span-3 space-y-8">
        {/* 사진뉴스 섹션 */}
        {photoNewsData.length > 0 && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">사진뉴스</h2>
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {photoNewsData.map((_, index) => (
                    <button
                      key={`photo-dot-${index}`}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentPhotoIndex ? "bg-blue-800" : "bg-gray-300"
                      }`}
                      onClick={() => handleSlideControl("photo", index)}
                      aria-label={`사진뉴스 ${index + 1}번 슬라이드로 이동`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => handleSlideControl("photo", "prev")}
                  className="p-1 hover:bg-gray-100 rounded"
                  aria-label="이전 사진뉴스"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleSlideControl("photo", "next")}
                  className="p-1 hover:bg-gray-100 rounded"
                  aria-label="다음 사진뉴스"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
                <Link href="#" className="ml-1" aria-label="사진뉴스 더보기">
                  <Plus className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentPhotoIndex * 100}%)` }}
              >
                {photoNewsData.map((item) => (
                  <div key={item.id} className="w-full flex-shrink-0">
                    <div className="relative mb-3 aspect-[4/3] w-full overflow-hidden rounded-md">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      <div className="absolute bottom-0 left-0 bg-white/80 p-1">
                        <OfficeOfThePresidentIcon className="mr-2" width={24} height={24} />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-medium text-sm">{item.title}</h3>
                      </div>
                    </div>
                    <h3 className="font-medium mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 쇼츠 섹션 */}
        {shortsData.length > 0 && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">쇼츠</h2>
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {shortsData.map((_, index) => (
                    <button
                      key={`shorts-dot-${index}`}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentShortsIndex ? "bg-blue-800" : "bg-gray-300"
                      }`}
                      onClick={() => handleSlideControl("shorts", index)}
                      aria-label={`쇼츠 ${index + 1}번 슬라이드로 이동`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => handleSlideControl("shorts", "prev")}
                  className="p-1 hover:bg-gray-100 rounded"
                  aria-label="이전 쇼츠"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleSlideControl("shorts", "next")}
                  className="p-1 hover:bg-gray-100 rounded"
                  aria-label="다음 쇼츠"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
                <Link href="#" className="ml-1" aria-label="쇼츠 더보기">
                  <Plus className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentShortsIndex * 100}%)` }}
              >
                {shortsData.map((item) => (
                  <div key={item.id} className="w-full flex-shrink-0">
                    <div className="relative mb-3 aspect-video w-full overflow-hidden rounded-md">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      <div className="absolute bottom-0 left-0 bg-white/80 p-1">
                        <OfficeOfThePresidentIcon width={24} height={24} fill="currentColor" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <span className="bg-black/50 px-2 py-1 rounded text-xs">{item.duration}</span>
                      </div>
                      <div className="absolute center-4 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <button
                          className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center cursor-pointer"
                          aria-label={`${item.title} 재생`}
                        >
                          <div className="w-0 h-0 border-l-[8px] border-l-blue-800 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                        </button>
                      </div>
                    </div>
                    <h3 className="font-medium mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 중앙 컬럼 (lg:col-span-6) */}
      <div className="lg:col-span-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">뉴스룸 홈</h2>
          <Link href="#" className="text-sm text-gray-500 flex items-center">
            더보기 <ChevronDown className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="space-y-6">
          {mainNewsData.map((news, index) => (
            <div key={news.id} className={`${index === 0 ? "border-b-2 pb-6 mb-6" : "border-b pb-4"}`}>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{news.category}</span>
                    <span className="text-xs text-gray-500">{news.date}</span>
                  </div>
                  <h3 className={`font-medium mb-2 ${index === 0 ? "text-xl" : "text-lg"}`}>
                    <Link href="#" className="hover:text-blue-800">
                      {news.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{news.summary}</p>
                </div>
                <div
                  className={`flex-shrink-0 ${index === 0 ? "w-full sm:w-40 h-32 sm:h-28" : "w-full sm:w-32 h-24 sm:h-20"}`}
                >
                  <div className="relative w-full h-full overflow-hidden rounded-md">
                    <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center">
              브리핑 <Plus className="h-4 w-4 ml-2" />
            </h3>
            <div className="space-y-3">
              {[1, 2].map((i) => (
                <div key={`briefing-${i}`}>
                  {" "}
                  <h4 className="font-medium text-sm mb-1">
                    {" "}
                    <Link href="#" className="hover:text-blue-800">
                      {" "}
                      수석비서관회의 주요 내용 {i}{" "}
                    </Link>{" "}
                  </h4>{" "}
                  <p className="text-xs text-gray-500">2024.12.1{5 - i}</p>{" "}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center">
              보도자료 <Plus className="h-4 w-4 ml-2" />
            </h3>
            <div className="space-y-3">
              {[1, 2].map((i) => (
                <div key={`press-${i}`}>
                  {" "}
                  <h4 className="font-medium text-sm mb-1">
                    {" "}
                    <Link href="#" className="hover:text-blue-800">
                      {" "}
                      2025년 주요 정책 방향 {i}{" "}
                    </Link>{" "}
                  </h4>{" "}
                  <p className="text-xs text-gray-500">2024.12.1{3 - i}</p>{" "}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 우측 컬럼 (lg:col-span-3) */}
      <div className="lg:col-span-3">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">사실은 이렇습니다</h2>
          <Link href="#" className="text-sm text-gray-500 flex items-center">
            더보기 <ChevronDown className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="space-y-6">
          {factCheckData.map((item) => (
            <div key={item.id} className="border-b pb-4">
              <div className="flex items-start gap-2 mb-2">
                {item.isNew && <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">NEW</span>}
                <span className="text-blue-800 text-sm">➔</span>
              </div>
              <h3 className="font-medium text-sm mb-2">
                <Link href="#" className="hover:text-blue-800">
                  {item.title}
                </Link>
              </h3>
              <p className="text-xs text-gray-600 mb-2">{item.summary}</p>
              <p className="text-xs text-gray-500">{item.date}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button className="bg-blue-800 text-white px-4 py-2 rounded text-sm hover:bg-blue-900 transition-colors w-full">
            사실은 이렇습니다 전체보기
          </button>
        </div>
      </div>
    </div>
  )
}
