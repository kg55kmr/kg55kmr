import { createFileRoute } from "@tanstack/react-router";
import { publicInfo } from "~/data/public-info";
import { Reports } from "./-components/reports";

export const Route = createFileRoute("/(main)/public-info")({
  component: RouteComponent,
  staticData: {
    title: "Публічна інформація",
  },
});

function RouteComponent() {
  return <Reports data={publicInfo} />;
}
