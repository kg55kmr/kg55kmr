import { createFileRoute } from "@tanstack/react-router";
import { dirAsset } from "~/lib/utils";

export const Route = createFileRoute("/occupational-safety/covid-19/")({
  component: RouteComponent,
  staticData: {
    title: "Загальна інформація",
  },
});

const image = dirAsset("images/");

function RouteComponent() {
  return (
    <div className="flex flex-wrap items-start justify-center gap-5">
      <img src={image("covid-19-1.jpg")} className="w-160 object-contain" />
      <img src={image("covid-19-2.jpg")} className="w-160 object-contain" />
      <img src={image("covid-19-3.jpg")} className="w-160 object-contain" />
      <img src={image("covid-19-4.jpg")} className="w-160 object-contain" />
      <img src={image("covid-19-5.jpg")} className="w-160 object-contain" />
    </div>
  );
}
