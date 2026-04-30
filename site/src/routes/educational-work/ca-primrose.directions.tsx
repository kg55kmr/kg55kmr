import { createFileRoute } from "@tanstack/react-router";
import { asset } from "~/lib/utils";

export const Route = createFileRoute(
  "/educational-work/ca-primrose/directions",
)({
  component: RouteComponent,
  staticData: {
    title: "Напрямки",
  },
});

function RouteComponent() {
  return (
    <img
      src={asset("images/до-первоцвіт-напрямки.jpg")}
      className="mx-auto w-250"
    />
  );
}
