import dotenv from "dotenv";
import puppeteer from "puppeteer-extra";
import task from "tasuku";

import { crawlGoogleNews, type GoogleNewsItem } from "./google-news";
import { crawlOGImage } from "./og-image";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import AdblockerPlugin from "puppeteer-extra-plugin-adblocker";

dotenv.config();

task("데이터 갱신 작업", async (task) => {
  task.setStatus("퍼펫티어를 띄웁니다.");
  puppeteer.use(StealthPlugin());
  puppeteer.use(
    AdblockerPlugin({
      blockTrackers: true,
    })
  );
  const browser = await puppeteer.launch({
    headless: true,
    timeout: 10000,
    args: ["--disable-popup-blocking", "--disable-notifications"],
  });
  task.setStatus("퍼펫티어를 띄웠습니다.");

  const links: GoogleNewsItem[] = [];
  await task.task("구글 뉴스 데이터 수집", async (task) => {
    for (let i = 1; i <= 2; i++) {
      task.setStatus(`${i}/2 페이지 수집 시작`);
      links.push(...(await crawlGoogleNews({ browser, pageNumber: i })));
      task.setStatus(`${i}/2 페이지 수집 완료`);
    }
  });

  await task.task("구글 뉴스 OG 이미지 크롤링", async (task) => {
    const total = links.length;
    for (let index = 0; index < total; index++) {
      const link = links[index];
      task.setStatus(`${index + 1}/${total} 이미지 수집 시작 - ${link.href}`);

      try {
        const { ogImage, ogImageSize } = await crawlOGImage({
          browser,
          url: link.href,
        });
        if (ogImage) link.ogImage = ogImage;
        if (ogImageSize) link.ogImageSize = ogImageSize;
      } catch (error) {}

      task.setStatus(`${index + 1}/${total} 이미지 수집 완료 - ${link.href}`);
    }
  });

  task.setStatus("크롤링을 완료했습니다.");
  await browser.close();

  console.log(links);
});
