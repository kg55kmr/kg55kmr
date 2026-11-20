import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";

export const Route = createFileRoute(
  "/social-and-psychological-service/speech-therapist/institution-assignments",
)({
  component: RouteComponent,
  staticData: {
    title:
      "Про закріплення закладів освіти району за логопедичними пунктами відділу освіти",
    shortTitle: "Закріплення закладів за логопедичними пунктами",
  },
});

function RouteComponent() {
  return (
    <Embed src="https://drive.google.com/file/d/1JT731TNc5_aTyfZr5gJHIityhVACgkB6/preview" />
  );
}
