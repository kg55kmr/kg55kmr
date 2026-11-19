import { createFileRoute } from "@tanstack/react-router";
import { type Post, Posts } from "~/components/posts";
import { postIdSchema } from "~/lib/validate";

export const Route = createFileRoute(
  "/educational-work/safe-educational-environment/information-digest",
)({
  component: RouteComponent,
  validateSearch: postIdSchema,
  staticData: {
    title: "Інформаційний дайджест",
  },
});

const items = import.meta.glob<Post>(
  "./-safe-educational-environment/*/*.tsx",
  {
    eager: true,
    import: "default",
  },
);

function RouteComponent() {
  const { id } = Route.useSearch();
  return <Posts items={items} id={id} />;
}

