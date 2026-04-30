import { createFileRoute } from "@tanstack/react-router";
import { asset } from "~/lib/utils";

export const Route = createFileRoute(
  "/occupational-safety/civil-protection/population-actions-during-evacuation",
)({
  component: RouteComponent,
  staticData: {
    title: "Дія населення під час евакуації",
  },
});

function RouteComponent() {
  return (
    <div className="flex flex-col items-center gap-5">
      <img
        src={asset("images/дія-населення-під-час-евакуації-1.jpg")}
        className="w-220"
      />
      <img
        src={asset("images/дія-населення-під-час-евакуації-2.jpg")}
        className="w-220"
      />
    </div>
  );
}
