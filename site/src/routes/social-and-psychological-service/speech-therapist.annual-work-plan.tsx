import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";

export const Route = createFileRoute(
  "/social-and-psychological-service/speech-therapist/annual-work-plan",
)({
  component: RouteComponent,
  staticData: {
    title: "Річний план роботи учителя-логопеда",
  },
});

function RouteComponent() {
  return (
    <Embed src="https://drive.google.com/file/d/19s972NP3U1yzAalyM74xWA2XBCH_IVxN/preview" />
  );
}
