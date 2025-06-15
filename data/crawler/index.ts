import dotenv from "dotenv";
import puppeteer from "puppeteer-extra";
import task from "tasuku";

import { crawlGoogleNews, type GoogleNewsItem } from "./google-news";
import { crawlOGImage } from "./og-image";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import AdblockerPlugin from "puppeteer-extra-plugin-adblocker";
import fs from "fs";

dotenv.config();

if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY가 설정되지 않았습니다.");
}

task("전체 데이터 수집 작업", async (task) => {
  const mainNewsLinks: GoogleNewsItem[] = [];

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

  await task.task("메인 뉴스룸 데이터 갱신", async (task) => {
    await task.task("구글 뉴스 데이터 수집", async (task) => {
      for (let i = 1; i <= 2; i++) {
        task.setStatus(`${i}/2 페이지 수집 시작`);
        mainNewsLinks.push(
          ...(await crawlGoogleNews({ browser, pageNumber: i }))
        );
        task.setStatus(`${i}/2 페이지 수집 완료`);
      }
    });

    await task.task("구글 뉴스 OG 이미지 크롤링", async (task) => {
      const total = mainNewsLinks.length;
      for (let index = 0; index < total; index++) {
        const link = mainNewsLinks[index];
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

    // OpenAI Vision을 이용해 links에서 3개 기사 선정
    const { selectNewsWithOpenAI } = await import("./select-news-with-openai");
    let selected: GoogleNewsItem[] = [];
    await task.task("AI 기반 공식 뉴스 3건 선정", async (task) => {
      task.setStatus("OpenAI Vision으로 기사 선정 중...");
      try {
        selected = await selectNewsWithOpenAI(mainNewsLinks);
      } catch (error) {
        console.error("OpenAI Vision으로 기사 선정 중 오류:", error);
        fs.writeFileSync("./data/crawler/error.txt", JSON.stringify(error));
      }
      task.setStatus("AI 선정 완료");
    });

    // mainNewsLinks를 선정된 3개 기사로 교체(원본 유지 필요시 별도 변수 사용)
    mainNewsLinks.length = 0;
    mainNewsLinks.push(...selected);
  });

  task.setStatus("크롤링을 완료했습니다.");
  await browser.close();
});
