import type { TimelineItem, TimelineType } from "~/components/timeline";
import { createFileRoute } from "@tanstack/react-router";
import { Timeline } from "~/components/timeline";
import { academicYear } from "~/data/common";
import { cn } from "~/lib/utils";

export const Route = createFileRoute(
  "/parent-forum/preparing-5-year-olds-for-school",
)({
  component: RouteComponent,
  staticData: {
    title: "Організація роботи по підготовці дітей 5-річного віку до навчання",
  },
});

function RouteComponent() {
  return (
    <Timeline items={data} titleComponent={Title} itemsComponent={Items} />
  );
}

function Title(props: { date: string }) {
  const titles = props.date.split(";");
  return (
    <div className="flex w-full flex-col">
      {titles.map((date) => (
        <div key={date} className="text-right">
          {date}
        </div>
      ))}
    </div>
  );
}

function Items(props: { items: TimelineItem<object>[]; dot?: boolean }) {
  const List = props.dot ? "ul" : "ol";
  return (
    <List className={cn("ml-8", props.dot ? "list-disc" : "list-decimal")}>
      {props.items.map((v) => (
        <li key={v.text}>
          {v.text}
          {v.items && <Items items={v.items} dot />}
        </li>
      ))}
    </List>
  );
}

const data: TimelineType<object>[] = [
  {
    date: `Вересень ${academicYear.start}`,
    items: [
      { text: "Оформлення куточка майбутнього першокласника" },
      {
        text: "Ознайомлення з листом Міністерства освіти та науки, молоді та спорту України «Дай руку, першокласнику!»",
      },
      {
        text: "Консультації вчителя початкових класів для батьків дітей 5-річного віку",
      },
    ],
  },
  {
    date: `Серпень - Вересень ${academicYear.start}`,
    items: [
      {
        text: "Складання та затвердження спільного плану з наступності школи І ступеня із дитсадками",
      },
      {
        text: "Створення бази даних 5-річок мікрорайону школи , які не відвідують дошкільні навчальні заклади",
      },
    ],
  },
  {
    date: `Вересень, Жовтень ${academicYear.start}; Квітень, Травень ${academicYear.end}`,
    items: [
      {
        text: "Участь майбутніх першокласників та їх батьків у святах школи:",
        items: [
          { text: "Свято Першого дзвоника" },
          { text: "«Прощання з букварем»" },
          { text: "Свято Останнього дзвоника" },
        ],
      },
    ],
  },
  {
    date: `Жовтень ${academicYear.start}; Квітень ${academicYear.end}`,
    items: [
      {
        text: "Організація дошкільного навчання для майбутніх першокласників, які не відвідують дошкільних навчальних закладів",
      },
    ],
  },
  {
    date: `Березень ${academicYear.end}`,
    items: [{ text: "Загальні збори з батьками майбутніх першокласників" }],
  },
];
