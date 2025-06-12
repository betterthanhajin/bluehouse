import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function PresidentProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 페이지 헤더 */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">이재명 대통령</h1>
        <p className="text-lg text-gray-600">제21대 대한민국 대통령</p>
      </div>

      {/* 대통령 프로필 섹션 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <div className="relative w-64 h-80 mx-auto mb-6">
                  <Image
                    src="/image/korea-president.webp"
                    alt="이재명 대통령 공식 사진"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-2">이재명</h2>
                <p className="text-gray-600">제21대 대한민국 대통령</p>
                <p className="text-sm text-gray-500 mt-2">
                  임기: 2025년 6월 4일 ~ 현재
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">대통령 소개</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  이재명 대통령은 대한민국의 제21대 대통령으로, 실용적
                  진보주의를 바탕으로 국민과 함께하는 포용적 성장과 공정한
                  사회를 만들어가고 있습니다.
                </p>
                <p>
                  성남시장과 경기도지사 재임 시절부터 혁신적인 정책으로
                  주목받았으며, 진보적 복지정책을 통해 국민의 삶의 질 향상에
                  힘써왔습니다.
                </p>
                <p>
                  대통령으로서 경제민주주의, 디지털 전환, 기후위기 대응, 한반도
                  평화 등 미래 지향적 국정과제를 추진하며 글로벌 중추국가로서의
                  대한민국의 위상을 높이고 있습니다.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 주요 경력 */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-6">주요 경력</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">2025년 6월 4일 ~ 현재</p>
                <p className="text-gray-600">제21대 대한민국 대통령</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">2024년 5월 ~ 2025년 6월</p>
                <p className="text-gray-600">
                  제22대 국회의원 (인천 계양구 을)
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">2024년 8월 ~ 2025년 4월</p>
                <p className="text-gray-600">제7대 더불어민주당 대표</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">2022년 6월 ~ 2024년 5월</p>
                <p className="text-gray-600">
                  제21대 국회의원 (인천 계양구 을)
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">2018년 7월 ~ 2021년 10월</p>
                <p className="text-gray-600">제35대 경기도지사</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="font-medium">2010년 7월 ~ 2018년 6월</p>
                <p className="text-gray-600">성남시장 (재선)</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
