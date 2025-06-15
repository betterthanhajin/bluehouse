import { Browser, Page } from "puppeteer";

export const crawlOGImage = async ({
  browser,
  url,
}: {
  browser: Browser;
  url: string;
}) => {
  let page: Page | undefined;
  try {
    page = await browser.newPage();
    page.on("dialog", async (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      await dialog.dismiss();
    });
    await page.goto(url);

    const ogImage = await page.evaluate(() => {
      const meta = document.querySelector('meta[property="og:image"]');
      return meta?.getAttribute("content");
    });

    const ogImageSize = await page.evaluate(() => {
      const image = new Image();
      image.src = document
        .querySelector('meta[property="og:image"]')!
        .getAttribute("content")!;
      return {
        width: image.width,
        height: image.height,
      };
    });

    return {
      ogImage,
      ogImageSize,
    };
  } finally {
    page?.close();
  }
};
