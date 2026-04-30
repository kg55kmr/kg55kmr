import { ImageKit } from "@imagekit/nodejs";
import { serverEnv } from "~/config/env";
import { imagekitTimestamp } from "~/lib/posts";

export type ImageKitImage = {
  name: string;
  url: string;
  previewUrl: string;
  downloadUrl: string;
  width: number;
  height: number;
  aspectRatio: number;
};

export async function getImageKitImages(path: string) {
  const imagekit = new ImageKit({ privateKey: serverEnv.IMAGEKIT_PRIVATE_KEY });
  const response = await imagekit.assets.list({ path });
  const images = response
    .filter((item): item is ImageKit.Files.File => item.type === "file")
    .map(
      (item) =>
        ({
          name: item.name!, // TODO: add null check
          url: item.url!,
          previewUrl: `${item.url}&tr=w-640`,
          downloadUrl: `${item.url}&tr=orig-true&ik-attachment=true`,
          width: item.width!,
          height: item.height!,
          aspectRatio: item.width! / item.height!,
        }) satisfies ImageKitImage,
    );

  images.sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { numeric: true }),
  );

  return images satisfies ImageKitImage[];
}

export function getPostImageKitImages(postId: string) {
  const [type, date] = postId.split("/").slice(-2);
  const [year, month, day] = date.split("-");

  const parsedDate = new Date(
    Number.parseInt(year),
    Number.parseInt(month) - 1,
    Number.parseInt(day),
  );
  if (parsedDate >= imagekitTimestamp)
    return getImageKitImages(`posts/${postId}`);

  const id = type === "_" ? date : `${type}-${date}`;
  return getImageKitImages(`posts/cloudinary/${id}`);
}
