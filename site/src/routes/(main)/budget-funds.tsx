import { createFileRoute } from "@tanstack/react-router";
import { finance } from "~/data/finance";
import { Reports } from "./-components/reports";

export const Route = createFileRoute("/(main)/budget-funds")({
  component: RouteComponent,
  staticData: {
    title: "Використання бюджетних коштів",
  },
});

function RouteComponent() {
  return <Reports data={finance.budget} />;
}
