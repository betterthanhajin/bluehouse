import MainBanner from "@/components/main-banner"
import NewsRoomHeader from "@/components/newsroom/news-room-header" // 뉴스룸 헤더 임포트
import NewsRoomTabs from "@/components/newsroom/news-room-tabs" // 뉴스룸 탭 임포트
import NewsRoomContent from "@/components/newsroom/news-room-content" // 뉴스룸 콘텐츠(3단 레이아웃) 임포트

export default function Home() {
  return (
    <>
      {/* 메인 배너는 페이지 최상단에 유지 */}
      <MainBanner />

      {/* 메인 배너 아래에 뉴스룸 관련 컴포넌트들을 순서대로 배치 */}
      <div className="container mx-auto px-4 py-8">
        <NewsRoomHeader />
        <NewsRoomTabs />
        <NewsRoomContent /> {/* 3단 레이아웃 뉴스 콘텐츠 */}
      </div>
    </>
  )
}
