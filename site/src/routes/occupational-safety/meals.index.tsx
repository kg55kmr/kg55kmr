import { createFileRoute } from "@tanstack/react-router";
import { Feed } from "~/components/feed";

export const Route = createFileRoute("/occupational-safety/meals/")({
  component: RouteComponent,
  staticData: {
    title: "Загальна інформація",
  },
});

const data = import.meta.glob("./-meals/*/*.tsx", { eager: true });

function RouteComponent() {
  return <Feed items={data} />;
}
