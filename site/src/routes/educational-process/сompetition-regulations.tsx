import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "~/components/link";
import { asset } from "~/lib/utils";

export const Route = createFileRoute(
  "/educational-process/сompetition-regulations",
)({
  component: RouteComponent,
  staticData: {
    title: "Положення конкурсів",
  },
});

function RouteComponent() {
  return (
    <div className="content">
      <img
        src={asset("images/положення-конкурсів.jpg")}
        className="float-right mb-4 ml-4 w-100"
      />
      <ul>
        {data.map((v) => (
          <li key={v.url}>
            <ExternalLink href={v.url}>{v.text}</ExternalLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

const data = [];
