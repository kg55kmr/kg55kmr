import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "~/components/gallery";
import { PostInfo } from "~/components/post-info";
import { usePostImages } from "~/hooks/use-queries";
import { toGalleryImage } from "~/lib/images";
import { formatPostDate } from "~/lib/posts";
import { getAlbumPost } from "~/server/server-fn";

export const Route = createFileRoute("/(main)/album/$id")({
  component: RouteComponent,
  loader: async ({ params }) => {
    const post = await getAlbumPost({ data: params });
    return { post };
  },
  staticData: {
    hasParent: true,
  },
});

function RouteComponent() {
  const { post } = Route.useLoaderData();
  const images = usePostImages(post.postIds).map(toGalleryImage);

  return (
    <>
      <PostInfo title={post.title} date={formatPostDate(post.date)} />
      <Gallery images={images} />
    </>
  );
}
