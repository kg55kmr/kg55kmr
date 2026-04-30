import { z } from "zod";
import { serverEnv } from "~/config/env";

export type YouTubeItem = {
  id: string;
  url: string;
  title: string;
  date: string;
  description: string;
  thumbnail: string;
};

export async function requestPlaylist(
  id: string,
  limit?: number,
  pageToken?: string,
) {
  if (limit === 0) return [];
  const page = pageToken ? `&pageToken=${pageToken}` : "";
  const base = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${id}&key=${serverEnv.GOOGLE_API_KEY}${page}`;

  const { items, nextPageToken } = await fetch(base)
    .then((r) => r.json())
    .then(schema.parse);

  let result: YouTubeItem[] = [];

  for (const i of items) {
    if (i.snippet.thumbnails === undefined) continue;
    if (i.snippet.thumbnails["high"] === undefined) continue;

    const date = i.snippet.publishedAt;
    const id = i.snippet.resourceId.videoId;

    const url = "https://www.youtube.com/watch?v=" + id;
    const title = i.snippet.title.replace(/"/g, `"`);
    const description = i.snippet.description.split("\n\n")[0];
    const thumbnail = i.snippet.thumbnails["high"].url;

    result.push({
      id,
      url,
      title,
      date,
      description,
      thumbnail,
    });
  }

  if (nextPageToken)
    result = result.concat(
      await requestPlaylist(id, limit ? limit - 1 : undefined, nextPageToken),
    );

  return result;
}

const schema = z.object({
  nextPageToken: z.string().optional(),
  items: z
    .object({
      snippet: z.object({
        publishedAt: z.string(),
        title: z.string(),
        description: z.string(),
        thumbnails: z.record(
          z.string(),
          z.object({ url: z.string(), width: z.number(), height: z.number() }),
        ),
        resourceId: z.object({ videoId: z.string() }),
      }),
    })
    .array(),
});
