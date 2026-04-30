import { createFileRoute } from "@tanstack/react-router";
import { Feed } from "~/components/feed";

export const Route = createFileRoute("/occupational-safety/safety-guide")({
  component: RouteComponent,
  staticData: {
    title: "Путівник безпеки",
  },
});

const data = import.meta.glob("./-safety-guide/*/*.tsx", {
  eager: true,
});

function RouteComponent() {
  return <Feed items={data} />;
}
