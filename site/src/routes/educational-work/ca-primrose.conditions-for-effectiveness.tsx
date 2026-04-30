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
    <div className="grid justify-items-center gap-5 md:grid-cols-2">
      <img
        src={asset("images/до-первоцвіт-умови-ефективності-1.jpg")}
        className="w-152"
      />
      <img
        src={asset("images/до-первоцвіт-умови-ефективності-2.jpg")}
        className="w-152"
      />
      <img
        src={asset("images/до-первоцвіт-умови-ефективності-3.jpg")}
        className="w-152"
      />
      <img
        src={asset("images/до-первоцвіт-умови-ефективності-4.jpg")}
        className="w-152"
      />
    </div>
  );
}
