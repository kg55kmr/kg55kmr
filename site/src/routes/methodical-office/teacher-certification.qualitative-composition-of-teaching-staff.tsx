import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";

export const Route = createFileRoute(
  "/methodical-office/teacher-certification/qualitative-composition-of-teaching-staff",
)({
  component: RouteComponent,
  staticData: {
    title: "Інформація про якісний склад педагогічних працівників",
  },
});

function RouteComponent() {
  return (
    <Embed src="https://drive.google.com/file/d/1m9YIxBHr8iijKYpwslIYFvZFgwmwunIZ/preview" />
  );
}
