import type { EmblaCarouselType } from "embla-carousel";
import { useEffect } from "react";
import { useMutative } from "use-mutative";

export function useSlidesInView(opts: {
  emblaApi?: EmblaCarouselType;
  totalSlides: number;
}) {
  const [slidesInView, setSlidesInView] = useMutative(
    new Set<number>(range(opts.totalSlides)),
  );

  useEffect(() => {
    const update = () =>
      setSlidesInView((d) => {
        if (!opts.emblaApi) return;
        for (const slide of opts.emblaApi.slidesInView()) d.add(slide);
      });

    update();

    opts.emblaApi?.on("slidesinview", update).on("reinit", update);

    return () => {
      opts.emblaApi?.off("slidesinview", update).off("reinit", update);
    };
  }, [opts.emblaApi, setSlidesInView]);

  return slidesInView;
}

function range(total: number) {
  const length = 5;
  const start = Array.from({ length }, (_, i) => total - i - 1);
  const end = Array.from({ length }, (_, i) => i);
  return [...start, ...end];
}
