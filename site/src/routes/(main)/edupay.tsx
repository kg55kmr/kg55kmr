import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(main)/edupay")({
  component: RouteComponent,
  staticData: { title: "Благодійні внески платежного сервісу EDUPAY" },
});

// TODO: remove?

function RouteComponent() {
  return (
    <>
      <p>
        <b>
          Реквізити для оплати благодійних внесків платіжного сервісу EDUPAY:
        </b>
      </p>
      <p>
        ЄДРПОУ 02142307
        <br />
        МФО 805012
        <br />
        банк – ГУ ДКСУ у Дніпропетровській області
        <br />
        р/р для КЗШ та КНВК – 31554303252326
      </p>
    </>
  );
}
