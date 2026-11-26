import { createFileRoute } from "@tanstack/react-router";
import { asset } from "~/lib/utils";

export const Route = createFileRoute("/educational-work/ca-primrose/structure")(
  {
    component: RouteComponent,
    staticData: {
      title: "Структура та девіз",
    },
  },
);

function RouteComponent() {
  return (
    <img
      src={asset("images/первоцвіт/структура-та-девіз.jpg")}
      className="mx-auto w-200"
    />
  );
}
