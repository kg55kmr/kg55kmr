import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";

export const Route = createFileRoute("/educational-work/plan")({
  component: RouteComponent,
  staticData: {
    title: "План виховної роботи",
  },
});

function RouteComponent() {
  return (
    <Embed src="https://docs.google.com/document/d/1KSXlnhPwTR1-63HymfXNCZdkqjP0W_CU/preview" />
  );
}
