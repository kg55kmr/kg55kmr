import { createFileRoute } from "@tanstack/react-router";
import { dirAsset } from "~/lib/utils";

export const Route = createFileRoute(
  "/occupational-safety/covid-19/prevention",
)({
  component: RouteComponent,
  staticData: {
    title: "Профілактика коронавірусної інфекції",
  },
});

const image = dirAsset("images/");

const data = [
  image("профілактика-коронавірусної-інфекції-1.jpg"),
  image("профілактика-коронавірусної-інфекції-2.jpg"),
  image("профілактика-коронавірусної-інфекції-3.jpg"),
  image("профілактика-коронавірусної-інфекції-4.jpg"),
  image("профілактика-коронавірусної-інфекції-5.jpg"),
  image("профілактика-коронавірусної-інфекції-6.jpg"),
  image("профілактика-коронавірусної-інфекції-7.jpg"),
  image("профілактика-коронавірусної-інфекції-8.jpg"),
];

function RouteComponent() {
  return (
    <div className="flex flex-wrap items-start justify-center gap-5">
      {data.map((src) => (
        <img
          key={src}
          src={src}
          className="w-160 border-8 border-gray-200 object-contain"
        />
      ))}
    </div>
  );
}
