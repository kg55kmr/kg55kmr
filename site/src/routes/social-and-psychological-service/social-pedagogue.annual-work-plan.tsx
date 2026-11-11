import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";

export const Route = createFileRoute(
  "/social-and-psychological-service/social-pedagogue/annual-work-plan",
)({
  component: RouteComponent,
  staticData: {
    title: "Річний план роботи соціального педагога",
  },
});

function RouteComponent() {
  return (
    <Embed src="https://drive.google.com/file/d/1tLWO-IFOhgtYrXTwj2BdB_DWTJnGrExa/preview" />
  );
}
