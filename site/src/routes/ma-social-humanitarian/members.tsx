import { createFileRoute } from "@tanstack/react-router";
import { Members } from "~/components/teachers";

export const Route = createFileRoute("/ma-social-humanitarian/members")({
  component: RouteComponent,
  staticData: {
    title: "Склад",
  },
});

function RouteComponent() {
  return <Members ma="МО вчителів суспільно-гуманітарного циклу" />;
}
