import { useEffect, useRef } from "react";
import { useStickyOffset } from "./use-sticky";

type Item = (inView: boolean) => void;

export function useIntersectionObserver() {
  const offset = useStickyOffset();
  const elements = useRef(new Map<Element, Item>());
  const observer = useRef<IntersectionObserver>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          elements.current.get(e.target)?.(e.isIntersecting),
        ),
      { rootMargin: `${-offset}px 0px 0px 0px` },
    );

    const els = elements.current.keys();
    els.forEach((el) => observer.current?.observe(el));

    return () => {
      els.forEach((el) => observer.current?.unobserve(el));
      observer.current?.disconnect();
    };
  }, [offset]);

  function register(el: Element, callback: Item) {
    elements.current.set(el, callback);
    return () => {
      elements.current.delete(el);
    };
  }

  return register;
}
