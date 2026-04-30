import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Suspense, useState } from "react";
import z from "zod";
import { ExternalLink } from "~/components/link";
import { Loader } from "~/components/loader";
import { Responsive } from "~/components/responsive";
import { Tabs } from "~/components/tabs";

export const Route = createFileRoute("/(main)/informant-letters")({
  component: RouteComponent,
  staticData: {
    title: "Листи-інформатори",
  },
});

// TODO: better preview handling
function RouteComponent() {
  const years = [2026, 2025, 2024, 2023];
  const [year, setYear] = useState(years[0]);

  return (
    <Tabs
      value={year.toString()}
      onValueChange={(v) => setYear(Number.parseInt(v))}
    >
      {years.map((year) => (
        <Tabs.Tab key={year} title={year.toString()} id={year.toString()}>
          <div className="grid gap-20 lg:grid-cols-2">
            <Suspense fallback={<Loader className="min-h-120" />}>
              <Section title="Відділ освіти" id="ternvo" year={year} />
            </Suspense>
            <Suspense fallback={<Loader className="min-h-120" />}>
              <Section title={`КУ "ЦПРІОТС" КМР`} id="kzimc" year={year} />
            </Suspense>
          </div>
        </Tabs.Tab>
      ))}
    </Tabs>
  );
}

function Section(props: { title: string; id: type; year: number }) {
  const items = useInformantLetters(props.id, props.year).map((item) => {
    const [num, , date] = item.id.split(" ");
    const letter = item.items[0];
    const apps = item.items.length > 1 ? item.items[1] : null;
    return {
      num: num.slice(1),
      date,
      letter,
      apps,
    };
  });

  return (
    <div>
      <h1 className="mb-4 border border-green-500 bg-green-200 py-2 text-center text-2xl font-bold">
        {props.title}
      </h1>
      <table className="table-responsive">
        <thead>
          <tr className="text-center">
            <th>Номер</th>
            <th>Дата</th>
            <th>Лист-інформатор</th>
            <th>Додатки</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={`${item.num}${item.date}`} className="text-center">
              <td>№{item.num}</td>
              <td>{item.date}</td>
              <td>
                <ExternalLink href={item.letter.sharedLink}>
                  <Responsive
                    when="sm"
                    render="посилання"
                    fallback={"лист-інформатор"}
                  />
                </ExternalLink>
              </td>
              <td>
                {item.apps && (
                  <ExternalLink href={item.apps.sharedLink}>
                    <Responsive
                      when="sm"
                      render="посилання"
                      fallback={"додатки"}
                    />
                  </ExternalLink>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function useInformantLetters(id: type, selectedYear: number) {
  return useSuspenseQuery({
    queryKey: ["informant-letters", id, selectedYear],
    queryFn: () =>
      fetch(
        `https://informant-letters.kg55kmr.vercel.app/${id}/${selectedYear}.json`,
      )
        .then((r) => r.json())
        .then(schema.parse),
  }).data;
}

const schema = z
  .object({
    id: z.string(),
    items: z.object({ name: z.string(), sharedLink: z.string() }).array(),
  })
  .array();

type type = "kzimc" | "ternvo";
