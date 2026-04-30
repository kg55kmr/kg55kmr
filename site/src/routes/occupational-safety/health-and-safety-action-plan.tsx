import { createFileRoute } from "@tanstack/react-router";
import { Embed } from "~/components/embed";
import { Tabs } from "~/components/tabs";

export const Route = createFileRoute(
  "/occupational-safety/health-and-safety-action-plan",
)({
  component: RouteComponent,
  staticData: { title: "Плани заходів з безпеки та охорони праці" },
});

function RouteComponent() {
  return (
    <Tabs>
      <Tabs.Tab title="Комплексний план заходів" id="1">
        <h1 className="mb-5 text-center text-xl font-bold">
          Комплексний план заходів щодо запобігання виникненню надзвичайних
          ситуацій, пожежної та техногенної безпеки <br />в КГ №55 КМР в
          осінньо-зимовий період 2025/2026 н.р.
        </h1>

        <Embed src="https://drive.google.com/file/d/14i-kl2Cl8PnZ0AaYaa3EpObaArsQ8ZQE/preview" />
      </Tabs.Tab>
      <Tabs.Tab title="План заходів з безпеки та охорони праці" id="2">
        <h1 className="mb-5 text-center text-xl font-bold">
          План заходів з безпеки та охорони праці КГ №55 КМР на 2025-2026 н.р.
        </h1>
        <Embed src="https://drive.google.com/file/d/13vF0DyOE5cAwvBoF7uEwB2s13IvDXigq/preview" />
      </Tabs.Tab>
      <Tabs.Tab title="План заходів з безпеки та охорони праці" id="3">
        <h1 className="mb-5 text-center text-xl font-bold">
          План основних заходів із ТБ i БЖД, ЦЗ
        </h1>
        <Embed src="https://drive.google.com/file/d/1Ktn_FYEQ2O1od3tShWQ6UdrahbT0Wxb4/preview" />
      </Tabs.Tab>
    </Tabs>
  );
}

