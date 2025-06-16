import { Browser, Page } from "puppeteer";

export interface YoutubeShortsItem {
  title: string;
  image: string;
  link: string;
  date?: string;
  duration?: string;
}

export const crawlYoutubeShortsList = async ({
  browser,
  url,
  limit = 3,
}: {
  browser: Browser;
  url: string;
  limit?: number;
}) => {
  let page: Page | undefined;
  try {
    page = await browser.newPage();
    page.on("dialog", (dialog) => dialog.dismiss());
    await page.goto(url);

    return await page.evaluate((limit: number) => {
      const videos = document.querySelectorAll("ytd-rich-item-renderer");
      return Array.from(videos)
        .slice(0, limit)
        .map((video) => {
          const title =
            video.querySelector("[aria-label]")?.textContent?.trim() || "";
          const image = video.querySelector("img")?.src || "";
          const link = video.querySelector("a")?.href || "";
          return {
            title,
            image,
            link,
          };
        });
    }, limit);
  } finally {
    page?.close();
  }
};
