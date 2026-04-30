import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";

export const Route = createFileRoute(
  "/educational-work/career-guidance-work/student-career-guidance-card",
)({
  component: RouteComponent,
  staticData: {
    title: "Картка з профорієнтації учнів",
  },
});

function RouteComponent() {
  return (
    <div>
      <Embed src="https://docs.google.com/document/d/1ePUWKHAeA4KrWa6774tOgxsbfh4_wbOh/preview" />
    </div>
  );
}
