import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "~/components/link";
import { employees } from "~/data/employees";

export const Route = createFileRoute("/(main)/administration")({
  component: RouteComponent,
  staticData: {
    title: "Адміністрація",
  },
});

function RouteComponent() {
  return (
    <div className="font-roboto-condensed grid justify-items-center gap-y-15 md:grid-cols-2">
      {employees.admin().map((e) => (
        <div key={e.image} className="w-55 text-center">
          <img src={e.image} className="w-full" />
          <div className="font-bold text-blue-700">{e.name}</div>
          {e.rank && <div className="font-bold">{e.rank}</div>}
          <span className="">e-mail:</span>
          <ExternalLink href="mailto:kg55kmr@ukr.net">
            kg55kmr@ukr.net
          </ExternalLink>
        </div>
      ))}
    </div>
  );
}
