import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";

export const Route = createFileRoute(
  "/methodical-office/organization-of-methodical-work",
)({
  component: RouteComponent,
  staticData: {
    title: "Організація методичної роботи",
  },
});

function RouteComponent() {
  return (
    <Embed src="https://drive.google.com/file/d/1JGR4RY1Xbzs6cW9Yftz5TKtdoSRazTL8/preview" />
  );
}
