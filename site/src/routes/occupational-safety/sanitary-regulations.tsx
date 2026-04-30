import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";

export const Route = createFileRoute(
  "/occupational-safety/sanitary-regulations",
)({
  component: RouteComponent,
  staticData: {
    title: "Санітарний регламент",
  },
});

function RouteComponent() {
  return (
    <Embed src="https://drive.google.com/file/d/1tbkQJ5yID4FZdjrDxntMedXMLfq9J24i/preview" />
  );
}
