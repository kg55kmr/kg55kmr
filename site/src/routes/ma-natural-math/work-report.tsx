import type { FC } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { WorkReport } from "~/components/teachers";

export const Route = createFileRoute("/ma-natural-math/work-report")({
  component: RouteComponent,
  staticData: {
    title: "Звіт про роботу",
  },
});

const data = import.meta.glob<FC>("./-work-report/*.tsx", {
  eager: true,
  import: "Content",
});

// TODO: move content to markdown
function RouteComponent() {
  return <WorkReport data={data} />;
}
