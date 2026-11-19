import { createFileRoute } from "@tanstack/react-router";
import { type Post, Posts } from "~/components/posts";
import { postIdSchema } from "~/lib/validate";

export const Route = createFileRoute("/occupational-safety/safety-guide")({
  component: RouteComponent,
  validateSearch: postIdSchema,
  staticData: {
    title: "Путівник безпеки",
  },
});

const items = import.meta.glob<Post>("./-safety-guide/*/*.tsx", {
  eager: true,
  import: "default",
});

function RouteComponent() {
  return <Posts items={items} id={Route.useSearch().id} />;
}
