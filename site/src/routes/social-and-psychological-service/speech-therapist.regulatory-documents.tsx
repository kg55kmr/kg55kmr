import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/social-and-psychological-service/speech-therapist/regulatory-documents",
)({
  component: RouteComponent,
  staticData: {
    title: "Нормативні документи",
    dev: true,
  },
});

function RouteComponent() {
  return <div></div>;
}
