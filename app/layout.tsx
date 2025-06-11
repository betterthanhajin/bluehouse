import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "대한민국 대통령실",
  description:
    "'국민이 주인인 정부' , '국민과 함께하는 국정'을 실현하기 위한 정부",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
