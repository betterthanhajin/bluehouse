"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

export default function PresidentialPledgesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // 실제 정책대표 공약 카테고리
  const pledgeCategories = [
    { id: "all", name: "전체" },
    { id: "economy", name: "민생·경제" },
    { id: "integration", name: "통합·민주주의" },
    { id: "growth", name: "공정성장·균형발전" },
    { id: "culture", name: "문화" },
    { id: "safety", name: "안전·평화" },
    { id: "diplomacy", name: "외교" },
  ];

  // 실제 취임사 및 임기 첫 주 이행 현황 기반 공약
  const pledges = [
    {
      id: 1,
      category: "economy",
      title: "민생 회복과 경제 살리기",
      description:
        "비상경제대책TF 즉시 가동, 경제 선순환 및 민생 안정 추진. 주식 불공정거래 적발 시스템 개선 등 임기 첫 주부터 민생·경제 안정에 집중.",
      status: "임기 초 추진중",
      timeline: "2025.06.09 비상경제점검TF 회의 개최 등",
      icon: "💹",
    },
    {
      id: 2,
      category: "integration",
      title: "국민통합 및 민주주의 회복",
      description:
        "분열의 정치 종식, 통합정부·실용정부 지향. 국민통합을 동력으로 위기 극복, 국민추천제 도입 등 인사 쇄신.",
      status: "임기 초 추진중",
      timeline: "2025.06.11 국민추천제 도입 등",
      icon: "🤝",
    },
    {
      id: 3,
      category: "growth",
      title: "공정성장·균형발전",
      description:
        "첨단산업(인공지능, 반도체 등) 투자, 재생에너지 전환, 수도권-지방 균형발전, 공정사회 기반 마련. 한·체코 신규원전 계약 등 경제협력 확대.",
      status: "임기 초 추진중",
      timeline: "2025.06.11 한·체코 원전 계약 등",
      icon: "⚙️",
    },
    {
      id: 4,
      category: "culture",
      title: "문화강국 도약",
      description:
        "문화산업 육성, 글로벌 소프트파워 5대 강국 도약 목표. K-컬처, 콘텐츠산업 지원 확대.",
      status: "임기 초 추진중",
      timeline: "2025년 6월 취임사 발표",
      icon: "🎵",
    },
    {
      id: 5,
      category: "safety",
      title: "안전하고 평화로운 나라",
      description:
        "사회적 참사 진상규명, 안전사회 건설, 한반도 평화체제 구축. 대북 확성기 방송 중지 등 긴장 완화 선제 조치.",
      status: "임기 초 추진중",
      timeline: "2025.06.11 대북 확성기 중지 지시 등",
      icon: "🕊️",
    },
    {
      id: 6,
      category: "diplomacy",
      title: "국익 중심 실용외교",
      description:
        "한미동맹 강화, 주변국과 실용외교, 한중 정상 첫 통화 등 외교 다변화 및 경제영토 확장.",
      status: "임기 초 추진중",
      timeline: "2025.06.10 한중 정상 통화 등",
      icon: "🌏",
    },
  ];

  // 상태 표시는 임기 초 '추진중'만 사용
  const getStatusIcon = () => {
    return <Clock className="h-4 w-4 text-blue-600" />;
  };

  const getStatusColor = () => {
    return "bg-blue-100 text-blue-800";
  };

  const filteredPledges =
    selectedCategory === "all"
      ? pledges
      : pledges.filter((p) => p.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 페이지 헤더 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">정책대표 공약</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          국민과의 약속을 지키기 위한 이재명 정부의 핵심 공약과 추진 현황을
          투명하게 공개합니다.
        </p>
      </div>

      {/* 카테고리 필터 */}
      <div className="flex flex-wrap gap-2 mb-8">
        {pledgeCategories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category.id)}
            className="flex items-center space-x-2"
          >
            <span>{category.name}</span>
            <Badge variant="secondary" className="ml-1">
              {0}
            </Badge>
          </Button>
        ))}
      </div>

      {/* 공약 목록 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredPledges.map((pledge) => (
          <Card key={pledge.id} className="h-full">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{pledge.icon}</span>
                  <div>
                    <CardTitle className="text-lg">{pledge.title}</CardTitle>
                    <div className="flex items-center space-x-2 mt-1">
                      {getStatusIcon()}
                      <Badge className={getStatusColor()}>
                        {pledge.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{pledge.description}</p>

              {/* 진행률 */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">진행률</span>
                  <span className="text-sm font-medium">{0}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${0}%` }}
                  ></div>
                </div>
              </div>

              {/* 세부 정보 */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">추진 일정:</span>
                  <span className="font-medium">{pledge.timeline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">소요 예산:</span>
                  <span className="font-medium">-</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 공약 이행 원칙 */}
      <Card className="mt-12">
        <CardHeader>
          <CardTitle className="text-xl text-center">공약 이행 원칙</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-medium mb-2">투명한 공개</h3>
              <p className="text-sm text-gray-600">
                임기 초부터 공약 이행 현황을 국민께 투명하게 공개합니다.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="font-medium mb-2">민생 우선</h3>
              <p className="text-sm text-gray-600">
                민생 회복과 경제 살리기를 최우선 과제로 삼아 즉각 추진합니다.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-medium mb-2">통합과 실용</h3>
              <p className="text-sm text-gray-600">
                국민통합과 실용주의, 공정성장을 바탕으로 국가 미래를 준비합니다.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
