import { Browser, Page } from "puppeteer";

export const crawlYoutubeShortsDetail = async ({
  browser,
  url,
}: {
  browser: Browser;
  url: string;
}) => {
  let page: Page | undefined;
  try {
    page = await browser.newPage();
    page.on("dialog", (dialog) => dialog.dismiss());
    await page.goto(url);

    return await page.evaluate(() => {
      let content = document
        .querySelector("meta[itemprop='datePublished']")
        ?.getAttribute("content");

      let date = content
        ? content
            .match(/^(\d{4})-(\d{2})-(\d{2})/)
            ?.slice(1, 4)
            .join(".")
        : undefined;

      const duration = document.querySelector("video")?.duration;
      const durationString = duration?.toFixed(0) || "";
      const durationMinutes = Math.floor(Number(durationString) / 60);
      const durationSeconds = Math.floor(Number(durationString) % 60);

      return {
        date,
        duration: `${durationMinutes
          .toString()
          .padStart(2, "0")}:${durationSeconds.toString().padStart(2, "0")}`,
      };
    });
  } finally {
    page?.close();
  }
};
