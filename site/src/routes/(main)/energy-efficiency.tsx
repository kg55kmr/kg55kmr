import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "~/components/link";
import { asset } from "~/lib/utils";

export const Route = createFileRoute("/(main)/energy-efficiency")({
  component: RouteComponent,
  staticData: {
    title: "Дбаємо про енергоефективність та ресурсозбереження",
  },
});

function RouteComponent() {
  return (
    <>
      <img
        src={asset("images/енергоефективність-4.jpg")}
        className="mx-auto w-120"
      />
      <ul>
        <li>
          <ExternalLink href="https://drive.google.com/file/d/1KI38tZbVBhhJ-eKOFD47IgODhE9BQngP/view">
            Наказ про затвердження Плану з питань енергоефективності та
            ресурсозбереження
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://drive.google.com/file/d/1qB1yk3TKngH2IegZ72lq5kClAXwuHPo0/view">
            План заходів із висвітлення питань енергоефективності та
            ресурсозбереження
          </ExternalLink>
        </li>
      </ul>

      <hr className="my-4" />
      <div className="mx-auto grid w-full gap-4 lg:w-270 lg:grid-cols-2">
        <img
          src={asset("images/енергоефективність-1.jpg")}
          className="w-full"
        />
        <div className="grid gap-4">
          <img
            src={asset("images/енергоефективність-2.jpg")}
            className="w-full"
          />
          <img
            src={asset("images/енергоефективність-3.jpg")}
            className="w-full"
          />
        </div>
      </div>
    </>
  );
}
