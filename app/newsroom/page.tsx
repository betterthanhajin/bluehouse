"use client"

// 이 파일은 더 이상 직접 사용되지 않거나, 홈페이지로 리디렉션 처리할 수 있습니다.
// 우선은 비워두거나 간단한 메시지를 남길 수 있습니다.
// 혹은 삭제해도 무방합니다 (만약 /newsroom 경로가 필요 없다면).
// 여기서는 간단한 리디렉션 예시를 남기겠습니다 (실제 구현 시 Next.js의 redirect 기능을 사용해야 함).

// import { redirect } from 'next/navigation'; // Next.js 13+ App Router

export default function NewsRoomRedirectPage() {
  // useEffect(() => {
  //   redirect('/');
  // }, []);
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-2xl font-bold">뉴스룸 콘텐츠는 홈페이지에서 확인하실 수 있습니다.</h1>
      <p className="mt-4">
        <a href="/" className="text-blue-600 hover:underline">
          홈페이지로 이동
        </a>
      </p>
    </div>
  )
}
