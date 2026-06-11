import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";

export const Route = createFileRoute(
  "/occupational-safety/civil-protection/access-rules",
)({
  component: RouteComponent,
  staticData: {
    title: "Правила доступу",
  },
});

function RouteComponent() {
  return (
    <Embed src="https://drive.google.com/file/d/1n4YpoMf-8TuPLVZ4PNAA1Vwna7tFafQs/preview" />
  );
}
