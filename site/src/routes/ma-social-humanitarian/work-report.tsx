import type { FC } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { WorkReport } from "~/components/teachers";

export const Route = createFileRoute("/ma-social-humanitarian/work-report")({
  component: RouteComponent,
  staticData: {
    title: "Звіт про роботу",
  },
});

const data = import.meta.glob<FC>("./-work-report/*.tsx", {
  eager: true,
  import: "Content",
});

function RouteComponent() {
  return <WorkReport data={data} />;
}
