import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";

export const Route = createFileRoute(
  "/educational-work/national-and-patriotic-education/action-plans",
)({
  component: RouteComponent,
  staticData: {
    title: "План заходів",
  },
});

function RouteComponent() {
  return (
    <Embed src="https://drive.google.com/file/d/1IXZpzuxvKDOX-PtGTxaXzTZ817io3z6q/preview" />
  );
}
