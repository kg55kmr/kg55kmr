import { createFileRoute } from "@tanstack/react-router";
import { ImageKitCarousel } from "~/components/carousel";
import { Collapsible } from "~/components/collapsible";
import { YouTube } from "~/components/youtube";

export const Route = createFileRoute("/educational-work/ca-primrose/")({
  component: RouteComponent,
  staticData: {
    title: "Загальна інформація",
  },
});

function RouteComponent() {
  return (
    <>
      <ImageKitCarousel
        path="educational-work/report-primrose"
        className="mb-5"
      />

      <Collapsible title="Архів">
        <div className="gap-x-10 lg:columns-2">
          <YouTube videoId="4r8PUk13xLU" />
          <YouTube videoId="jaxjlIoR46w" />
        </div>
      </Collapsible>
    </>
  );
}
