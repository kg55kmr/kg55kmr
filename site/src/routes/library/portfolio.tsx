import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/library/portfolio")({
  component: RouteComponent,
  staticData: { title: "Портфоліо" },
});

// TODO: add
function RouteComponent() {
  return "ДОДАТИ";
}
