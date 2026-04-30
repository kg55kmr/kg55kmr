import PhotoSwipe from "photoswipe";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import { type RefObject, useEffect } from "react";
import "photoswipe/photoswipe.css";

export function useLightbox(opts: {
  ref: RefObject<HTMLElement | null>;
  onChange?: (index: number) => void;
}) {
  useEffect(() => {
    if (!opts.ref.current) return;

    const lightbox = new PhotoSwipeLightbox({
      gallery: opts.ref.current,
      children: "a[data-image]",
      showHideAnimationType: "zoom",
      showAnimationDuration: 500,
      hideAnimationDuration: 500,
      loop: false,
      pswpModule: PhotoSwipe,
    });
    lightbox.on("uiRegister", () => {
      lightbox.pswp!.ui!.registerElement({
        name: "download-button",
        order: 8,
        isButton: true,
        tagName: "a",
        html: {
          isCustomSVG: true,
          inner:
            '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" id="pswp__icn-download"/>',
          outlineID: "pswp__icn-download",
        },
        onInit: (el, ps) => {
          el.setAttribute("download", "");
          el.style.display = "flex";
          el.style.alignItems = "center";
          el.style.justifyContent = "center";
          ps.on("change", () => {
            (el as HTMLAnchorElement).href =
              ps.currSlide!.content.element!.dataset["download"]!;
          });
        },
      });
    });
    lightbox.on("change", () => opts.onChange?.(lightbox.pswp?.currIndex ?? 0));
    lightbox.init();

    return () => lightbox.destroy();
  }, [opts]);
}
