import { Browser, Page } from "puppeteer";

export interface GoogleNewsItem {
  title: string;
  summary: string;
  href: string;
  ogImage?: string;
  ogImageSize?: {
    width: number;
    height: number;
  };
}

export const crawlGoogleNews = async ({
  browser,
  pageNumber,
}: {
  browser: Browser;
  pageNumber: number;
}) => {
  let page: Page | undefined;
  try {
    page = await browser.newPage();

    await page.goto(
      `https://www.google.com/search?${
        // 아래는 상수로 변경시 별도 실제 체크가 필요합니다.
        new URLSearchParams({
          q: "이재명 대통령",
          biw: "1289",
          bih: "979",
          tbs: "qdr:d",
          tbm: "nws",
          start: String((pageNumber - 1) * 10),
        })
      }`
    );

    const links = await page.evaluate(() =>
      Array.from(document.querySelectorAll("a"))
        // href가 https로 시작하는 것만 필터링
        .filter((a) => a.href.startsWith("https://"))
        // google.com과 google.co.를 포함하지 않는 것만 필터링
        .filter(
          (a) =>
            !a.href.includes("google.com") && !a.href.includes("google.co.")
        )
        .map((a): GoogleNewsItem => {
          const titleElement = a.querySelector('[role="heading"]');
          const summaryElement = titleElement?.parentElement?.children[2];
          return {
            title: titleElement?.textContent?.trim() || "",
            summary: summaryElement?.textContent?.trim() || "",
            href: a.href,
          };
        })
    );
    return links;
  } finally {
    await page?.close();
  }
};
