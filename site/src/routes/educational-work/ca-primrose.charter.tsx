import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";

export const Route = createFileRoute("/educational-work/ca-primrose/charter")({
  component: RouteComponent,
  staticData: {
    title: "Статут",
  },
});

function RouteComponent() {
  return (
    <Embed src="https://docs.google.com/document/d/1Je8HK82Rh2d0MMEv6Ara2jmenKOu9taS/preview" />
  );
}
