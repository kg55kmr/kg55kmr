import type { ReactElement } from "react";
import { useMatches } from "@tanstack/react-router";
import { useRouteTitle } from "~/hooks/use-sections";
import { useSticky } from "~/hooks/use-sticky";
import { Link } from "./link";

export function LayoutRouteTitle() {
  const title = useRouteTitle();
  const ref = useSticky();
  const hasParent = useMatches({
    select: (s) => s.at(-1)?.staticData.hasParent ?? false,
  });

  return (
    <div
      ref={ref}
      className="z-1 mb-2 flex w-full items-center justify-center overflow-x-clip border-y border-blue-500 bg-blue-50 py-2"
    >
      <Wrapper hasParent={hasParent}>
        <h1 className="font-roboto-condensed overflow-x-clip text-center text-xl whitespace-pre">
          {title ?? <>...</>}
        </h1>
      </Wrapper>
    </div>
  );
}

function Wrapper(props: { hasParent: boolean; children: ReactElement }) {
  if (props.hasParent) return <Link to="..">{props.children}</Link>;
  return props.children;
}
