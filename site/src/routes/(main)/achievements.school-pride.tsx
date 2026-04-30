import { createFileRoute } from "@tanstack/react-router";
import { Fragment } from "react/jsx-runtime";
import { Tabs } from "~/components/tabs";
import { data as medalists } from "~/data/achievements/medalists";
import { data as honor } from "~/data/achievements/school-pride-honor";

export const Route = createFileRoute("/(main)/achievements/school-pride")({
  component: RouteComponent,
  staticData: {
    title: "Гордість гімназії",
  },
});

function RouteComponent() {
  return (
    <Tabs defaultValue={category[0].title}>
      {category.map((c) => (
        <Tabs.Tab key={c.title} title={c.title} id={c.title}>
          {c.component}
        </Tabs.Tab>
      ))}
    </Tabs>
  );
}

function Honor() {
  return (
    <Tabs defaultValue={honor[0].k}>
      {honor.map((years) => (
        <Tabs.Tab key={years.k} title={years.k} id={years.k}>
          <Tabs defaultValue={years.v.items[0].title}>
            {years.v.items.map((item) => (
              <Tabs.Tab key={item.title} title={item.title} id={item.title}>
                <ul className="ml-4 list-disc">
                  {item.items.map((v) => (
                    <li key={v}>{v}</li>
                  ))}
                </ul>
              </Tabs.Tab>
            ))}
          </Tabs>
        </Tabs.Tab>
      ))}
    </Tabs>
  );
}

function Medalists() {
  return (
    <Tabs defaultValue={medalists[0].title.toString()}>
      {medalists.map((year) => (
        <Tabs.Tab
          key={year.title}
          title={year.title}
          id={year.title.toString()}
        >
          {year.items.map((item) => (
            <Fragment key={item.title}>
              <h1 className="my-4 text-center font-bold">{item.title}</h1>
              <ul className="ml-4 list-disc">
                {item.items.map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
            </Fragment>
          ))}
        </Tabs.Tab>
      ))}
    </Tabs>
  );
}

const category = [
  { title: "Наші відмінники", component: <Honor /> },
  { title: "Медалісти", component: <Medalists /> },
];
