import { createFileRoute } from "@tanstack/react-router";
import { extractSlideshows } from "posts";
import { Gallery } from "~/components/gallery";
import { PostInfo } from "~/components/post-info";
import { usePost, usePostImages } from "~/hooks/use-queries";
import { toGalleryImage } from "~/lib/images";

export const Route = createFileRoute("/(main)/album/$id")({
  component: RouteComponent,
  staticData: {
    hasParent: true,
  },
});

function RouteComponent() {
  const { id } = Route.useParams();
  const { post, date } = usePost("news", id);
  const galleryIds = extractSlideshows("news", id, post.content);
  const images = usePostImages(galleryIds).map(toGalleryImage);

  return (
    <>
      <PostInfo title={post.title} date={date} />
      <Gallery images={images} />
    </>
  );
}
