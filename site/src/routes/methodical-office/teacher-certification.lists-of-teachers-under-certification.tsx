import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";

export const Route = createFileRoute(
  "/methodical-office/teacher-certification/lists-of-teachers-under-certification",
)({
  component: RouteComponent,
  staticData: {
    title: "Списки атестуємих",
  },
});

function RouteComponent() {
  return (
    <Embed src="https://drive.google.com/file/d/1EDJAptz01ei1u6PyzGdepqMkx4CA_PLp/preview" />
  );
}
