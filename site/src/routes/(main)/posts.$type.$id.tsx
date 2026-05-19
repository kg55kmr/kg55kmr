import { createFileRoute } from "@tanstack/react-router";
import { PostInfo } from "~/components/post-info";
import { PostMarkdown } from "~/components/post-markdown";
import { formatPostDate, getPostThumbnailUrl } from "~/lib/posts";
import { getPost } from "~/server/server-fn";

export const Route = createFileRoute("/(main)/posts/$type/$id")({
  component: RouteComponent,
  staticData: {
    hasParent: true,
  },
  loader: async ({ params }) => {
    const post = await getPost({ data: params });
    return { post };
  },
});

function RouteComponent() {
  const { post } = Route.useLoaderData();
  const { type, id } = Route.useParams();
  return (
    <>
      <Frontmatter
        type={type}
        id={id}
        title={post.title}
        date={formatPostDate(post.date)}
      />
      <PostMarkdown content={post.content} id={id} type={type} />
    </>
  );
}

function Frontmatter(props: {
  type: string;
  id: string;
  title: string;
  date: string;
}) {
  return (
    <>
      <Thumbnail src={getPostThumbnailUrl(props.type, props.id)} />
      <PostInfo title={props.title} date={props.date} />
    </>
  );
}

function Thumbnail(props: { src: string }) {
  return (
    <img
      src={props.src}
      className="mx-auto mb-(--main-offset) max-h-80 rounded-md border object-contain drop-shadow-lg drop-shadow-black/50 sm:h-80"
    />
  );
}
