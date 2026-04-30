import type { FC } from "react";
import { Tabs } from "~/components/tabs";

export type TimelineType<T extends object> = {
  date: string;
  items: TimelineItem<T>[];
};

export type TimelineItem<T extends object> = {
  text: string;
  items?: TimelineItem<T>[];
} & T;

type Props<T extends object> = {
  items: TimelineType<T>[];
};

type ComponentsProps<T extends object> = {
  titleComponent: FC<{ date: string }>;
  itemsComponent: FC<{ items: TimelineItem<T>[] }>;
};

export function Timeline<T extends object>(
  props: Props<T> & ComponentsProps<T>,
) {
  return (
    <Tabs
      orientation="vertical"
      defaultValue={props.items[0].date}
      listClassName="grid grid-cols-[repeat(var(--cols-count),auto)] self-start"
    >
      {props.items.map((item) => (
        <Tabs.Tab
          key={item.date}
          title={<props.titleComponent date={item.date} />}
          id={item.date}
          className="col-span-full grid grid-cols-subgrid gap-5"
        >
          <props.itemsComponent items={item.items} />
        </Tabs.Tab>
      ))}
    </Tabs>
  );
}

export type Responsible = { responsible?: string };

export function MeetingsTimeline(
  props: Props<Responsible> & { itemComponents?: number },
) {
  return (
    <div
      style={{ "--cols-count": props.itemComponents ?? 3 }}
      className="contents"
    >
      <Timeline
        {...props}
        titleComponent={MeetingsTitle}
        itemsComponent={MeetingsItems}
      />
    </div>
  );
}

function MeetingsTitle(props: { date: string }) {
  const [number, month, year] = props.date.split(" ");

  return (
    <>
      <div>{number}</div>
      <div>{month}</div>
      {year && <div>{year}</div>}
    </>
  );
}

function MeetingsItems(props: { items: TimelineItem<Responsible>[] }) {
  return (
    <ol className="list-counter ml-8">
      {props.items.map((v) => (
        <li key={v.text}>
          {v.text}
          <div className="font-bold">{v.responsible}</div>
          {v.items && <MeetingsItems items={v.items} />}
        </li>
      ))}
    </ol>
  );
}
