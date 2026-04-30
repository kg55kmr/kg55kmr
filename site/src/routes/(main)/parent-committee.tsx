import { createFileRoute } from "@tanstack/react-router";
import { Archive } from "~/components/archive";
import { MeetingsTimeline } from "~/components/timeline";
import { data } from "~/data/meetings/parent-committee";

export const Route = createFileRoute("/(main)/parent-committee")({
  component: RouteComponent,
  staticData: {
    title: "Засідання батьківського комітету",
  },
});

function RouteComponent() {
  return (
    <Archive items={data}>
      {(v) => <MeetingsTimeline items={v} itemComponents={2} />}
    </Archive>
  );
}
