import { createFileRoute } from "@tanstack/react-router";
import { Archive } from "~/components/archive";
import { MeetingsTimeline } from "~/components/timeline";
import { data } from "~/data/meetings/methodological-organizational-meetings";

export const Route = createFileRoute(
  "/(main)/methodological-organizational-meetings",
)({
  component: RouteComponent,
  staticData: {
    title: "Методичні й організаційні наради",
  },
});

function RouteComponent() {
  return (
    <Archive items={data}>
      {(v) => <MeetingsTimeline items={v} itemComponents={2} />}
    </Archive>
  );
}
