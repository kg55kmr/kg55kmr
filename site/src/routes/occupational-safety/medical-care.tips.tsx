import { createFileRoute } from "@tanstack/react-router";
import { type Post, Posts } from "~/components/posts";
import { postIdSchema } from "~/lib/validate";

export const Route = createFileRoute("/occupational-safety/medical-care/tips")({
  component: RouteComponent,
  validateSearch: postIdSchema,
  staticData: {
    title: "Поради",
  },
});

const items = import.meta.glob<Post>("./-medical-care.tips/*/*.tsx", {
  eager: true,
  import: "default",
});

function RouteComponent() {
  return <Posts items={items} id={Route.useSearch().id} />;
}
