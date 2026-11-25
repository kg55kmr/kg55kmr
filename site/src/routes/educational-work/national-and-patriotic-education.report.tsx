import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";
import { Tabs } from "~/components/tabs";

export const Route = createFileRoute(
  "/educational-work/national-and-patriotic-education/report",
)({
  component: RouteComponent,
  staticData: {
    title: "Звіт з національно-патріотичного виховання",
    shortTitle: "Звіт",
  },
});

const items = [
  {
    year: 2026,
    quarter: "III",
    url: "https://drive.google.com/file/d/1ijXGHTNB_bThYq_DnZC1U_51cfvvtVPA/preview",
  },
  {
    year: 2026,
    quarter: "II",
    url: "https://drive.google.com/file/d/1H_lE6F9oQ2CitShv7oISI5Wo0qGOe34r/preview",
  },
  {
    year: 2026,
    quarter: "I",
    url: "https://drive.google.com/file/d/1QewAw7lZ9oXr1Us7R0nuMcFwlBef6MPh/preview",
  },
];

function RouteComponent() {
  return (
    <Tabs orientation="vertical" defaultValue={"0"}>
      {items.map((v, i) => (
        <Tabs.Tab
          key={v.url}
          title={`${v.year} (${v.quarter} квартал)`}
          value={i.toString()}
        >
          <Embed src={v.url} />
        </Tabs.Tab>
      ))}
    </Tabs>
  );
}
