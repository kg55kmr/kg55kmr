import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";

export const Route = createFileRoute(
  "/social-and-psychological-service/social-pedagogue/information-asc",
)({
  component: RouteComponent,
  staticData: {
    title: "Інформація про центр надання адміністративних послуг",
    shortTitle: "Інформація про ЦНАП",
  },
});

function RouteComponent() {
  return (
    <Embed src="https://drive.google.com/file/d/1CYRO50lSpQrNtiHgwMlaMvOG8a7c6sKK/preview" />
  );
}
