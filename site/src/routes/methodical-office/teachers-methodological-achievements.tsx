import { createFileRoute } from "@tanstack/react-router";
import { Sheet } from "~/components/sheets";

export const Route = createFileRoute(
  "/methodical-office/teachers-methodological-achievements",
)({
  component: RouteComponent,
  staticData: {
    title: "Методичні надбання вчителів",
  },
});

function RouteComponent() {
  return <Sheet sheetId="1dF9-pIs8dAVfxsL4BkVyz9s1ZHUTOq1WyRduEPS-r7E" />;
}
