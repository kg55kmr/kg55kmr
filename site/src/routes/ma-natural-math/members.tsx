import { createFileRoute } from "@tanstack/react-router";
import { Members } from "~/components/teachers";

export const Route = createFileRoute("/ma-natural-math/members")({
  component: RouteComponent,
  staticData: {
    title: "Склад",
  },
});

function RouteComponent() {
  return <Members ma="МО вчителів природничо-математичного циклу" />;
}
