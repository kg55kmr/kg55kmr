import { createFileRoute } from "@tanstack/react-router";
import { type FeedPost2, Feed2, validateId } from "~/components/feed";

export const Route = createFileRoute(
  "/social-and-psychological-service/social-pedagogue/tips-for-teachers",
)({
  component: RouteComponent,
  validateSearch: validateId,
  staticData: {
    title: "Поради вчителям",
  },
});

const data = import.meta.glob<FeedPost2>(
  "./-social-pedagogue.tips-for-teachers/*/*.tsx",
  {
    eager: true,
  },
);

function RouteComponent() {
  const { id } = Route.useSearch();
  return <Feed2 items={data} id={id} />;
}
