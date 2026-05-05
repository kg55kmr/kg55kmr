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

export async function getPosts() {
  const response = await fetch(buildUrl("posts.json"), {
    cache: "no-store",
  });

  return (await response.json()) as Posts;
}

export async function getLatestPosts() {
  const response = await fetch(buildUrl("latest-posts.json"), {
    cache: "no-store",
  });
  return (await response.json()) as GroupedPosts;
}

export async function getAlbum() {
  const response = await fetch(buildUrl("album.json"), {
    cache: "no-store",
  });
  return (await response.json()) as Album;
}

function buildUrl(path: string) {
  if (import.meta.env.DEV) return `${__POSTS_FS__}/${path}`;
  return `https://raw.githubusercontent.com/kg55kmr/posts/refs/heads/main/${path}`;
}

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

export const imagekitTimestamp = new Date(2023, 5, 12);

function isExternal(url: string) {
  return url.startsWith("http");
}

export function formatPostDate(
  date:
    | Date
    | {
        day: string;
        month: string;
        year: string;
      },
) {
  if (date instanceof Date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${day}.${month}.${year}`;
  }

  return `${date.day}.${date.month}.${date.year}`;
}

export type ParsedPost = {
  title: string;
  date: {
    year: string;
    month: string;
    day: string;
  };
  thumbnail: string;
  content: string;
};

export async function getPost(options: {
  type: string;
  id: string;
}): Promise<ParsedPost> {
  const [year, month, day] = options.id.split("-");
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
