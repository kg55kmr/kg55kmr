import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PostInfo } from "~/components/post-info";
import { PostMarkdown } from "~/components/post-markdown";
import { usePost } from "~/hooks/use-queries";
import { type ParsedPost } from "~/lib/posts";

export const Route = createFileRoute("/(main)/posts/$type/$id")({
  component: RouteComponent,
  staticData: {
    hasParent: true,
  },
});

function RouteComponent() {
  const { type, id } = Route.useParams();
  const { post, date } = usePost(type, id);

  return (
    <>
      <Frontmatter post={post} date={date} />
      <PostMarkdown content={post.content} id={id} type={type} />
    </>
  );
}

function Frontmatter(props: { post: ParsedPost; date: string }) {
  return (
    <>
      <Thumbnail src={props.post.thumbnail} />
      <PostInfo title={props.post.title} date={props.date} />
    </>
  );
}

function Thumbnail(props: { src: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) return;

  return (
    <img
      src={props.src}
      onError={() => setHasError(true)}
      className="mx-auto mb-(--main-offset) max-h-80 rounded-md border object-contain drop-shadow-lg drop-shadow-black/50 sm:h-80"
    />
  );
}
