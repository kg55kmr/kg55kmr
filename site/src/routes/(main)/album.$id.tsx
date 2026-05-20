import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "~/components/gallery";
import { PostInfo } from "~/components/post-info";
import { usePostImages } from "~/hooks/use-queries";
import { toGalleryImage } from "~/lib/images";
import { formatPostDate } from "~/lib/posts";
import { getAlbumPost } from "~/server/server-fn";

export const Route = createFileRoute("/(main)/album/$id")({
  component: RouteComponent,
  loader: ({ params }) => getAlbumPost({ data: params }),
  staticData: {
    hasParent: true,
  },
});

function RouteComponent() {
  const { title, date, postIds } = Route.useLoaderData();
  const images = usePostImages(postIds).map(toGalleryImage);

  return (
    <>
      <PostInfo title={title} date={formatPostDate(date)} />
      <Gallery images={images} />
    </>
  );
}
