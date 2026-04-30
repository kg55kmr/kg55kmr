import { createFileRoute } from "@tanstack/react-router";
import { asset } from "~/lib/utils";

export const Route = createFileRoute("/educational-work/ca-primrose/rules")({
  component: RouteComponent,
  staticData: {
    title: "Правила",
  },
});

function RouteComponent() {
  return (
    <img
      src={asset("images/до-первоцвіт-правила.jpg")}
      className="mx-auto w-250"
    />
  );
}
