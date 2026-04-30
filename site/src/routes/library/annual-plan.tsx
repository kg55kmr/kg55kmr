import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/library/annual-plan")({
  component: RouteComponent,
  staticData: { title: "Річний план" },
});

// TODO: add
function RouteComponent() {
  return "ДОДАТИ";
}
