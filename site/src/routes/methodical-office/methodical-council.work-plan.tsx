import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/methodical-office/methodical-council/work-plan",
)({
  component: RouteComponent,
  staticData: {
    title: "План роботи",
  },
});

function RouteComponent() {
  return <div className="">???</div>;
}
