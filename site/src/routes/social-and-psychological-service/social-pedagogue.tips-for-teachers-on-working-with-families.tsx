import { createFileRoute } from "@tanstack/react-router";
import { type Post, Posts } from "~/components/posts";
import { postIdSchema } from "~/lib/validate";

export const Route = createFileRoute(
  "/social-and-psychological-service/social-pedagogue/tips-for-teachers-on-working-with-families",
)({
  component: RouteComponent,
  validateSearch: postIdSchema,
  staticData: {
    title: "Поради вчителям у роботі з сім'ями",
  },
});

const data = import.meta.glob<Post>(
  "./-social-pedagogue.tips-for-teachers-on-working-with-families/*/*.tsx",
  { eager: true, import: "default" },
);

function RouteComponent() {
  const { id } = Route.useSearch();
  return <Posts items={data} id={id} />;
}
