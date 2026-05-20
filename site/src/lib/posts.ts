import type { PostType } from "posts";
import { type LinkOptions } from "@tanstack/react-router";

export const postTypes = {
  news: {
    title: "Новини",
    to: "/posts/$type",
    params: { type: "news" },
  },
  announcements: {
    title: "Оголошення",
    to: "/posts/$type",
    params: { type: "announcements" },
  },
  useful: {
    title: "Корисна інформація",
    to: "/posts/$type",
    params: { type: "useful" },
  },
  camp: {
    title: 'Табір "Веселка"',
    to: "/posts/$type",
    params: { type: "camp" },
  },
} satisfies Record<
  PostType,
  { title: string } & Pick<LinkOptions, "to" | "params">
>;

export const postType: string[] = [
  "news",
  "announcements",
  "useful",
  "camp",
] satisfies PostType[];

export function getPostFileUrl(type: string, id: string, file: string) {
  if (isExternal(file)) return file;
  return buildUrl(`${type}/${id}/${file}`);
}

export function getPostThumbnailUrl(type: string, id: string) {
  return buildUrl(`${type}/${id}/thumbnail.jpg`);
}

function buildUrl(path: string) {
  return `https://raw.githubusercontent.com/kg55kmr/posts/refs/heads/main/${path}`;
}

export const imagekitTimestamp = new Date(2023, 5, 12);

function isExternal(url: string) {
  return url.startsWith("http");
}

export function formatPostDate(date: {
  day: number;
  month: number;
  year: number;
}) {
  return `${date.day.toString().padStart(2, "0")}.${date.month.toString().padStart(2, "0")}.${date.year}`;
}

export type ParsedPost = {
  title: string;
  date: {
    year: number;
    month: number;
    day: number;
  };
  thumbnail: string;
  content: string;
};
