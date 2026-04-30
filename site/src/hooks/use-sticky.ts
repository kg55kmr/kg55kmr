import { useHydrated } from "@tanstack/react-router";
import { atom, getDefaultStore, useAtomValue } from "jotai";

type StickyOptions = {
  includeHeight?: boolean;
  offset?: number;
  className?: string;
};

const offsetAtom = atom(0);

const store = getDefaultStore();
const elements = new Map<HTMLElement, StickyOptions>();
const observer =
  !import.meta.env.SSR &&
  new ResizeObserver(() => {
    let totalHeight = 0;

    const sortedElements = Array.from(elements.keys()).sort((a, b) =>
      a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_PRECEDING ? 1 : -1,
    );

    for (const el of sortedElements) {
      const data = elements.get(el);
      const offset = data?.offset ?? 0;
      el.style.top = `${totalHeight + offset}px`;
      if (data?.includeHeight === false) continue;
      totalHeight += el.getBoundingClientRect().height + offset;
    }

    store.set(offsetAtom, totalHeight);
  });

export function useSticky(opts?: StickyOptions) {
  "use memo";

  return (node: HTMLElement | null) => {
    if (!node || !observer) return;

    if (opts?.className) node.classList.add(opts.className);
    else node.style.position = "sticky";

    elements.set(node, opts ?? {});
    observer.observe(node);

    return () => {
      observer.unobserve(node);
      elements.delete(node);
    };
  };
}

export function useStickyOffset() {
  const hydrated = useHydrated();
  const value = useAtomValue(offsetAtom);
  return hydrated ? value : 0;
}
