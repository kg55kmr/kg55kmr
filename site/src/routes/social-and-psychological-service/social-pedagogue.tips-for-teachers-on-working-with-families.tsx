import { createFileRoute } from "@tanstack/react-router";
import { Feed } from "~/components/feed";

export const Route = createFileRoute(
  "/social-and-psychological-service/social-pedagogue/tips-for-teachers-on-working-with-families",
)({
  component: RouteComponent,
  staticData: {
    title: "Поради вчителям у роботі з сім'ями",
  },
});

const data = import.meta.glob(
  "./-social-pedagogue.tips-for-teachers-on-working-with-families/*/*.tsx",
  {
    eager: true,
  },
);

function RouteComponent() {
  return <Feed items={data} />;
}
