import { createFileRoute } from "@tanstack/react-router";
import { type Post, Posts } from "~/components/posts";
import { postIdSchema } from "~/lib/validate";

export const Route = createFileRoute(
  "/social-and-psychological-service/practical-psychologist/tips-for-pupils",
)({
  component: RouteComponent,
  validateSearch: postIdSchema,
  staticData: {
    title: "Поради учням",
  },
});

const items = import.meta.glob<Post>(
  "./-practical-psychologist.tips-for-pupils/*/*.tsx",
  { eager: true, import: "default" },
);
function RouteComponent() {
  return <Posts items={items} id={Route.useSearch().id} />;
}
