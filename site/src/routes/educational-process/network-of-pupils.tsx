import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";

export const Route = createFileRoute("/educational-process/network-of-pupils")({
  component: RouteComponent,
  staticData: {
    title: "Мережа учнів",
  },
});

function RouteComponent() {
  return (
    <Embed src="https://drive.google.com/file/d/1ri2hb9gHpnLWNqgE-sw2qATEO9YGwGYg/preview" />
  );
}
