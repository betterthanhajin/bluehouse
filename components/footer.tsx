import OfficeOfThePresidentIcon from "./office-of-the-president-icon"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex items-center mb-4 md:mb-0">
          <OfficeOfThePresidentIcon className="mr-2" width={40} height={40} />
            <span className="text-lg font-bold presidential-blue-text">대한민국 대통령실 (비공식)</span>
          </div>
          <div className="flex space-x-6">
            {/* 기존 링크들은 유지하거나, 비공식 사이트이므로 제거 또는 수정할 수 있습니다. */}
            {/* <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
              개인정보처리방침
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
              저작권 정책
            </Link> */}
          </div>
        </div>
        <div className="border-t pt-6 text-center">
          <p className="text-sm text-gray-700 font-semibold">
            이 페이지는 대한민국 공식 대통령실 정부 사이트가 아닌 비공식 대통령실 소개 사이트입니다.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            본 사이트에서 제공되는 정보는 실제 대한민국 대통령실의 공식 입장과 다를 수 있습니다.
          </p>
        </div>
      </div>
    </footer>
  )
}
