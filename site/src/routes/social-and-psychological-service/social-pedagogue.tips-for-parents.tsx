import { createFileRoute } from "@tanstack/react-router";
import { Feed } from "~/components/feed";

export const Route = createFileRoute(
  "/social-and-psychological-service/social-pedagogue/tips-for-parents",
)({
  component: RouteComponent,
  staticData: {
    title: "Поради батькам",
  },
});

const data = import.meta.glob("./-social-pedagogue.tips-for-parents/*/*.tsx", {
  eager: true,
});

function RouteComponent() {
  return <Feed items={data} />;
}
