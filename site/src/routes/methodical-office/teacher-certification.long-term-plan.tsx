import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";

export const Route = createFileRoute(
  "/methodical-office/teacher-certification/long-term-plan",
)({
  component: RouteComponent,
  staticData: {
    title: "Перспективний план",
  },
});

function RouteComponent() {
  return (
    <Embed src="https://drive.google.com/file/d/1WIlkkCh2IZzX3FgNuEz3W3Ndu_lE1-56/preview" />
  );
}
