import { createFileRoute } from "@tanstack/react-router";
import { dirAsset } from "~/lib/utils";

export const Route = createFileRoute(
  "/occupational-safety/civil-protection/evacuation",
)({
  component: RouteComponent,
  staticData: {
    title: "Евакуація",
  },
});

const image = dirAsset("images/");

function RouteComponent() {
  return (
    <div>
      <img src={image("евакуація-1.jpg")} className="mx-auto w-300" />
      <img src={image("евакуація-2.jpg")} className="mx-auto w-300" />
      <img src={image("евакуація-3.jpg")} className="mx-auto w-300" />
      <img src={image("евакуація-4.jpg")} className="mx-auto w-200" />
    </div>
  );
}
