import { createFileRoute } from "@tanstack/react-router";
import { LinksContent } from "~/components/teachers";

export const Route = createFileRoute(
  "/ma-primary/methodological-achievements/pupils-work",
)({
  component: RouteComponent,
  staticData: {
    title: "Учнівські роботи",
  },
});

const data: LinksContent = [
  {
    employee: "Довмат Ганна Василівна",
    items: [
      {
        title: "Робота учня 4-А класу Муравйова Олександра Що може звук",
        url: "https://drive.google.com/file/d/1wpEpeRuGNncdLIJSAKOTMt4GKwt7osiS/view",
      },
    ],
  },
  {
    employee: "Лисенко Олена Борисівна",
    items: [
      {
        title:
          "Практично-дослідний проект учениці 4-Б класу Король Арини на тему Таємниці кристалів",
        url: "https://drive.google.com/file/d/1DB8p9PTMz9iDV68ZIT8su9rmoC8gvLQF/view",
      },
      {
        title: "Тези на практично-дослідну роботу з теми «Таємниці кристалів»",
        url: "https://drive.google.com/file/d/1CFdNoLr6E6Z75fv7z6DVxo4qi29MJrqY/view",
      },
    ],
  },
  {
    employee: "Мугак Ніна Іванівна",
    items: [
      {
        title:
          "Екологічний проект учнів 2-А класу на тему Зимуючим птахам допомагаємо, бо добре серце маємо",
        url: "https://drive.google.com/file/d/1hRTyzxVzYpAM1VdYwTrknyy9gTo-c_ZA/view",
      },
    ],
  },
  {
    employee: "Старікова Наталя Анатоліївна",
    items: [
      {
        title: "Дослідницький проект учнів 4-Б класу",
        url: "https://drive.google.com/file/d/1Gh0voZVEzzc-XfcS8SDd4F_OQgzxqy87/view",
      },
      {
        title: "КЗШ №55, 4-Б клас, Мій найкращий клас",
        url: "https://www.youtube.com/watch?v=XQ2Ne9dSRwc",
      },
      {
        title: "Практично-дослідницький проект учня 4-А класу Харченка Дмитра",
        url: "https://drive.google.com/file/d/1mhUU0MlW95uyJC-Sp1Wi7cMdBQbAAmNs/view",
      },
      {
        title:
          "Робота учня 4-Б класу Буйневича Тимофія на тему Північний льодовитий океан",
        url: "https://drive.google.com/file/d/1j89p6tKJVGl-gweHFYjka4iO1OYbAG7n/view",
      },
      {
        title: "Роботи учнів 4-Б класу",
        url: "https://drive.google.com/file/d/1o88XHS95C5QZPmlbAYX-HMdxFBVTKeV8/view",
      },
    ],
  },
];

function RouteComponent() {
  return <LinksContent data={data} />;
}
