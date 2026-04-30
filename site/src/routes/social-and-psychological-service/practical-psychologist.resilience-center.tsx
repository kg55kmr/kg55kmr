import { createFileRoute } from "@tanstack/react-router";
import { YouTube } from "~/components/youtube";
import { asset } from "~/lib/utils";

export const Route = createFileRoute(
  "/social-and-psychological-service/practical-psychologist/resilience-center",
)({
  component: RouteComponent,
  staticData: {
    title: "Центр життєстійкості",
  },
});

function RouteComponent() {
  return (
    <>
      <img
        src={asset("images/центр-життєстійкості.jpg")}
        className="mx-auto w-300"
      />
      <div className="grid lg:grid-cols-2">
        <YouTube videoId="2vXokiWXCxg" />
        <YouTube videoId="TgzDop4pQ1g" />
        <YouTube videoId="DwlTVNIteoo" />
      </div>
    </>
  );
}
