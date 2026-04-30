import * as R from "rambda";
import { checkVideoStatus, getYouTubeIds } from "./yt-utils.ts";

const contentIds = await getYouTubeIds("../../posts");
const sitesIds = await getYouTubeIds("../../site");
const ids = [...contentIds, ...sitesIds];
const idsChunked = R.pipe(ids, R.splitEvery(50));

const videos = await Promise.all(
  idsChunked.map((ids) =>
    checkVideoStatus(ids, process.env["GOOGLE_API_KEY"]!),
  ),
).then((r) => r.flat());

console.log(videos.filter((v) => !v.ok));
