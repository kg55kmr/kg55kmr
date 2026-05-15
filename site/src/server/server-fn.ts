import type { Album, Posts } from "../lib/posts";
import type { Post } from "posts";
import { createServerFn } from "@tanstack/react-start";
import z from "zod";
import { setCacheHeader } from "./headers";
import { getImageKitImages, getPostImageKitImages } from "./imagekit";
import { getFromRedis } from "./redis";
import { getSheetContent } from "./sheets";
import { requestPlaylist } from "./youtube";

export const getPosts = createServerFn().handler(async () => {
  const result = await getFromRedis<Posts>("posts");
  setCacheHeader(5);
  return result;
});

export const getLatestPosts = createServerFn()
  .inputValidator(z.object({ latest: z.number() }).optional())
  .handler(async ({ data }) => {
    let req: string[] = [];
    if (data?.latest)
      req = ["news", "announcements", "useful", "camp"].flatMap((p) => [
        `$.${p}.pin[:${data?.latest}]`,
        `$.${p}.items[:${data?.latest}]`,
      ]);
    const result = await getFromRedis<Record<string, Post[]>>("posts", ...req);
    setCacheHeader(5);

    return {
      news: [...result[req[0]], ...result[req[1]]],
      announcements: [...result[req[2]], ...result[req[3]]],
      useful: [...result[req[4]], ...result[req[5]]],
      camp: [...result[req[6]], ...result[req[7]]],
    };
  });

export const getAlbum = createServerFn().handler(async () => {
  const result = await getFromRedis<Album>("album");
  setCacheHeader(5);
  return result;
});

export const getImages = createServerFn()
  .inputValidator(z.string())
  .handler(({ data }) => getImageKitImages(data));

export const getPostImages = createServerFn()
  .inputValidator(z.union([z.string(), z.string().array()]))
  .handler(async ({ data }) => {
    if (Array.isArray(data)) {
      const result = await Promise.all(
        data.map((id) => getPostImageKitImages(id)),
      );
      return result.flatMap((v) => v);
    }
    return getPostImageKitImages(data);
  });

export const getYouTubePlayList = createServerFn()
  .inputValidator(
    z.object({
      id: z.string(),
      limit: z.number().optional(),
    }),
  )
  .handler(({ data }) => requestPlaylist(data.id, data.limit));

export const getGoogleSheet = createServerFn()
  .inputValidator(z.object({ id: z.string() }))
  .handler(({ data }) => getSheetContent(data));
