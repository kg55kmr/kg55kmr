import { createFileRoute } from "@tanstack/react-router";
import { finance } from "~/data/finance";
import { Reports } from "./-components/reports";

export const Route = createFileRoute("/(main)/non-budget-funds")({
  component: RouteComponent,
  staticData: {
    title: "Позабюджетні надходження у натуральній формі",
  },
});

function RouteComponent() {
  return <Reports data={finance.nonBudget} />;
}
