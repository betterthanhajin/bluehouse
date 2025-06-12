import OfficeOfThePresidentIcon from "./office-of-the-president-icon";
import { Youtube, Twitter, Github, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex items-center mb-4 md:mb-0 presidential-blue-text">
            <OfficeOfThePresidentIcon className="mr-2" width={40} height={40} />
            <span className="text-lg font-bold">
              대한민국 대통령실 (비공식 팬페이지)
            </span>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://youtube.com/@이재명tv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              <Youtube size={24} />
            </a>
            <a
              href="https://x.com/Jaemyung_Lee"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-gray-600 hover:text-blue-400 transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://www.facebook.com/jaemyunglee"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/2_jaemyung"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://github.com/betterthanhajin/bluehouse"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
        <div className="border-t pt-6 text-center">
          <p className="text-sm text-gray-700 font-semibold">
            이 페이지는 대한민국 공식 대통령실 정부 사이트가 아닌 비공식
            대통령실 소개 사이트입니다.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            본 사이트에서 제공되는 정보는 실제 대한민국 대통령실의 공식 입장과
            다를 수 있습니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
