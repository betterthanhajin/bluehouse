"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "home", label: "뉴스룸 홈" },
  { id: "fact", label: "사실은 이렇습니다" },
  { id: "photo", label: "사진뉴스" },
  { id: "shorts", label: "쇼츠" },
  { id: "video", label: "영상뉴스" },
  { id: "briefing", label: "브리핑" },
  { id: "press", label: "보도자료" },
  { id: "card", label: "카드뉴스" },
  { id: "speech", label: "대통령의 말과 글" },
  { id: "global", label: "글로벌 중추국가 대한민국" },
];

export default function NewsRoomTabs() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="border-b border-gray-200 mb-8">
      <div className="flex flex-wrap justify-center">
        {/* {tabs.map((tab) => (
          <button
            key={tab.id}
            className={cn(
              "news-tab px-3 sm:px-4 py-3 text-xs sm:text-sm font-medium relative whitespace-nowrap", // 반응형 폰트 크기 및 패딩 조정
              activeTab === tab.id && "active text-blue-800",
            )}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))} */}
      </div>
    </div>
  );
}
