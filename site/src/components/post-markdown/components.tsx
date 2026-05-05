import type { PDFProps } from "../pdf";
import {
  type ImgHTMLAttributes,
  type PropsWithChildren,
  type ReactNode,
  Children,
  createContext,
  isValidElement,
  useContext,
} from "react";
import { Pdf } from "~/components/pdf";
import { useImagesSize, usePostImages } from "~/hooks/use-queries";
import { getPostFileUrl } from "~/lib/posts";
import { ImageCarousel } from "../carousel";
import { Gallery } from "../gallery";
import { ExternalLink } from "../link";
import { YouTube } from "../youtube";
import { PostContext, usePostFile } from "./context";

export function Carousel(props: { id?: string }) {
  const images = usePostImages2(props.id);
  return <ImageCarousel images={images} className="my-5" />;
}

export function YouTubeWrapper(props: { id: string }) {
  return <YouTube videoId={props.id} />;
}

type FBVideoProps = {
  id: string;
  aspectRatio?: string;
  vertical?: boolean;
};

// TODO: replace aspectRatio to orientation prop
export function FBVideo(props: FBVideoProps) {
  let aspectRatio = props.aspectRatio ?? "16/9";
  if (props.vertical === true) aspectRatio = "9/16";
  const src = `https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/SecondarySchool55/videos/${props.id}/&show_text=false&t=0`;

  return (
    <iframe
      src={src}
      style={{ aspectRatio }}
      className="mx-auto max-h-150 max-w-200 p-2"
    />
  );
}

export function PdfWrapper(props: PDFProps) {
  const src = usePostFile(props.src);
  return <Pdf {...props} forceExternalViewer={true} src={src} />;
}

export function Quote(props: PropsWithChildren<{ author: string }>) {
  return (
    <div className="mb-4 text-right whitespace-pre">
      {props.children}
      <div className="font-bold">{props.author}</div>
    </div>
  );
}

export function Link(props: PropsWithChildren<{ href: string }>) {
  const href = usePostFile(props.href);
  return <ExternalLink href={href}>{props.children}</ExternalLink>;
}

export function Image(props: { src: string }) {
  const src = usePostFile(props.src);
  const inGallery = useContext(GalleryContext);
  if (inGallery) return;

  return <img src={src} className="mx-auto my-2 h-150 w-200 object-contain" />;
}

export function GalleryWrapper(props: { children: ReactNode }) {
  const { type, id } = useContext(PostContext);
  const items = Children.toArray(props.children)
    .map((item) => {
      if (!isValidElement<ImgHTMLAttributes<HTMLImageElement>>(item))
        throw new Error(`${item} is not a valid element`);
      return getPostFileUrl(type, id, item.props.src!);
    })
    .filter((v): v is NonNullable<typeof v> => v !== null);

  const images = useImagesSize(items);

  return (
    <GalleryContext value={true}>
      {props.children}
      <Gallery images={images} rowContraints={{ maxPhotos: 5 }} />
    </GalleryContext>
  );
}

const GalleryContext = createContext(false);

function usePostImages2(id?: string) {
  const { type, id: postId } = useContext(PostContext);

  const finalPath = id?.startsWith("*")
    ? `${type}/${postId}-${id.slice(1)}`
    : id
      ? `${id}`
      : `${type}/${postId}`;

  return usePostImages(finalPath);
}
