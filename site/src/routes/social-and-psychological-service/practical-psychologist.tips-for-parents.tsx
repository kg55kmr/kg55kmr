import { createFileRoute } from "@tanstack/react-router";
import { Feed } from "~/components/feed";

export const Route = createFileRoute(
  "/social-and-psychological-service/practical-psychologist/tips-for-parents",
)({
  component: RouteComponent,
  staticData: {
    title: "Поради батькам",
  },
});

const data = import.meta.glob(
  "./-practical-psychologist.tips-for-parents/*/*.tsx",
);

function RouteComponent() {
  return <Feed items={data} />;
}
