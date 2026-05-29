import type { AlbumPost, AlbumPosts, Post, PostsList } from "posts";
import { createServerFn } from "@tanstack/react-start";
import z from "zod";
import { setCacheHeader } from "./headers";
import { getImageKitImages, getPostImageKitImages } from "./imagekit";
import { getLocalPosts, getPostFromJSON } from "./posts";
import { getFromRedis } from "./redis";
import { getSheetContent } from "./sheets";
import { requestPlaylist } from "./youtube";

export const getPostsList = createServerFn().handler(async () => {
  if (import.meta.env.DEV) return getLocalPosts("postsList");

  const result = await getFromRedis<PostsList>({
    key: "posts-list",
  });
  setCacheHeader(5);
  return result;
});

export const getLatestPosts = createServerFn().handler(async () => {
  if (import.meta.env.DEV) return getLocalPosts("latestPosts");

  const result = await getFromRedis<PostsList>({ key: "latest-posts" });
  setCacheHeader(5);
  return result;
});

export const getAlbum = createServerFn().handler(async () => {
  if (import.meta.env.DEV) return getLocalPosts("album");

  const result = await getFromRedis<AlbumPosts>({ key: "album" });
  setCacheHeader(5);
  return result;
});

export const getAlbumPost = createServerFn()
  .inputValidator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    const path = `$["${data.id}"]`;
    if (import.meta.env.DEV) return getPostFromJSON<AlbumPost>("album", path);

    const result = await getFromRedis<AlbumPost>({ key: "album", path });
    setCacheHeader(5);
    return result;
  });

export const getPost = createServerFn()
  .inputValidator(z.object({ type: z.string(), id: z.string() }))
  .handler(async ({ data }) => {
    const path = `$.${data.type}["${data.id}"]`;
    if (import.meta.env.DEV) return getPostFromJSON<Post>("posts", path);

    const result = await getFromRedis<Post>({ key: "posts", path: path });
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
