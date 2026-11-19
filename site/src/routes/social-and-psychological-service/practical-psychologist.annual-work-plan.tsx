import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";

export const Route = createFileRoute(
  "/social-and-psychological-service/practical-psychologist/annual-work-plan",
)({
  component: RouteComponent,
  staticData: {
    title: "Річний план роботи практичного психолога",
  },
});

function RouteComponent() {
  return (
    <Embed src="https://drive.google.com/file/d/1PItEq2ossJhQksjwun9Hove0vD43k4O7/preview" />
  );
}
