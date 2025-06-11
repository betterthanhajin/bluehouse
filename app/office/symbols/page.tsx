import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PresidentialSymbolsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 페이지 헤더 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">대통령실 상징체계</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          대한민국 대통령과 대통령실을 상징하는 다양한 상징물과 그 의미를 소개합니다.
        </p>
      </div>

      {/* 상징체계 탭 */}
      <Tabs defaultValue="emblem" className="mb-12">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="emblem">대통령 문장</TabsTrigger>
          <TabsTrigger value="seal">대통령 인장</TabsTrigger>
          <TabsTrigger value="flag">대통령기</TabsTrigger>
          <TabsTrigger value="office">대통령실 CI</TabsTrigger>
        </TabsList>

        {/* 대통령 문장 */}
        <TabsContent value="emblem" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center items-center">
              <div className="relative w-64 h-64">
                <Image src="/placeholder.svg?height=256&width=256" alt="대통령 문장" fill className="object-contain" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">대통령 문장</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  대통령 문장은 대한민국 대통령의 권위와 국가 정체성을 상징합니다. 중앙에 태극 문양을 배치하여 음양의
                  조화와 우주의 원리를 표현하고 있습니다.
                </p>
                <p>
                  문장의 테두리는 무궁화 문양으로 장식되어 있으며, 이는 대한민국의 국화를 상징합니다. 상단에는 봉황이
                  배치되어 있어 평화와 번영을 의미합니다.
                </p>
                <p>
                  대통령 문장은 대통령의 공식 행사와 문서에 사용되며, 대통령의 권위와 국가의 위엄을 나타내는 중요한
                  상징물입니다.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="font-bold mb-2">문장의 구성 요소</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>중앙의 태극 문양: 음양의 조화와 우주의 원리</li>
                  <li>무궁화 테두리: 대한민국의 국화</li>
                  <li>봉황: 평화와 번영</li>
                  <li>오얏꽃 문양: 전통과 역사</li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* 대통령 인장 */}
        <TabsContent value="seal" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center items-center">
              <div className="relative w-64 h-64">
                <Image src="/placeholder.svg?height=256&width=256" alt="대통령 인장" fill className="object-contain" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">대통령 인장</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  대통령 인장은 대통령의 공식 문서와 서명에 사용되는 중요한 상징물입니다. 인장의 중앙에는 대한민국의
                  국장이 새겨져 있으며, 테두리에는 '대한민국 대통령'이라는 한글과 영문이 새겨져 있습니다.
                </p>
                <p>
                  인장은 대통령의 공식 결재와 국가 중요 문서에 날인되며, 대통령의 권한과 책임을 상징적으로 나타냅니다.
                </p>
                <p>
                  대통령 인장은 대통령 취임식에서 새로운 대통령에게 전달되는 중요한 의식 중 하나이며, 이는 국가 권력의
                  평화적 이양을 상징합니다.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="font-bold mb-2">인장의 사용</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>국가 중요 문서 및 법률 공포</li>
                  <li>외교 문서 및 국제 조약</li>
                  <li>대통령 명의의 공식 임명장</li>
                  <li>국가 훈장 및 포상</li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* 대통령기 */}
        <TabsContent value="flag" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center items-center">
              <div className="relative w-64 h-48">
                <Image src="/placeholder.svg?height=192&width=256" alt="대통령기" fill className="object-contain" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">대통령기</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  대통령기는 대통령의 공식 행사와 이동 시 사용되는 깃발입니다. 대통령기는 청색 바탕에 대통령 문장이
                  중앙에 배치되어 있으며, 대통령의 존재와 권위를 상징합니다.
                </p>
                <p>
                  대통령이 탑승한 차량이나 항공기, 선박에는 대통령기가 게양되며, 대통령이 방문하는 장소에도 대통령기가
                  설치됩니다.
                </p>
                <p>
                  대통령기는 국가 원수로서의 대통령의 지위를 나타내며, 국민에게 대통령의 공식 활동을 알리는 역할을
                  합니다.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="font-bold mb-2">대통령기의 규격과 사용</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>규격: 가로 150cm, 세로 100cm의 비율</li>
                  <li>색상: 청색 바탕에 금색 문장</li>
                  <li>사용: 대통령 차량, 항공기, 선박, 방문 장소</li>
                  <li>보관: 대통령실에서 공식 관리</li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* 대통령실 CI */}
        <TabsContent value="office" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center items-center">
              <div className="relative w-64 h-64">
                <Image src="/placeholder.svg?height=256&width=256" alt="대통령실 CI" fill className="object-contain" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">대통령실 CI</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  대통령실 CI(Corporate Identity)는 대통령실의 공식 로고와 시각적 아이덴티티를 의미합니다. 대통령실 CI는
                  국민과 소통하는 열린 대통령실의 이미지를 담고 있습니다.
                </p>
                <p>
                  CI의 중앙에는 대한민국의 지도 형상과 함께 국민과 대통령실을 연결하는 다리 모티프가 포함되어 있으며,
                  이는 국민과 함께하는 정부의 철학을 상징합니다.
                </p>
                <p>
                  대통령실 CI는 대통령실의 모든 공식 문서, 웹사이트, 홍보물 등에 사용되며, 국민에게 신뢰와 친근함을
                  전달하는 역할을 합니다.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="font-bold mb-2">CI의 의미</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>청색: 신뢰와 안정</li>
                  <li>다리 모티프: 소통과 연결</li>
                  <li>한글 로고타입: 국가 정체성</li>
                  <li>원형 디자인: 포용과 화합</li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* 상징물 역사 */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-xl">대통령 상징물의 역사</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold mb-2">건국 초기 (1948-1960)</h3>
                <p className="text-sm text-gray-600">
                  대한민국 정부 수립 이후 초대 대통령 이승만 시기에 최초의 대통령 상징물이 제정되었습니다. 당시에는
                  서양식 문장과 한국 전통 요소를 결합한 형태였습니다.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">발전기 (1960-1987)</h3>
                <p className="text-sm text-gray-600">
                  여러 정부를 거치며 대통령 상징물은 점차 체계화되었으며, 특히 박정희 정부 시기에 현대적 형태의 기초가
                  마련되었습니다.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">현대 (1987-현재)</h3>
                <p className="text-sm text-gray-600">
                  민주화 이후 대통령 상징물은 국민 친화적이고 개방적인 이미지로 변화했으며, 현재의 상징체계는 2022년
                  이재명 정부 출범과 함께 새롭게 정비되었습니다.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 상징물 갤러리 */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">상징물 갤러리</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={`/placeholder.svg?height=200&width=200`}
                alt={`상징물 이미지 ${item}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 상징물 활용 가이드 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">상징물 활용 가이드</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-3">올바른 사용법</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>공식 행사 및 정부 문서에 사용</li>
                <li>원본 비율과 색상 유지</li>
                <li>충분한 여백 확보</li>
                <li>고해상도 이미지 사용</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">사용 제한</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>상업적 목적의 무단 사용 금지</li>
                <li>정치적 선전 목적 사용 금지</li>
                <li>왜곡 및 변형 금지</li>
                <li>대통령실의 사전 허가 필요</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
