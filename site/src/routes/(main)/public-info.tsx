import { createFileRoute } from "@tanstack/react-router";
import z from "zod";
import { publicInfo } from "~/data/public-info";
import { Reports } from "./-components/reports";

export const Route = createFileRoute("/(main)/public-info")({
  component: RouteComponent,
  validateSearch: z.object({ id: z.number().default(1) }),
  staticData: {
    title: "Прозорість та інформаційна відкритість",
  },
});

function RouteComponent() {
  const navigate = Route.useNavigate();
  const { id } = Route.useSearch();

  return (
    <Reports
      data={publicInfo}
      value={id.toString()}
      onValueChange={(v) => {
        navigate({
          search: { id: Number(v) },
          resetScroll: false,
        });
      }}
    />
  );
}
