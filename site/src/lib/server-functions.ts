import { createServerFn } from "@tanstack/react-start";
import { setResponseHeaders } from "@tanstack/react-start/server";
import z from "zod";
import { latestCommit } from "~/server/github";
import { getImageKitImages, getPostImageKitImages } from "~/server/imagekit";
import { getSheetContent } from "~/server/sheets";
import { requestPlaylist } from "~/server/youtube";

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

export const getLatestCommit = createServerFn()
  .inputValidator(z.object({ repo: z.string() }))
  .handler(({ data }) => {
    setResponseHeaders({
      "Cache-Control": "no-store",
      "Vercel-CDN-Cache-Control": "public, s-maxage=3600",
      "Vercel-Cache-Tag": "posts-sha",
    });

    return latestCommit(data);
  });
