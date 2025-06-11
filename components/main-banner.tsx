import Image from "next/image"
import OfficeOfThePresidentIcon from "./office-of-the-president-icon"

export default function MainBanner() {
  return (
    <div className="relative w-full h-[400px] my-6">
      <OfficeOfThePresidentIcon className="object-cover rounded-lg" fill="currentColor" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
        <div className="container mx-auto px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            국민과 함께하는 <br />
            대한민국 대통령실
          </h1>
          <p className="text-xl text-white max-w-md">국민의 목소리에 귀 기울이며 더 나은 대한민국을 만들어갑니다</p>
        </div>
      </div>
    </div>
  )
}
