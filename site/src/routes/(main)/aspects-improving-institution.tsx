import { createFileRoute } from "@tanstack/react-router";
import { ImageKitCarousel } from "~/components/carousel";

export const Route = createFileRoute("/(main)/aspects-improving-institution")({
  component: RouteComponent,
  staticData: { title: "Грані вдосконалення закладу" },
});

// TODO: remove?

function RouteComponent() {
  return <ImageKitCarousel path="posts/cloudinary/72157691052540884" />;
}
