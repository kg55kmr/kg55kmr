import type { Image } from "~/components/gallery";
import type { ImageKitImage } from "~/server/imagekit";
import imageSize from "image-size";

export function toGalleryImage(image: ImageKitImage): Image {
  return {
    width: image.width,
    height: image.height,
    previewUrl: image.previewUrl,
    src: image.url,
    downloadUrl: image.downloadUrl,
  };
}

export function getImagesSize(images: string[]) {
  return Promise.all(
    images.map(async (src) => {
      const url = import.meta.env.DEV ? `http://localhost:3000${src}` : src;
      const data = await fetch(url).then((r) => r.bytes());
      const size = imageSize(data);
      return {
        src: src,
        previewUrl: src,
        downloadUrl: src,
        width: size.width,
        height: size.height,
      } satisfies Image;
    }),
  );
}
