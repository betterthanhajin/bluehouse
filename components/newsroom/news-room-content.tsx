import { promises as fs } from "fs";
import path from "path";
import NewsRoomContentClient from "./news-room-content.client";

type NewsRoomData = {
  photoNewsData: any[];
  shortsData: any[];
  mainNewsData: any[];
  factCheckData: any[];
  briefingData: any[];
  pressReleaseData: any[];
};

export default async function NewsRoomContent() {
  const jsonPath = path.join(process.cwd(), "data/news-room.json");
  const file = await fs.readFile(jsonPath, "utf-8");
  const newsRoomData: NewsRoomData = JSON.parse(file);
  return <NewsRoomContentClient newsRoomData={newsRoomData} />;
}

