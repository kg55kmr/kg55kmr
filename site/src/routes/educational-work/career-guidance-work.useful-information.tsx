import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";
import { YouTube } from "~/components/youtube";
import { asset } from "~/lib/utils";

export const Route = createFileRoute(
  "/educational-work/career-guidance-work/useful-information",
)({
  component: RouteComponent,
  staticData: {
    title: "Корисна інформація",
  },
});

function RouteComponent() {
  return (
    <div className="content">
      <div className="gap-x-10 lg:columns-2">
        <Embed src="//www.slideshare.net/slideshow/embed_code/key/IhVyEeVh6yxI0J" />
        <Embed src="//www.slideshare.net/slideshow/embed_code/key/wW7FpoOOBxoeqx" />
        <Embed src="//www.slideshare.net/slideshow/embed_code/key/Ignpm59JefVX27" />
        <YouTube videoId="zlnPRxt3KEE" />
        <img
          src={asset("images/профорієнтаційна-робота-3.jpg")}
          className="w-180"
        />
      </div>
    </div>
  );
}
