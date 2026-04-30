import { useRef } from "react";
import { type RowConstraints, RowsPhotoAlbum } from "react-photo-album";
import { useLightbox } from "~/hooks/use-lightbox";
import { useImages, usePostImages } from "~/hooks/use-queries";
import { toGalleryImage } from "~/lib/images";
import { withClientOnlySuspense } from "~/lib/with";
import "react-photo-album/rows.css";

export type Image = {
  width: number;
  height: number;
  src: string;
  previewSrc: string;
};

type Props = {
  images: Image[];
  rowContraints?: RowConstraints;
};

export function Gallery(props: Props) {
  const ref = useRef<HTMLElement>(null);
  const images = props.images.map((v) => ({ ...v, href: v.src }));
  useLightbox({ ref });
  return (
    <>
      <RowsPhotoAlbum
        ref={ref}
        componentsProps={{
          container: { className: "mx-auto" },
          image: {
            className: "hover:brightness-70 transition-[filter]",
          },
        }}
        render={{
          link: (props, data) => (
            <a
              {...props}
              data-pswp-width={data.photo.width}
              data-pswp-height={data.photo.height}
              data-image
            />
          ),
          image: (props, data) => (
            <img {...props} src={data.photo.previewSrc} />
          ),
        }}
        photos={images}
        rowConstraints={props.rowContraints}
      />
    </>
  );
}

export const ImageKitGallery = withClientOnlySuspense(
  (props: { path: string }) => {
    const images = useImages(props.path).map(toGalleryImage);
    return <Gallery images={images} />;
  },
);

export const PostGallery = withClientOnlySuspense((props: { id: string }) => {
  const images = usePostImages(props.id).map(toGalleryImage);
  return <Gallery images={images} />;
});
