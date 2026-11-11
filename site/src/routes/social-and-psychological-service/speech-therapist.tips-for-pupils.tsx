import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "~/components/gallery";
import { useImagesSize } from "~/hooks/use-queries";

export const Route = createFileRoute(
  "/social-and-psychological-service/speech-therapist/tips-for-pupils",
)({
  component: RouteComponent,
  staticData: {
    title: "Поради учням",
  },
});

const images = import.meta.glob<string>(
  "./-speech-therapist.tips-for-pupils/*.jpg",
  {
    eager: true,
    import: "default",
  },
);

function RouteComponent() {
  const items = useImagesSize(Object.values(images), false);
  return <Gallery images={items} rowContraints={{ maxPhotos: 2 }} />;
}
