import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";

export const Route = createFileRoute("/educational-work/ma-class-teachers")({
  component: RouteComponent,
  staticData: {
    title: "МО класних керівників",
  },
});

function RouteComponent() {
  return (
    <Embed src="https://drive.google.com/file/d/1HqTCuTJFtphUuSzY1ppcnb_dhvRkvcyB/preview" />
  );
}
