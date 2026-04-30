import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";

export const Route = createFileRoute("/(main)/feedback")({
  component: RouteComponent,
  staticData: {
    title: "Зворотній зв'язок",
  },
});

function RouteComponent() {
  return (
    <Embed
      src="https://docs.google.com/forms/d/1kr6Fn4eH7RdPD5gLknkALhegLxDL-1rFdhi_VCQO8so/viewform?embedded=true&amp;bc=transparent&amp;ttl=0"
      className="h-210"
    />
  );
}
