import { createFileRoute } from "@tanstack/react-router";
import { ImageKitGallery } from "~/components/gallery";
import { asset } from "~/lib/utils";

export const Route = createFileRoute("/educational-work/falcon-dzhura/")({
  component: RouteComponent,
  staticData: {
    title:
      "Всеукраїнська дитячо-юнацька військово-патріотична гра «Сокіл» («Джура»)",
    shortTitle: "Загальна інформація",
  },
});

function RouteComponent() {
  return (
    <div className="content">
      <h1>
        Всеукраїнська дитячо-юнацька військово-патріотична гра «Сокіл» («Джура»)
      </h1>

      <img src={asset("images/сокіл-джура.webp")} className="mx-auto w-64" />
      <ImageKitGallery path="educational-work/джура" />
    </div>
  );
}
