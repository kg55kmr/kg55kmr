import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "~/components/gallery";
import { useImagesSize } from "~/hooks/use-queries";
import { dirAsset } from "~/lib/utils";

export const Route = createFileRoute("/parent-forum/developmental-age-norms")({
  component: RouteComponent,
  staticData: {
    title: "Вікові норми розвитку",
  },
});

const image = dirAsset("images/");

function RouteComponent() {
  const images = useImagesSize(
    [
      image("вікові-норми-розвитку-1.jpg"),
      image("вікові-норми-розвитку-2.jpg"),
      image("вікові-норми-розвитку-3.jpg"),
      image("вікові-норми-розвитку-4.jpg"),
    ],
    false,
  );
  return <Gallery images={images} rowContraints={{ maxPhotos: 2 }} />;
}
