import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";

export const Route = createFileRoute(
  "/educational-work/falcon-squire/regulation",
)({
  component: RouteComponent,
  staticData: {
    title: "Положення",
  },
});

function RouteComponent() {
  return (
    <Embed src="https://drive.google.com/file/d/1Tg-E8VW9uZySF7c305MDpuzxqkpu_q5C/preview" />
  );
}
