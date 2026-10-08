import type { FC } from "react";
import { Tabs } from "~/components/tabs";
import { monthsGenitive, monthsNominative } from "~/lib/months";

export type ChronologyGroup<T extends object> = {
  date: string;
  items: ChronologyEntry<T>[];
};

export type ChronologyEntry<T extends object> = {
  text: string;
  items?: ChronologyEntry<T>[];
} & T;

type Props<T extends object> = {
  items: ChronologyGroup<T>[];
};

type ComponentsProps<T extends object> = {
  titleComponent: FC<{ date: string }>;
  itemsComponent: FC<{ items: ChronologyEntry<T>[] }>;
};

export function Chronology<T extends object>(
  props: Props<T> & ComponentsProps<T>,
) {
  const items = props.items.toReversed();
  return (
    <Tabs orientation="vertical" defaultValue={items[0].date}>
      {items.map((item) => (
        <Tabs.Tab
          key={item.date}
          title={<props.titleComponent date={item.date} />}
          id={item.date}
        >
          <props.itemsComponent items={item.items} />
        </Tabs.Tab>
      ))}
    </Tabs>
  );
}

export type Responsible = { responsible?: string };

export function MeetingsChronology(props: Props<Responsible>) {
  return (
    <div className="contents">
      <Chronology
        {...props}
        titleComponent={MeetingsTitle}
        itemsComponent={MeetingsItems}
      />
    </div>
  );
}

function MeetingsTitle(props: { date: string }) {
  const [day, month, year] = props.date.split(".").map(Number);

  let c = (
    <>
      <div className="w-8">{day}</div>
      <div className="w-24">{monthsGenitive[month - 1]}</div>
      <div className="w-8">{year}</div>
    </>
  );

  if (year === undefined)
    c = (
      <>
        <div>{monthsNominative[day - 1]}</div>
        <div>{month}</div>
      </>
    );

  return <div className="flex gap-1">{c}</div>;
}

function MeetingsItems(props: { items: ChronologyEntry<Responsible>[] }) {
  return (
    <ol className="list-counter ml-8">
      {props.items.map((v) => (
        <li key={v.text} className="mb-5">
          {v.text}
          <div className="text-right font-bold sm:text-left">
            {v.responsible}
          </div>
          {v.items && <MeetingsItems items={v.items} />}
        </li>
      ))}
    </ol>
  );
}
