import { createFileRoute } from "@tanstack/react-router";
import { Archive } from "~/components/archive";
import { MeetingsChronology } from "~/components/chronology";
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
      {(v) => <MeetingsChronology items={v} itemComponents={2} />}
    </Archive>
  );
}
