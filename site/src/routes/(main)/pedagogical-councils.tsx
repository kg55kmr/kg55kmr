import { createFileRoute } from "@tanstack/react-router";
import { Archive } from "~/components/archive";
import { MeetingsChronology } from "~/components/chronology";
import { data } from "~/data/meetings/pedagogical-councils";

export const Route = createFileRoute("/(main)/pedagogical-councils")({
  component: RouteComponent,
  staticData: {
    title: "Педагогічні ради",
  },
});

function RouteComponent() {
  return (
    <Archive items={data}>{(v) => <MeetingsChronology items={v} />}</Archive>
  );
}
