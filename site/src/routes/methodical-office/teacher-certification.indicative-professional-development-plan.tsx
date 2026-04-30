import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";

export const Route = createFileRoute(
  "/methodical-office/teacher-certification/indicative-professional-development-plan",
)({
  component: RouteComponent,
  staticData: {
    title: "Орієнтовний план підвищення кваліфікації",
  },
});

function RouteComponent() {
  return (
    <Embed src="https://drive.google.com/file/d/1cVzAUXeSl0Q5VccHLUK8M9Pv7FIek1lZ/preview" />
  );
}
