import { useMatches, useRouter } from "@tanstack/react-router";
import {
  type ReactElement,
  type ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useRouteTitle, useSection } from "~/hooks/use-sections";
import { useStickyOffset } from "~/hooks/use-sticky";
import { LayoutFooter } from "./layout-footer";
import { LayoutHeader } from "./layout-header";
import { LayoutMenu } from "./layout-menu";
import { LayoutRouteTitle } from "./layout-route-title";

type Props = {
  background: string;
  aspectRatio: string;
  headerExtra?: ReactElement;
  children: ReactNode;
};

export function Layout(props: Props) {
  const routeTitle = useRouteTitle();
  const section = useSection();
  const sectionTitle = section.id !== "/(main)" ? section.title : undefined;
  return (
    <>
      <title>{routeTitle}</title>
      <LayoutMenu />
      <LayoutHeader
        sectionTitle={sectionTitle}
        background={props.background}
        aspectRatio={props.aspectRatio}
      />
      {props.headerExtra}
      <LayoutRouteTitle />
      <ScrollToContent>{props.children}</ScrollToContent>
      <LayoutFooter />
    </>
  );
}

function ScrollToContent(props: { children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null!);
  const initialSectionId = useMatches({ select: (s) => s[1].routeId });
  const prevSectionId = useRef(initialSectionId);
  const { history, matchRoutes } = useRouter();
  const [push, setPush] = useState<{ isSectionChange?: boolean } | null>(null);
  const offset = useStickyOffset();

  useLayoutEffect(() => {
    if (push === null) return;
    const top = push.isSectionChange ? 0 : ref.current.offsetTop - offset;
    window.scrollTo({ top, behavior: "instant" });
  }, [offset, push]);

  useLayoutEffect(
    () =>
      history.subscribe(({ action, location }) => {
        const sectionId = matchRoutes(location.pathname)[1].routeId;
        if (prevSectionId.current !== sectionId) {
          prevSectionId.current = sectionId;
          setPush({ isSectionChange: true });
          return;
        }

        if (action.type === "PUSH") setPush({});
      }),
    [history, matchRoutes],
  );

  return (
    <main
      ref={ref}
      style={{ "--main-offset": "1rem" }}
      className="font-main p-(--main-offset)"
    >
      {props.children}
    </main>
  );
}
