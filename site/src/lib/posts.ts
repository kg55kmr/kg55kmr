import type { GroupedPosts, Post, PostType } from "posts";
import { type LinkOptions } from "@tanstack/react-router";
import { parse } from "yaml";
import z from "zod";

export type Posts = GroupedPosts;
export type Album = Post[];

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

async function loadPost(type: string, id: string) {
  const response = await fetch(buildUrl(`${type}/${id}/index.md`), {
    cache: "no-store",
  });
  return await response.text();
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

export async function getPost(options: {
  type: string;
  id: string;
}): Promise<ParsedPost> {
  const idParts = options.id.split("-");
  const year = Number.parseInt(idParts[0]);
  const month = Number.parseInt(idParts[1]);
  const day = Number.parseInt(idParts[2]);

  const md = await loadPost(options.type, options.id);
  const data = splitMarkdown(md);
  const post = {
    title: data.meta.title,
    date: { year, month, day },
    thumbnail: getPostThumbnailUrl(options.type, options.id),
    content: data.body,
  };

  return post;
}

function splitMarkdown(content: string) {
  const data = reFrontmatter.exec(content);
  if (!data) throw new Error(`Failed to extract frontmatter: ${content}`);

  const [, frontmatter, body] = data;
  const meta = schema.parse(parse(frontmatter));
  return { meta, body };
}

const reFrontmatter = /---\s*([\s\S]*)\s*---\s*([\s\S]*)/;
const schema = z.object({ title: z.string(), pin: z.boolean().optional() });
