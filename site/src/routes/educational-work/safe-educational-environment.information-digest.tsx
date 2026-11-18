import { createFileRoute } from "@tanstack/react-router";
import { type FeedPost2, Feed2 } from "~/components/feed";
import { validateId } from "~/lib/validate";

export const Route = createFileRoute(
  "/educational-work/safe-educational-environment/information-digest",
)({
  component: RouteComponent,
  validateSearch: validateId,
  staticData: {
    title: "Інформаційний дайджест",
  },
});

const entries = import.meta.glob<FeedPost2>(
  "./-safe-educational-environment/*/*.tsx",
  {
    eager: true,
  },
);

function RouteComponent() {
  const { id } = Route.useSearch();
  return <Feed2 items={entries} id={id} />;
}

