import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";

export const Route = createFileRoute(
  "/educational-work/national-and-patriotic-education/report",
)({
  component: RouteComponent,
  staticData: {
    title: "Звіт",
  },
});

function RouteComponent() {
  return (
    <Embed src="https://drive.google.com/file/d/1FdOqwY9JelUgYTVKpwgJilaDThE-TUKx/preview" />
  );
}
