import type { FeedPost } from "~/components/feed";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/social-and-psychological-service/practical-psychologist/tips-for-parents/$id",
)({
  component: RouteComponent,
  ssr: false,
  loader: ({ params }) =>
    import(`./-practical-psychologist.tips-for-parents/${params.id}/index.tsx`),
});

function RouteComponent() {
  const { Content } = Route.useLoaderData();

  return <Content />;
}
