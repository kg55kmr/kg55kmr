import { createFileRoute } from "@tanstack/react-router";
import { type Post, Posts } from "~/components/posts";
import { postIdSchema } from "~/lib/validate";

export const Route = createFileRoute("/parent-forum/tips-for-parents")({
  component: RouteComponent,
  validateSearch: postIdSchema,
  staticData: {
    title: "Поради батькам",
  },
});

const data = import.meta.glob<Post>("./-tips-for-parents/*/*.tsx", {
  eager: true,
  import: "default",
});

function RouteComponent() {
  return <Posts items={data} id={Route.useSearch().id} />;
}
