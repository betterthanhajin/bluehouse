import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PresidentEraPage() {
  const goals = [
    {
      number: 1,
      title: "새로운 도약의 시작",
      description: "‘이제부터 진짜 대한민국’ 비전 선포 및 국민통합 정부 출범",
      highlights: [
        "헌정질서 회복 및 내란위기 극복",
        "국민통합형 정부 출범",
        "대규모 AI·미래산업 투자 계획 발표",
      ],
    },
    {
      number: 2,
      title: "혁신과 성장",
      description:
        "AI 3대 강국 진입 기반 마련, 그린뉴딜 본격화, 사회안전망 확대",
      highlights: [
        "100조 국민펀드 조성 및 AI 산업 투자",
        "탄소중립·그린뉴딜 정책 본격 추진",
        "전국민 산재보험 및 건강보험 보장성 강화",
      ],
    },
    {
      number: 3,
      title: "포용과 공정의 실현",
      description: "국민 모두가 행복한 사회를 위한 핵심 정책 이행",
      highlights: [
        "공공임대주택 및 청년·신혼부부 주거안정 강화",
        "고위공직자 감시 및 대통령실 특별감찰관 임명",
        "한반도 평화체제 구축 및 글로벌 외교 확대",
      ],
    },
  ];

  // 실제 이행 정책
  const keyPolicies = [
    {
      icon: "🤖",
      title: "AI·미래산업 혁신",
      description: "100조 국민펀드, AI 3대 강국 진입, 전략산업 집중 육성",
      status: "추진 중",
    },
    {
      icon: "🌱",
      title: "탄소중립·그린뉴딜",
      description: "2050 탄소중립 실현, 친환경 에너지 전환 및 녹색산업 육성",
      status: "본격 추진",
    },
    {
      icon: "🏠",
      title: "주거정책",
      description: "공공임대주택 확대, 청년·신혼부부 주거안정, 주택공급 확대",
      status: "단계적 확대",
    },
    {
      icon: "🩺",
      title: "복지·사회안전망",
      description:
        "전국민 산재보험, 건강보험 보장성 강화, 아동·노인·장애인 복지 확대",
      status: "강화 중",
    },
    {
      icon: "⚖️",
      title: "공정사회·노동권",
      description: "고위공직자 감시, 대통령실 특별감찰관 임명, 노동권 강화",
      status: "이행 중",
    },
    {
      icon: "🕊️",
      title: "평화·외교·국방",
      description: "한반도 평화체제 구축, 국방개혁, 글로벌 외교 확대",
      status: "추진 중",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 페이지 헤더 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">이제부터 진짜 대한민국</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          국민과 함께 만들어가는 새로운 대한민국, 이재명 대통령이 이끄는 변화와
          혁신의 시대를 소개합니다.
        </p>
      </div>

      {/* 메인 비전 섹션 */}
      <div className="relative mb-16">
        <div className="relative h-80 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/70"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                국민이 주인인 나라
                <br />
                더불어 잘사는 대한민국
              </h2>
              <p className="text-lg md:text-xl opacity-90">
                혁신과 포용, 평화와 번영을 통해 모든 국민이 행복한 미래를
                만들어갑니다
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 정부 목표 타임라인 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          이재명 정부 목표
        </h2>
        <div className="space-y-8">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center gap-6"
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold">{goal.number}</span>
                </div>
              </div>
              <Card className="flex-1">
                <CardHeader>
                  <CardTitle className="text-xl">{goal.title}</CardTitle>
                  <p className="text-gray-600">{goal.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {goal.highlights.map((highlight, highlightIndex) => (
                      <div
                        key={highlightIndex}
                        className="flex items-center space-x-2"
                      >
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* 핵심 정책 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          이제부터 진짜 대한민국 핵심 정책
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyPolicies.map((policy, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-3xl">{policy.icon}</span>
                  <CardTitle className="text-lg">{policy.title}</CardTitle>
                </div>
                <p className="text-gray-600">{policy.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">추진 상태</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {policy.status}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 국민과의 약속 */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl text-center">국민과의 약속</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="font-medium mb-2">AI·미래산업 혁신</h3>
              <p className="text-sm text-gray-600">
                100조 국민펀드, AI 3대 강국 진입, 국가 주도 미래산업 육성
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🩺</div>
              <h3 className="font-medium mb-2">복지·사회안전망</h3>
              <p className="text-sm text-gray-600">
                전국민 산재보험, 건강보험 보장성 강화, 아동·노인·장애인 복지
                확대
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🏠</div>
              <h3 className="font-medium mb-2">주거정책·공정사회</h3>
              <p className="text-sm text-gray-600">
                공공임대주택 확대, 청년·신혼부부 주거안정, 고위공직자 감시 강화
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🕊️</div>
              <h3 className="font-medium mb-2">평화·외교·국방</h3>
              <p className="text-sm text-gray-600">
                한반도 평화체제 구축, 국방개혁, 글로벌 외교 확대
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
