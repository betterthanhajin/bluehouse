import { promises as fs } from "fs";
import path from "path";
import NewsRoomContentClient from "./news-room-content.client";

export type NewsRoomData = {
  photoNewsData: {
    id: number;
    title: string;
    date: string;
    image: string;
    description: string;
    link: string;
  }[];
  shortsData: {
    id: number;
    title: string;
    date: string;
    image: string;
    duration: string;
    link: string;
  }[];
  mainNewsData: {
    id: number;
    title: string;
    summary: string;
    date: string;
    category: string;
    image: string;
    link: string;
  }[];
  factCheckData: {
    id: number;
    title: string;
    summary: string;
    date: string;
    isNew: boolean;
    link: string;
  }[];
  briefingData: {
    id: number;
    title: string;
    date: string;
    link: string;
  }[];
  pressReleaseData: {
    id: number;
    title: string;
    date: string;
    link: string;
  }[];
};

export default async function NewsRoomContent() {
  const jsonPath = path.join(process.cwd(), "data/news-room.json");
  const file = await fs.readFile(jsonPath, "utf-8");
  const newsRoomData: NewsRoomData = JSON.parse(file);
  return <NewsRoomContentClient newsRoomData={newsRoomData} />;
}
