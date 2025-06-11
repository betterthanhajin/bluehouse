import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "대한민국 대통령실",
  description:
    "'국민이 주인인 정부' , '국민과 함께하는 국정'을 실현하기 위한 정부",
};

const pretendard = localFont({
  src: "./fonts/PretendardGOVVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={cn("antialiased", pretendard.className)}>
        {children}
      </body>
    </html>
  );
}
