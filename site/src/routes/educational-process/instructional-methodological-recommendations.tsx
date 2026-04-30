import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";

export const Route = createFileRoute(
  "/educational-process/instructional-methodological-recommendations",
)({
  component: RouteComponent,
  staticData: {
    title: "Інструктивно-методичні рекомендації",
  },
});

function RouteComponent() {
  return (
    <Embed src="https://drive.google.com/file/d/1Nbco2l1TpT5CCeBhgKVnKQWfkAnxOevz/preview" />
  );
}
