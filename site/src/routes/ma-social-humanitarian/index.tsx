import { createFileRoute } from "@tanstack/react-router";
import { asset } from "~/lib/utils";

export const Route = createFileRoute("/ma-social-humanitarian/")({
  component: RouteComponent,
  staticData: {
    title: "Методична робота",
  },
});

function RouteComponent() {
  return (
    <div className="content">
      <img
        src={asset(
          "images/працівники/мо-вчителів-суспільно-гуманітарного-циклу.jpg",
        )}
        className="mx-auto w-180"
      />

      <p>
        <b>Науково-методична проблема закладу:</b>
        <br />
      </p>

      <p>
        <b>Завдання членам методичного об’єднання:</b>
      </p>
    </div>
  );
}
