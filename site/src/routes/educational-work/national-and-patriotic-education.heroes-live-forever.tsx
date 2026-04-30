import { createFileRoute } from "@tanstack/react-router";
import { Folder } from "lucide-react";
import { ImageKitCarousel } from "~/components/carousel";
import { ExternalLink } from "~/components/link";
import { YouTube } from "~/components/youtube";
import { asset } from "~/lib/utils";

export const Route = createFileRoute(
  "/educational-work/national-and-patriotic-education/heroes-live-forever",
)({
  component: RouteComponent,
  staticData: {
    title: "Герої живуть вічно",
  },
});

function RouteComponent() {
  return (
    <div className="content relative">
      <div
        style={{
          backgroundImage: `url(${asset("images/герої-живуть-вічно.jpg")})`,
        }}
        className="[background-repeat:no-repeat repeat] absolute -z-1 h-full w-full bg-size-[100%] opacity-15"
      />

      <div className="grid gap-5 lg:grid-cols-2">
        <div>
          <img
            src={asset("images/герб-україни.webp")}
            className="mx-auto h-32"
          />
          <h1 className="italic">
            "Пам'ятаємо визволителів
            <br />
            Другої світової війни"
          </h1>
          <ImageKitCarousel path="educational-work/герої-живуть-вічно/1" />
        </div>

        <h1 className="top-10 w-full text-center text-blue-700 lg:absolute">
          "Герої живуть вічно"
        </h1>
        <div>
          <img
            src={asset("images/прапор-україни-2.jpg")}
            className="mx-auto h-32"
          />
          <h1 className="italic">
            "Закарбувалися в пам'яті
            <br />
            людській навічно"
          </h1>
          <ImageKitCarousel path="educational-work/герої-живуть-вічно/2" />
        </div>
      </div>

      <h1 className="text-orange-500">
        Пам'ять про історію залишає слід в сучасності
      </h1>
      <YouTube videoId="BGUu3hvt94M" />

      <ExternalLink href="https://drive.google.com/drive/folders/1U1PbzJFMWLayGEmmZ9I5_gQpaYPfTRLd?usp=drive_link">
        <span className="flex items-center gap-x-2">
          <Folder />
          Сценарії національно-патріотичних заходів
        </span>
      </ExternalLink>
    </div>
  );
}
