import MainBanner from "@/components/main-banner";
import NewsRoomHeader from "@/components/newsroom/news-room-header";
import NewsRoomTabs from "@/components/newsroom/news-room-tabs";
import NewsRoomContent from "@/components/newsroom/news-room-content";

export default function Home() {
  return (
    <>
      <MainBanner />
      <div className="container mx-auto px-4 pb-8">
        <NewsRoomHeader />
        <NewsRoomTabs />
        <NewsRoomContent />
      </div>
    </>
  );
}
