import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";
import { Tabs } from "~/components/tabs";

export const Route = createFileRoute("/educational-work/annual-summary")({
  component: RouteComponent,
  staticData: {
    title: "Підсумки виховної роботи за рік",
  },
});

const data = [
  {
    years: "2024-2025",
    url: "https://drive.google.com/file/d/1zX2hdLk37z8KF_Gv1_FepzZbl5vc32e1/preview",
  },
  {
    years: "2023-2024",
    url: "https://drive.google.com/file/d/1Pc9ZiNL7loxXLVG0MZoqFsWMcvKtwsmJ/preview",
  },
  {
    years: "2022-2023",
    url: "https://drive.google.com/file/d/1VfzYz_3pA4sazNtrYm90bN64hKIws9hY/preview",
  },
  {
    years: "2021-2022",
    url: "https://drive.google.com/file/d/1fbFKZT6ca3ZlGeu33lYINn2EiKtvct18/preview",
  },
  {
    years: "2020-2021",
    url: "https://drive.google.com/file/d/1E4YFM1c4GI23hgr-MvpiK-u12DNh_phq/preview",
  },
  {
    years: "2019-2020",
    url: "https://drive.google.com/file/d/1tEda5k1OfwtaSv6MCXoilhMPLT9xFqzN/preview",
  },
];

function RouteComponent() {
  return (
    <Tabs orientation="vertical" defaultValue={data[0].years}>
      {data.map((v) => (
        <Tabs.Tab key={v.years} title={v.years} id={v.years}>
          <Embed src={v.url} />
        </Tabs.Tab>
      ))}
    </Tabs>
  );
}
