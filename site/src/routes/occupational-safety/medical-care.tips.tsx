import { createFileRoute } from "@tanstack/react-router";
import { Feed } from "~/components/feed";

export const Route = createFileRoute("/occupational-safety/medical-care/tips")({
  component: RouteComponent,
  staticData: {
    title: "Поради",
  },
});

const data = import.meta.glob("./-medical-care.tips/*/*.tsx", {
  eager: true,
});

function RouteComponent() {
  return <Feed items={data} />;
}
