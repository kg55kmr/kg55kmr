import type { Class } from "distance-learning";
import type { PostType } from "posts";
import type { YouTubeItem } from "~/server/youtube";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getImagesSize } from "~/lib/images";
import { formatPostDate, getPost } from "~/lib/posts";
import { getYouTubePlayList } from "~/lib/server-functions";
import { getPostImages } from "~/lib/server-functions";
import { getImages } from "~/lib/server-functions";
import { getGoogleSheet } from "~/lib/server-functions";

export function useImages(path: string) {
  return useSuspenseQuery({
    queryKey: ["imagekit", path],
    queryFn: () => getImages({ data: path }),
  }).data;
}

export function usePostImages(postId: string | string[]) {
  return useSuspenseQuery({
    queryKey: ["post imagekit", postId],
    queryFn: () => getPostImages({ data: postId }),
  }).data;
}

export function usePost(type: PostType, postId: string) {
  return useSuspenseQuery({
    queryKey: ["post", type, postId],
    queryFn: async () => {
      const post = await getPost({ type, id: postId });
      const date = formatPostDate(post.date);
      return { post, date };
    },
  }).data;
}

export function useDistanceLearning(years: string) {
  return useSuspenseQuery({
    queryKey: ["distance learning", years],
    queryFn: () =>
      fetch(
        `https://raw.githubusercontent.com/kg55kmr/distance_learning_${years}/main/data/data.json`,
        { cache: "no-store" },
      ).then((v) => v.json() as Promise<Class[]>),
  }).data;
}

type UseYouTubeListResult = { date: Date } & YouTubeItem;

export function useYouTubeList(
  id: string,
  limit?: number,
): UseYouTubeListResult[];

export function useYouTubeList(
  id: string[],
  limit?: number,
): UseYouTubeListResult[][];

export function useYouTubeList(id: string | string[], limit?: number) {
  return useSuspenseQuery({
    queryKey: ["youtube list", id],
    queryFn: async () => {
      if (typeof id === "string") return transformResponse(id, limit);
      return Promise.all(id.map((id) => transformResponse(id, limit)));
    },
  }).data;
}

async function transformResponse(id: string, limit?: number) {
  const items = await getYouTubePlayList({ data: { id, limit } });
  return items.map((item) => ({ ...item, date: new Date(item.date) }));
}

export function useGoogleSheets(id: string) {
  return useSuspenseQuery({
    queryKey: ["google sheet", id],
    queryFn: () => getGoogleSheet({ data: { id } }),
  }).data;
}

export function useImagesSize(images: string[], useSSR: boolean = true) {
  return useSuspenseQuery({
    queryKey: ["images-size", images],
    queryFn: () => {
      if (!useSSR && import.meta.env.SSR) return [];
      return getImagesSize(images);
    },
  }).data;
}
