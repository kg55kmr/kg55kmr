import { createFileRoute } from "@tanstack/react-router";
import z from "zod";
import { ImageKitGallery } from "~/components/gallery";
import { Tabs } from "~/components/tabs";

export const Route = createFileRoute("/educational-work/safety-class")({
  component: RouteComponent,
  validateSearch: z.object({ id: z.string().default("fire-safety") }),
  staticData: {
    title: "Клас безпеки",
  },
});

const data = {
  "fire-safety": { title: "Пожежна безпека", component: <FireSafety /> },
  "life-safety": {
    title: "Безпека життєдіяльності",
    component: <LifeSafety />,
  },
  "pre-medical-care": {
    title: "Домедична допомога",
    component: <PreMedicalCare />,
  },
  "mine-safety": { title: "Мінна безпека", component: <MineSafety /> },
};

function RouteComponent() {
  const { id } = Route.useSearch();
  const navigate = Route.useNavigate();

  return (
    <Tabs
      value={id}
      onValueChange={(id) =>
        navigate({ search: { id }, resetScroll: false, replace: true })
      }
    >
      {Object.entries(data).map(([k, v]) => (
        <Tabs.Tab key={k} title={v.title} id={k}>
          {v.component}
        </Tabs.Tab>
      ))}
    </Tabs>
  );
}

function FireSafety() {
  return <ImageKitGallery path="educational-work/safety-class/fire-safety" />;
}

function LifeSafety() {
  return <ImageKitGallery path="educational-work/safety-class/life-safety" />;
}

function PreMedicalCare() {
  return (
    <ImageKitGallery path="educational-work/safety-class/pre-medical-care" />
  );
}

function MineSafety() {
  return <ImageKitGallery path="educational-work/safety-class/mine-safety" />;
}
