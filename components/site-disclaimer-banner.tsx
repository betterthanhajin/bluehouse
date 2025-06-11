export default function SiteDisclaimerBanner() {
  return (
    <div className="presidential-blue text-white text-center p-2 text-sm">
      {/* 
        대안 색상 조합:
        - 밝은 파란색 배경, 어두운 파란색 텍스트: className="bg-blue-100 text-blue-700 text-center p-2 text-sm"
        - 중간톤 파란색 배경, 흰색 텍스트: className="bg-blue-500 text-white text-center p-2 text-sm" 
        - 약간 어두운 파스텔톤 파란색: className="bg-sky-600 text-white text-center p-2 text-sm"
        여기서는 bg-blue-500을 사용했습니다. 다른 색상을 원하시면 위 주석을 참고하여 변경해보세요.
      */}
      <p>이 페이지는 비공식 대통령실 소개 웹사이트입니다.</p>
    </div>
  )
}
