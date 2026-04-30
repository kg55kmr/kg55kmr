import type { EmblaCarouselType } from "embla-carousel";
import type { ImageKitImage } from "~/server/imagekit";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeftCircle,
  ChevronRightCircle,
  Circle,
  Download,
} from "lucide-react";
import { type ComponentPropsWithRef, useEffect, useRef, useState } from "react";
import { useLightbox } from "~/hooks/use-lightbox";
import { useImages, usePostImages } from "~/hooks/use-queries";
import { useSlidesInView } from "~/hooks/use-slides-in-view";
import { cn } from "~/lib/utils";
import { withClientOnlySuspense } from "~/lib/with";

type Props = {
  images: ImageKitImage[];
  className?: string;
};

export function ImageCarousel(props: Props) {
  const lightboxRef = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: "auto" });

  function getSnapFromSlide(index: number) {
    return emblaApi
      ?.internalEngine()
      .scrollSnapList.slidesBySnap.findIndex((v) => v.includes(index));
  }

  useLightbox({
    ref: lightboxRef,
    onChange: (i) => emblaApi?.goTo(getSnapFromSlide(i) ?? 0),
  });

  const slidesInView = useSlidesInView({
    emblaApi,
    totalSlides: props.images.length,
  });
  const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi);
  const scrollSnaps = emblaApi?.snapList();

  return (
    <div className={props.className}>
      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden">
          <div ref={lightboxRef} className="flex items-start">
            {props.images.map((image, i) => (
              <Image
                key={image.url}
                data={image}
                inView={slidesInView.has(i)}
              />
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute top-0 flex h-full w-full items-center justify-between text-white opacity-80">
          <button
            onClick={() => emblaApi?.goToPrev()}
            className="pointer-events-auto cursor-pointer"
          >
            <ChevronLeftCircle
              fill={emblaApi?.canGoToPrev() ? "#1fa5ff" : "grey"}
              strokeWidth={0.6}
              className="mx-3 size-15 drop-shadow-md drop-shadow-black transition-all"
            />
          </button>
          <button
            onClick={() => emblaApi?.goToNext()}
            className="pointer-events-auto cursor-pointer"
          >
            <ChevronRightCircle
              fill={emblaApi?.canGoToNext() ? "#1fa5ff" : "grey"}
              strokeWidth={0.6}
              className="mx-3 size-15 drop-shadow-md drop-shadow-black transition-all"
            />
          </button>
        </div>
      </div>
      <div className="mt-2 flex flex-wrap justify-center gap-3">
        {scrollSnaps?.map((_, i) => (
          <DotButton key={i} onClick={() => onDotButtonClick(i)}>
            <Circle
              fill={selectedIndex === i ? "#80ccff" : "transparent"}
              className={cn(
                "size-5 cursor-pointer text-slate-300 transition-all",
                selectedIndex === i && "text-black",
              )}
            />
          </DotButton>
        ))}
      </div>
    </div>
  );
}

type ImageKitCarouselProps = {
  path: string;
  className?: string;
};

export const ImageKitCarousel = withClientOnlySuspense(
  (props: ImageKitCarouselProps) => {
    const images = useImages(props.path);
    return <ImageCarousel images={images} className={props.className} />;
  },
);

type PostCarouselProps = {
  id: string;
  className?: string;
};

export const PostCarousel = withClientOnlySuspense(
  (props: PostCarouselProps) => {
    const images = usePostImages(props.id);
    return <ImageCarousel images={images} className={props.className} />;
  },
);

type ImageProps = {
  data: ImageKitImage;
  inView: boolean;
};

function Image(props: ImageProps) {
  const { data, inView } = props;
  return (
    <div className="group relative flex-none p-1">
      <a
        href={props.data.url}
        data-pswp-width={props.data.width}
        data-pswp-height={props.data.height}
        data-image
      >
        <img
          src={inView ? data.previewUrl : PLACEHOLDER_SRC}
          style={{ aspectRatio: data.aspectRatio }}
          className={cn(
            "h-90 cursor-pointer object-contain transition-all hover:brightness-70",
          )}
        />
      </a>
      <a href={data.downloadUrl}>
        <Download className="absolute top-5 right-5 hidden size-11 cursor-pointer rounded-xl border bg-[#1fa5ff] p-2 text-white opacity-75 drop-shadow-sm drop-shadow-black transition-all group-hover:block" />
      </a>
    </div>
  );
}

function DotButton(props: ComponentPropsWithRef<"button">) {
  const { children, ...rest } = props;
  return (
    <button type="button" {...rest}>
      {children}
    </button>
  );
}

function useDotButton(emblaApi?: EmblaCarouselType) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onDotButtonClick = (index: number) => {
    emblaApi?.goTo(index);
  };

  const onSelect = (emblaApi: EmblaCarouselType) => {
    const index = emblaApi.selectedSnap();
    setSelectedIndex(index);
  };

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("reinit", onSelect).on("select", onSelect);
    return () => {
      emblaApi.off("reinit", onSelect).off("select", onSelect);
    };
  }, [emblaApi]);

  return {
    selectedIndex,
    onDotButtonClick,
  };
}

const PLACEHOLDER_SRC = `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`;
