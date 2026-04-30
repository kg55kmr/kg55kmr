import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "~/components/gallery";
import { useImages } from "~/hooks/use-queries";

export const Route = createFileRoute("/occupational-safety/meals/useful-tips")({
  component: RouteComponent,
  staticData: {
    title: "Корисні поради",
  },
  ssr: false,
});

function RouteComponent() {
  const images = useImages("occupational-safety/meals-useful-tips");
  return (
    <Gallery
      images={images.map((v) => ({
        ...v,
        src: v.previewUrl,
        previewSrc: v.url,
      }))}
      rowContraints={{ maxPhotos: 5 }}
    />
  );
}
