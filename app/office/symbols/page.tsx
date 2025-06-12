import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PresidentialSymbolsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 페이지 헤더 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">대통령실 상징체계</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          대한민국 대통령과 대통령실을 상징하는 다양한 상징물과 그 의미를
          소개합니다.
        </p>
      </div>

      {/* 상징체계 탭 */}
      <Tabs defaultValue="flag" className="mb-12">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-2">
          <TabsTrigger value="flag">대통령기</TabsTrigger>
          <TabsTrigger value="emblem">대통령 문장</TabsTrigger>
        </TabsList>

        {/* 대통령기 */}
        <TabsContent value="flag" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center items-center">
              <div className="relative w-64 h-48">
                <Image
                  src="/image/president-flag.svg"
                  alt="대한민국 대통령기"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">대한민국 대통령기</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  대한민국 대통령기는 대통령의 공식 상징 깃발로, 파란색 바탕
                  중앙에 대통령 문장이 금색으로 새겨져 있습니다. 대통령의 공식
                  행사, 차량, 항공기, 선박, 대통령이 방문하는 장소 등에
                  게양되며, 대통령의 권위와 국가 원수로서의 지위를 상징합니다.
                </p>
                <p>
                  대통령기는 국가적 중요 행사와 외교적 의전, 대통령의 이동 시
                  국민에게 대통령의 공식 활동을 알리는 역할을 합니다.
                </p>
              </div>
              <div className="mt-6">
                <h3 className="font-bold mb-2">대통령기의 규격과 사용</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>규격: 가로 150cm, 세로 100cm(공식 비율)</li>
                  <li>색상: 파란색 바탕에 중앙 금색 대통령 문장</li>
                  <li>
                    사용: 대통령 차량, 항공기, 선박, 방문 장소, 공식 행사 등
                  </li>
                  <li>보관 및 관리: 대통령실에서 공식 관리</li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* 대통령 문장 */}
        <TabsContent value="emblem" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center items-center">
              <div className="relative w-64 h-64">
                <Image
                  src="/image/president-symbol.svg"
                  alt="대한민국 대통령 문장"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">대한민국 대통령 문장</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  대통령의 상징으로 봉황 2마리가 둘러싼 무궁화 문양이 깃발과
                  휘장의 형태로 사용됩니다.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
