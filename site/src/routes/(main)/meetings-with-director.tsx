import { createFileRoute } from "@tanstack/react-router";
import { Archive } from "~/components/archive";
import { MeetingsTimeline } from "~/components/timeline";
import { data } from "~/data/meetings/meetings-with-director";

export const Route = createFileRoute("/(main)/meetings-with-director")({
  component: RouteComponent,
  staticData: {
    title: "Наради при директорові",
  },
});

function RouteComponent() {
  return (
    <Archive items={data}>{(v) => <MeetingsTimeline items={v} />}</Archive>
  );
}
