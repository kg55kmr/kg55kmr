import type { InferFilename } from "~/lib/utils";
import { createFileRoute } from "@tanstack/react-router";
import { dirAsset } from "~/lib/utils";

export const Route = createFileRoute("/(main)/graduates")({
  component: RouteComponent,
  staticData: {
    title: "Відомі випускники",
  },
});

function RouteComponent() {
  return (
    <div className="sm:columns-2">
      {graduates.map((graduate) => (
        <div
          key={graduate.name}
          className="grid items-center gap-x-3 sm:grid-cols-[auto_1fr]"
        >
          <img src={photoAsset(graduate.image)} className="mx-auto h-50" />
          <div>
            <div className="text-center font-bold sm:text-left">
              {graduate.name}
            </div>
            <div>{graduate.info}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

type Graduate = {
  name: string;
  info: string;
  image: InferFilename<typeof photoAsset>;
};

const photoAsset = dirAsset("images/відомі-випускники/");

const graduates: Graduate[] = [
  {
    name: "Горевич Сергій Олександрович",
    info: "Випускник 1983 року. Начальник відділу освіти виконкому Тернівської районної у місті ради",
    image: "горевич.webp",
  },
  {
    name: "Фєдін Олександр Валерійович",
    info: "Випускник 1983 року. Начальник державної інспекції по надзору в гірничо-добувній та хімічній промисловості",
    image: "федін.webp",
  },
  {
    name: "Наумов Олександр Семенович",
    info: "Випускник 1975 року Директор Дніпропетровського відділення Приватбанку",
    image: "наумов.webp",
  },
  {
    name: "Литвинова Тетяна Валеріївна",
    info: "Випускниця 1989 року Доцент кафедри педіатрії, лікар ЦПМСД №2",
    image: "литвинова.webp",
  },
  {
    name: "Колєсніков Дмитро Валерійович",
    info: "Випускник 1989 року Народний депутат України 6-го скликання Голова Дніпропетровської обласної державної адміністрації (2012-2014р.)",
    image: "колєсніков.webp",
  },
  {
    name: "Качан Руслан Васильович",
    info: "Випускник 1986 року Начальник відділу внутрішнього аудиту апарату міської ради і виконкому",
    image: "качан.webp",
  },
  {
    name: "Дьоміна Олена Іванівна",
    info: "Випускниця 1975 року Директор Криворізької загальноосвітньої школи І-ІІІ ступенів № 78",
    image: "дьоміна.webp",
  },
  {
    name: "Дармостук Андрій Станіславович",
    info: "Випускник 1991 року Заступник виконавчого директора Московської будівельної компанії",
    image: "дармостук-а.webp",
  },
  {
    name: "Амброзяк Володимир Дмитрович",
    info: "Випускник 1988 року Генеральний директор Криворізької універсальної товарної біржі",
    image: "амброзяк.webp",
  },
  {
    name: "Дармостук Леонід Станіславович",
    info: "Випускник 1985 року Ведучий саксафоніст джазового оркестру «Фонограф»",
    image: "дармостук-л.webp",
  },
  {
    name: "Чирка Назар Юрійович",
    info: "Випускник 1997 року Директор Криворізького академічного міського театру драми та музичної комедії імені Тараса Шевченка",
    image: "чирка.webp",
  },
];
