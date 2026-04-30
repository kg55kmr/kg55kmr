import { useLocation } from "@tanstack/react-router";
import {
  type ReactElement,
  type ReactNode,
  type RefCallback,
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
} from "react";
import { useMutative } from "use-mutative";
import { useIntersectionObserver } from "~/hooks/use-intersection-observer";
import { useSticky, useStickyOffset } from "~/hooks/use-sticky";
import { cn } from "~/lib/utils";
import { Accordion } from "./accordion";
import { Link } from "./link";
import { Responsive } from "./responsive";

type StructuredContentProps = {
  className?: string;
  TOCTitle?: string;
  children: ReactElement<SectionProps, typeof Section>[];
};

type SectionItem = {
  title: string;
  id: string;
  children: ReactNode;
};

function StructuredContent(props: StructuredContentProps) {
  const [inView, setData] = useMutative(new Map<string, boolean>());
  const registerItem = useIntersectionObserver();

  const [children, itemsData] = Children.toArray(props.children).reduce<
    [ReactElement[], SectionItem[]]
  >(
    (a, b) => {
      if (!isValidElement<SectionProps>(b)) return a;

      a[0].push(
        cloneElement(b, {
          ref: (el) => {
            if (!el) return;
            const unregister = registerItem(el, (inView) =>
              setData((s) => {
                s.set(b.props.id, inView);
              }),
            );
            return () => {
              unregister();
            };
          },
        }),
      );
      a[1].push({
        title: b.props.title,
        id: b.props.id,
        children: b.props.children,
      });

      return a;
    },
    [[], []],
  );

  return (
    <Responsive
      when="lg"
      render={
        <Desktop {...props} itemsData={itemsData} inView={inView}>
          {children}
        </Desktop>
      }
      fallback={<Mobile sections={itemsData} />}
    />
  );
}

type DesktopProps = Omit<StructuredContentProps, "children"> & {
  itemsData: SectionItem[];
  inView: Map<string, boolean>;
  children: ReactNode;
};

function Desktop(props: DesktopProps) {
  const { hash } = useLocation();
  const offset = useStickyOffset();
  const rootRef = useRef<HTMLDivElement>(null);
  const TOCTitle = props.TOCTitle ?? "Зміст";

  useEffect(() => {
    if (hash === "") return;
    if (!rootRef.current) return;

    const el = rootRef.current.querySelector<HTMLElement>(
      `[data-section=${withPrefix(hash)}]`,
    );
    if (!el || el.offsetTop === 0) return;

    scrollTo({ top: el.offsetTop - offset, behavior: "smooth" });
  }, [hash, offset]);

  return (
    <div
      ref={rootRef}
      className={cn(
        "items grid grid-cols-[1fr_auto] items-start gap-5",
        props.className,
      )}
    >
      <div>{props.children}</div>
      <TOC items={props.itemsData} inView={props.inView} TOCTitle={TOCTitle} />
    </div>
  );
}

function Mobile(props: { sections: SectionItem[] }) {
  return (
    <Accordion {...props}>
      {props.sections.map((item) => (
        <Accordion.Item key={item.id} title={item.title} id={item.id}>
          {item.children}
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  ref?: RefCallback<HTMLElement>;
  className?: string;
};

function Section(props: SectionProps) {
  const { ref } = props;
  return (
    <div
      ref={ref}
      data-section={withPrefix(props.id)}
      className={props.className}
    >
      {props.children}
    </div>
  );
}

type TOCProps = {
  items: SectionItem[];
  TOCTitle: string;
  inView: Map<string, boolean>;
};

function TOC(props: TOCProps) {
  const ref = useSticky({ includeHeight: false });
  const offset = useStickyOffset();

  return (
    <nav
      ref={ref}
      style={{ maxHeight: `calc(100vh - ${offset}px)` }}
      className="overflow-y-auto"
    >
      <h1 className="sticky top-0 mb-1 bg-white text-center font-bold">
        {props.TOCTitle}
      </h1>
      <ol className="list-decimal border-l border-gray-400 pl-8">
        {props.items.map((s) => (
          <li key={s.id}>
            <Link
              hash={s.id}
              to="."
              replace
              search
              className={cn(
                "block px-2",
                "hover:bg-slate-200",
                props.inView.get(s.id) && "text-blue-700",
              )}
            >
              {s.title}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function withPrefix(id: string) {
  return `section-${id}`;
}

StructuredContent.Section = Section;

export { StructuredContent };
