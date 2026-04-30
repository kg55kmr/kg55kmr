import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "~/components/link";
import { academicYear } from "~/data/common";
import { asset } from "~/lib/utils";

export const Route = createFileRoute("/educational-process/work-plan")({
  component: RouteComponent,
  staticData: {
    title: "Робочий навчальний план",
  },
});

function RouteComponent() {
  return (
    <div className="content">
      <p>
        Робочий навчальний план 1-9 класів на {academicYear.toSlash} навчальний
        рік розроблено відповідно до Постанови Кабінету Міністрів України від
        21.02.2018 №87 «Про затвердження Державного стандарту початкової
        освіти», наказів та листів Міністерства освіти і науки України, а саме:
      </p>
      <ul>
        <li>
          <b>для 1-2 класів</b> – за Типовою освітньою програмою для 1-2 класів
          закладів загальної середньої освіти (розроблена під керівництвом
          Савченко О. Я.), затвердженою наказом МОН України від 08.10.2019 №1272
        </li>
        <li>
          <b>для 3-4 класів</b> – за Типовою освітньою програмою для 3-4 класів
          закладів загальної середньої освіти (розроблена під керівництвом
          Савченко О. Я.), затвердженою наказом МОН України від 08.10.2019 №1273
        </li>
        <li>
          <b>для 5-8 класів</b> - за Типовою освітньою програмою для 5-9 класів
          закладів загальної середньої освіти , затвердженою за наказом МОН
          України від 19.02.2021 № 235
        </li>
        <li>
          <b>для 9 класів</b> - за Типовою освітньою програмою закладів
          загальної середньої освіти ІІ ступеня, затвердженою за наказом МОН
          України від 20.04.2018 № 405
        </li>
      </ul>
      <p>
        Повноцінність загальної освіти забезпечується реалізацією як
        інваріантної так і варіативної частини навчального плану. Інваріантна
        частина навчального плану відповідає загальним вимогам Типових
        навчальних планів.
      </p>

      <div className="content flex flex-col flex-wrap items-center sm:flex-row">
        <img
          src={asset("images/робочий-навчальний-план.jpg")}
          className="h-40"
        />
        <ul>
          {plans.map((v) => (
            <li key={v.url}>
              <ExternalLink href={v.url}>
                Робочий навчальний план {v.class} класів
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
      <h1>Структура навчального року</h1>
      <p>
        Навчальний рік розпочинається <b>1 вересня {academicYear.start} року</b>
        . Заняття проводяться за семестровою системою, орієнтовно у такі
        терміни:
      </p>
      <table className="">
        <tbody>
          <tr>
            <td className="pl-5 text-right">
              <b>І семестр</b>:
            </td>
            <td className="pl-2">
              {formatDate(semesters[0].start)} - {formatDate(semesters[0].end)}
            </td>
          </tr>
          <tr>
            <td className="text-right">
              <b>ІІ семестр</b>:
            </td>
            <td className="pl-2">
              {formatDate(semesters[1].start)} - {formatDate(semesters[1].end)}
            </td>
          </tr>
        </tbody>
      </table>
      <p>Канікули:</p>
      <table>
        <tbody>
          <tr>
            <td className="pl-5 text-right">
              <b>Осінні</b>:
            </td>
            <td className="pl-2">
              {formatDate(vacation[0].start)} - {formatDate(vacation[0].end)}
            </td>
          </tr>
          <tr>
            <td className="text-right">
              <b>Зимові</b>:
            </td>
            <td className="pl-2">
              {formatDate(vacation[1].start)} - {formatDate(vacation[1].end)}
            </td>
          </tr>
          <tr>
            <td className="text-right">
              <b>Весняні</b>:
            </td>
            <td className="pl-2">
              {formatDate(vacation[2].start)} - {formatDate(vacation[2].end)}
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Навчальні заняття організуються за семестровою системою. Завершуються
        орієнтовно <b>29 травня {academicYear.end} року</b>.
      </p>
    </div>
  );
}

const plans = [
  {
    class: "1-4",
    url: "https://drive.google.com/file/d/1WPdhIlMG2vOPImZxnThgwpejTT36EwPI/view",
  },
  {
    class: "5-7",
    url: "https://drive.google.com/file/d/1urz9ndd4WLkljXF7MabvMdL2XM3OOzUS/view",
  },
  {
    class: "8",
    url: "https://drive.google.com/file/d/1__8AiTkuxwQubEn3OkPej-RDWE_l5_CW/view",
  },
  {
    class: "9",
    url: "https://drive.google.com/file/d/1x5GvwVfSwrqV_PdGcGUEnpBho198LTJI/view",
  },
];

const semesters = [
  { start: [1, 9, academicYear.start], end: [24, 12, academicYear.start] },
  { start: [12, 1, academicYear.end], end: [29, 5, academicYear.end] },
];

const vacation = [
  {
    start: [27, 10, academicYear.start],
    end: [2, 11, academicYear.start],
  },
  {
    start: [29, 12, academicYear.start],
    end: [11, 1, academicYear.end],
  },
  {
    start: [23, 3, academicYear.end],
    end: [29, 3, academicYear.end],
  },
];

function formatDate(components: number[]) {
  const day = components[0].toString().padStart(2, "0");
  const month = components[1].toString().padStart(2, "0");
  const year = components[2];
  return `${day}.${month}.${year}`;
}
