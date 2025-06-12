import Image from "next/image";

export default function MainBanner() {
  return (
    <div className="relative w-full h-[400px]">
      <Image
        src="/image/president-call-2025-june-9.webp"
        alt="대통령이 수화기를 들고 웃으며 전화를 하는 모습"
        fill
        className="object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-end md:items-center">
        <div className="container mx-auto px-4 pb-8 md:px-8 md:pb-0">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4">
            국민과 함께하는 <br />
            대한민국 대통령실
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-md px-2 py-1">
            국민의 목소리에 귀 기울이며 더 나은 대한민국을 만들어갑니다
          </p>
        </div>
      </div>
    </div>
  );
}
