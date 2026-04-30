import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";

export const Route = createFileRoute(
  "/educational-work/memorandum-of-cooperation",
)({
  component: RouteComponent,
  staticData: { title: "Меморандум співпраці" },
});

function RouteComponent() {
  return (
    <Embed src="https://drive.google.com/file/d/1vc0VN1lcHg1c4pJNKrQPpMNPNp-c6kT6/preview" />
  );
}
