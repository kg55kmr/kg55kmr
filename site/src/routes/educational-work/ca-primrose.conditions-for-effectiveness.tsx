import { createFileRoute } from "@tanstack/react-router";
import { asset } from "~/lib/utils";

export const Route = createFileRoute(
  "/educational-work/ca-primrose/conditions-for-effectiveness",
)({
  component: RouteComponent,
  staticData: {
    title: "Умови ефективності",
  },
});

function RouteComponent() {
  return (
    <img
      src={asset("images/первоцвіт/умови-ефективності.jpg")}
      className="mx-auto w-200"
    />
  );
}
