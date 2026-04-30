import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink as EL } from "lucide-react";
import { ExternalLink } from "~/components/link";
import { employees } from "~/data/employees";
import { asset } from "~/lib/utils";

export const Route = createFileRoute("/(main)/teaching-staff")({
  component: RouteComponent,
  staticData: {
    title: "Педагогічні працівники",
  },
});

function RouteComponent() {
  return (
    <>
      <div className="mb-15">
        <img
          src={asset("images/працівники/загальне-фото.jpg")}
          className="mx-auto my-4 w-170"
        />
        <p className="font-bold">
          Гімназія будує кадрову політику таким чином, щоб кожен учасник
          навчального процесу відчував себе дієвою частиною спільної справи. Для
          нас важливо, аби працівники розуміли, що від результатів їхної роботи
          залежить успіх та рух гімназії вперед. Ми зацікавлені в тому, щоб у
          нас працювали професіонали.
        </p>
      </div>
      <div className="grid md:grid-cols-2">
        {employees.teachingStaff().map((v) => (
          <div key={v.name} className="flex flex-col items-center pb-9">
            <img src={v.image} className="w-48" />
            <div className="font-bold">{v.name}</div>
            <div>{v.post}</div>
            {v.rank && <div>{v.rank}</div>}
            {v.blog && (
              <ExternalLink href={v.blog}>
                <div className="flex items-center gap-1">
                  Блог вчителя <EL />
                </div>
              </ExternalLink>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
