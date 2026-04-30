import { createFileRoute } from "@tanstack/react-router";
import { Feed } from "~/components/feed";

export const Route = createFileRoute(
  "/social-and-psychological-service/social-pedagogue/tips-for-teachers",
)({
  component: RouteComponent,
  staticData: {
    title: "Поради вчителям",
  },
});

const data = import.meta.glob("./-social-pedagogue.tips-for-teachers/*/*.tsx", {
  eager: true,
});

function RouteComponent() {
  return <Feed items={data} />;
}
