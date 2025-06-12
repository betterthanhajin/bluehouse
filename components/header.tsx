"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import OfficeOfThePresidentIcon from "./office-of-the-president-icon";

const mainNavItems = [
  {
    title: "대통령 소개",
    href: "#",
    submenus: [
      { title: "이재명 대통령", href: "/president/profile" },
      { title: "이제부터 진짜 대한민국", href: "/president/era" },
      { title: "국정비전", href: "/president/vision" },
      { title: "정책대표 공약", href: "/president/pledges" },
      { title: "청와대 국민 품으로", href: "/president/open-office" },
    ],
  },
  {
    title: "대통령실",
    href: "#",
    submenus: [
      { title: "대통령의 말과 글", href: "/office/speeches" },
      { title: "상징체계 소개", href: "/office/symbols" },
      { title: "정부 업무보고", href: "/office/reports" },
      { title: "정책브리핑", href: "/office/briefings" },
      { title: "정책대 관리 활용", href: "/office/policy-management" },
      { title: "정책대 관리 활용 자료집", href: "/office/policy-resources" },
    ],
  },
  {
    title: "국정과제",
    href: "#",
    submenus: [
      { title: "120대 국정과제", href: "/policy/national-tasks" },
      { title: "국정비전", href: "/president/vision" },
    ],
  },
  {
    title: "정보공개",
    href: "#",
    submenus: [
      { title: "정보공개제도", href: "/transparency/system" },
      { title: "정보공개청구", href: "/transparency/request" },
      { title: "여러 대통령 기록관", href: "/transparency/archives" },
    ],
  },
  {
    title: "국민제안",
    href: "/suggestions",
    submenus: [
      { title: "제안하기", href: "/suggestions/submit" },
      { title: "제안 현황", href: "/suggestions" },
      { title: "처리 현황 조회", href: "/suggestions/status" },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative">
      <div className="presidential-blue text-white">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <OfficeOfThePresidentIcon
                  className="mr-2"
                  width={40}
                  height={40}
                />
                <span className="text-lg font-bold">대한민국 대통령실</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex">
              <ul className="flex space-x-6">
                {mainNavItems.map((item, index) => (
                  <li key={index} className="nav-item relative">
                    <Link
                      href={item.href}
                      className="flex items-center py-5 text-sm font-medium text-white hover:text-gray-200"
                    >
                      {item.title}
                      {item.submenus.length > 0 && (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </Link>
                    {item.submenus.length > 0 && (
                      <div
                        className="mega-menu py-8"
                        style={{
                          left: `-${index * 100}px`,
                        }}
                      >
                        <div className="container mx-auto px-4">
                          <div
                            className={`grid gap-x-8 gap-y-4 ${
                              item.submenus.length > 12
                                ? "grid-cols-6"
                                : item.submenus.length > 6
                                ? "grid-cols-4"
                                : "grid-cols-3"
                            }`}
                          >
                            {item.submenus.map((submenu, subIndex) => (
                              <Link
                                key={subIndex}
                                href={submenu.href}
                                className="text-sm text-white hover:text-gray-200 py-1 block whitespace-nowrap"
                              >
                                {submenu.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* <Button variant="ghost" size="icon" className="text-white">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Language</span>
              </Button> */}

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full bg-white transform transition-transform lg:hidden overflow-y-auto",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b px-4 presidential-blue-text">
          <Link href="/" className="flex items-center">
            <OfficeOfThePresidentIcon className="mr-2" width={32} height={32} />
            <span className="text-lg font-bold">대한민국 대통령실</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="p-4 overflow-y-auto max-h-[calc(100vh-4rem)]">
          <ul className="space-y-4">
            {mainNavItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-lg font-medium presidential-blue-text"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
                {item.submenus.length > 0 && (
                  <ul className="mt-2 ml-4 space-y-2">
                    {item.submenus.map((submenu, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          href={submenu.href}
                          className="text-sm text-gray-600"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {submenu.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
