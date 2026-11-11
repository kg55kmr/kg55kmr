import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/educational-work/career-guidance-work/announcements",
)({
  component: RouteComponent,
  staticData: {
    title: "Оголошення",
    dev: true,
  },
});

function RouteComponent() {
  return <div className="gap-2"></div>;
}
