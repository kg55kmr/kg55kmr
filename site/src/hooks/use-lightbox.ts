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
          const e = el as HTMLAnchorElement;
          e.rel = "noreferrer";
          e.target = "_blank";

          e.style.display = "flex";
          e.style.alignItems = "center";
          e.style.justifyContent = "center";

          e.setAttribute("download", "");

          ps.on("change", () => {
            const downloadUrl =
              ps.currSlide?.data.element?.dataset["downloadUrl"];
            if (!downloadUrl) return;
            e.href = downloadUrl;
          });
        },
      });
    });
    lightbox.on("change", () => opts.onChange?.(lightbox.pswp?.currIndex ?? 0));
    lightbox.init();

    return () => lightbox.destroy();
  }, [opts]);
}
