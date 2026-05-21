import type { ReactNode } from "react";
import { useHydrated } from "@tanstack/react-router";
import { useMediaMatch } from "rooks";
import { type BreakpointType, breakpoints } from "~/lib/breakpoints";

type Props = { when: BreakpointType; render: ReactNode; fallback: ReactNode };

export function Responsive(props: Props) {
  const match = useMediaMatch(`(width >= ${breakpoints[props.when]}rem)`);
  const hydrated = useHydrated();

  if (!hydrated)
    return (
      <>
        <div className={styles[props.when].render}>{props.render}</div>
        <div className={styles[props.when].fallback}>{props.fallback}</div>
      </>
    );

  if (match) return props.render;
  return props.fallback;
}

const styles: Record<BreakpointType, { render: string; fallback: string }> = {
  sm: { render: "hidden sm:contents", fallback: "contents sm:hidden" },
  md: { render: "hidden md:contents", fallback: "contents md:hidden" },
  lg: { render: "hidden lg:contents", fallback: "contents lg:hidden" },
  xl: { render: "hidden xl:contents", fallback: "contents xl:hidden" },
  "2xl": { render: "hidden 2xl:contents", fallback: "contents 2xl:hidden" },
};
