import { createFileRoute } from "@tanstack/react-router";
import { type SheetItem, Sheets } from "~/components/sheets";

export const Route = createFileRoute("/(main)/achievements/pupil")({
  component: RouteComponent,
  staticData: {
    title: "Досягнення учнів",
  },
});

const tabs: SheetItem[] = [
  {
    title: "Конкурси",
    items: [
      {
        title: "2025-2026 н.р.",
        sheetId: "1GvHQKoUzik74S9bAPm8SGpulrdIXs98sbRfXXI6XsSc",
      },
      {
        title: "2024-2025 н.р.",
        sheetId: "1pXrE-ifZETQSlwSbPmCGJEVle4ieUiT7HaiLc-yC5AA",
      },
      {
        title: "2023-2024 н.р.",
        sheetId: "1RwWBzRS695F9siBjATj8a4X_Nb90PMsjA60Ra_UeTcI",
      },
    ],
  },
  {
    title: "Олімпіади",
    sheetId: "1-z2L7wfjeEbSPKiN_d5wh6F1U1O_4NJ9tIHNbgCG58E",
  },
];

function RouteComponent() {
  return <Sheets items={tabs} />;
}
