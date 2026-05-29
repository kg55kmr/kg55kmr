import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { PostInfo } from "~/components/post-info";
import { PostMarkdown } from "~/components/post-markdown";
import { cacheHeader } from "~/lib/headers";
import { formatPostDate, getPostThumbnailUrl } from "~/lib/posts";
import { getPost } from "~/server/server-fn";

export const Route = createFileRoute("/(main)/posts/$type/$id")({
  component: RouteComponent,
  loader: async ({ context, params }) => {
    context.queryClient.ensureQueryData(postQuery(params));
  },
  headers: cacheHeader(5),
  staticData: {
    hasParent: true,
  },
});

const postQuery = (opts: { type: string; id: string }) =>
  queryOptions({
    queryKey: ["posts", opts],
    queryFn: () => getPost({ data: opts }),
    staleTime: 5_000,
  });

function RouteComponent() {
  const params = Route.useParams();
  const { data: post } = useSuspenseQuery(postQuery(params));
  const { type, id } = Route.useParams();
  return (
    <>
      <Frontmatter
        type={type}
        id={id}
        title={post.title}
        date={formatPostDate(post.date)}
        thumbnail={!post.noThumbnail}
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
  thumbnail: boolean;
}) {
  return (
    <>
      {props.thumbnail && (
        <Thumbnail src={getPostThumbnailUrl(props.type, props.id)} />
      )}
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
