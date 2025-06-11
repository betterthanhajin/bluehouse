import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Users, Calendar } from "lucide-react"

export default function OpenOfficePage() {
  const programs = [
    {
      title: "국민과의 대화",
      description: "대통령이 직접 국민과 만나 소통하는 정기 프로그램",
      frequency: "월 2회",
      participants: "시민 50명",
      location: "대통령실 국민소통실",
      nextDate: "2024.12.20",
      icon: "💬",
    },
    {
      title: "청와대 개방",
      description: "역사적 공간인 청와대를 국민에게 개방",
      frequency: "연중 상시",
      participants: "일일 5,000명",
      location: "청와대 일원",
      nextDate: "매일 운영",
      icon: "🏛️",
    },
    {
      title: "정책 간담회",
      description: "각계각층 전문가와 정책 현안을 논의",
      frequency: "주 1회",
      participants: "전문가 20명",
      location: "대통령실 회의실",
      nextDate: "2024.12.18",
      icon: "📋",
    },
    {
      title: "청년과의 만남",
      description: "청년들의 목소리를 직접 듣는 소통의 장",
      frequency: "월 1회",
      participants: "청년 30명",
      location: "대통령실 청년홀",
      nextDate: "2024.12.25",
      icon: "👥",
    },
  ]

  const visitInfo = [
    {
      title: "관람 시간",
      content: "화~일요일 09:00~18:00 (월요일 휴관)",
      icon: <Clock className="h-5 w-5" />,
    },
    {
      title: "관람 인원",
      content: "일일 최대 5,000명 (사전 예약 필수)",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "관람 코스",
      content: "본관, 영빈관, 춘추관, 상춘재 등",
      icon: <MapPin className="h-5 w-5" />,
    },
    {
      title: "예약 방법",
      content: "온라인 사전 예약 (청와대 관람 홈페이지)",
      icon: <Calendar className="h-5 w-5" />,
    },
  ]

  const achievements = [
    { number: "2.5만명", description: "월평균 국민 소통 참여자" },
    { number: "150만명", description: "청와대 개방 이후 누적 관람객" },
    { number: "500건", description: "국민 제안 정책 반영" },
    { number: "95%", description: "국민 소통 만족도" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 페이지 헤더 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">청와대 국민 품으로</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          권위적인 권력의 상징에서 국민과 함께하는 열린 공간으로, 청와대가 국민의 품으로 돌아왔습니다.
        </p>
      </div>

      {/* 메인 이미지 섹션 */}
      <div className="relative mb-16">
        <div className="relative h-96 rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=384&width=1200" alt="청와대 개방" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <h2 className="text-3xl font-bold mb-2">국민의 청와대</h2>
            <p className="text-lg">74년 만에 국민에게 돌아온 청와대</p>
          </div>
        </div>
      </div>

      {/* 주요 성과 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {achievements.map((achievement, index) => (
          <Card key={index}>
            <CardContent className="p-6 text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">{achievement.number}</div>
              <p className="text-sm text-gray-600">{achievement.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 국민 소통 프로그램 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">국민 소통 프로그램</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-3xl">{program.icon}</span>
                  <CardTitle className="text-lg">{program.title}</CardTitle>
                </div>
                <p className="text-gray-600">{program.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">개최 주기:</span>
                    <span className="text-sm font-medium">{program.frequency}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">참여 인원:</span>
                    <span className="text-sm font-medium">{program.participants}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">장소:</span>
                    <span className="text-sm font-medium">{program.location}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">다음 일정:</span>
                    <span className="text-sm font-medium text-blue-600">{program.nextDate}</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  참여 신청
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 청와대 관람 안내 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">청와대 관람 안내</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {visitInfo.map((info, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-blue-600">{info.icon}</div>
                  <h3 className="font-medium">{info.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{info.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" className="mr-4">
            청와대 관람 예약
          </Button>
          <Button size="lg" variant="outline">
            관람 코스 안내
          </Button>
        </div>
      </div>

      {/* 개방 의미와 가치 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-center">청와대 개방의 의미</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="font-medium mb-2">역사의 공유</h3>
              <p className="text-sm text-gray-600">
                74년간 닫혀있던 권력의 상징 공간을 국민과 함께 나누며 민주주의 가치를 실현합니다
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-medium mb-2">소통의 확대</h3>
              <p className="text-sm text-gray-600">
                대통령과 국민 간의 거리를 줄이고 직접적인 소통의 기회를 확대합니다
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="font-medium mb-2">투명성 강화</h3>
              <p className="text-sm text-gray-600">권력의 투명성을 높이고 국민이 주인인 정부의 모습을 보여줍니다</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
