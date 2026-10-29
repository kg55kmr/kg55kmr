import { createFileRoute } from "@tanstack/react-router";
import { employees } from "~/data/employees";
import { useStickyOffset } from "~/hooks/use-sticky";
import { asset } from "~/lib/utils";

export const Route = createFileRoute("/(main)/staff")({
  component: RouteComponent,
  staticData: {
    title: "Колектив гімназії",
  },
});

function RouteComponent() {
  const offset = useStickyOffset();
  return (
    <>
      <div className="content mb-10">
        <img
          src={asset("images/працівники/загальне-фото.jpg")}
          className="mx-auto mb-4 w-170"
        />
        <p className="font-bold">
          Гімназія будує кадрову політику таким чином, щоб кожен учасник
          навчального процесу відчував себе дієвою частиною спільної справи. Для
          нас важливо, аби працівники розуміли, що від результатів їхної роботи
          залежить успіх та рух гімназії вперед. Ми зацікавлені в тому, щоб у
          нас працювали професіонали.
        </p>
      </div>
      <div className="flex flex-col gap-10">
        {employees.teachingStaff.map((c) => (
          <div
            key={c.name}
            id={c.anchor?.id}
            style={{ scrollMarginTop: `${offset}px` }}
          >
            <h1 className="font-philosopher -mx-(--main-offset) mb-4 border-y border-slate-500 bg-slate-100 py-1 text-center text-4xl">
              {c.name}
            </h1>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] justify-items-center gap-5">
              {c.positions.map((e) => (
                <div key={e.name} className="flex flex-col text-center">
                  <img src={e.image} className="h-60 self-center rounded-xl" />
                  <div className="font-bold">{e.name}</div>
                  <div>{e.postPrint}</div>
                  {e.category && <div>{e.category}</div>}
                  {e.title && <div>{e.title}</div>}
                  {/* FIXME: blog */}
                  {/* {e.blog && (
                    <div className="flex items-center gap-1">
                      <ExternalLink href={e.blog}>
                        Блог вчителя <EL />
                      </ExternalLink>
                    </div>
                  )} */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
