import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "~/components/link";
import { asset } from "~/lib/utils";

export const Route = createFileRoute(
  "/educational-process/evaluation-criteria",
)({
  component: RouteComponent,
  staticData: {
    title: "Критерії оцінювання",
  },
});

function RouteComponent() {
  return (
    <div className="content">
      <img
        src={asset("images/критерії-оцінювання.jpg")}
        className="float-right w-140"
      />
      <div className="font-bold">
        Критерії оцінювання навчальних досягнень учнів 1-4 класів Нової
        української школи складені на основі:
      </div>
      <ul>
        <li>
          <ExternalLink href="https://zakon.rada.gov.ua/rada/show/v0813729-21">
            Наказу МОН України від 13.07.2021 № 813 "Про затвердження методичних
            рекомендацій щодо оцінювання результатів навчання учнів 1-4 класів
            закладів загальної середньої освіти"
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://docs.google.com/document/d/1ANGwhAFf6CpiFesWkTo25AL-CwfzLSz4/view">
            Критерії оцінювання результатів навчання учнів 1-4 класів КГ №55 КМР
          </ExternalLink>
        </li>
      </ul>
      <div className="font-bold">
        Критерії оцінювання навчальних досягнень учнів 5-9 класів складені на
        основі:
      </div>
      <ul>
        <li>
          <ExternalLink href="https://zakon.rada.gov.ua/rada/show/v1222729-13">
            Додатка №2 до наказу МОН України від 21.08.2013 №1222 "Про
            затвердження орієнтовних вимог оцінювання навчальних досягнень учнів
            із базових дисциплін у системі загальної середньої освіти"
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://drive.google.com/file/d/1jahFqZNj3NNlgROnuUnGbiZnqTw0hn-j/view">
            Наказа МОН України від 02.08.2024 № 1093 "Про затвердження
            рекомендацій щодо оцінювання результатів навчання"
          </ExternalLink>
        </li>
      </ul>
      <div className="font-bold">Загальні критерії оцінювання:</div>
      <ul>
        {items.map((v) => (
          <li key={v.url}>
            <ExternalLink href={v.url}>{v.title}</ExternalLink>
          </li>
        ))}
      </ul>
      <div className="font-bold">
        Критерії, правила і процедури оцінювання діяльності педпрацівників
        закладу
      </div>
      <ul>
        {items2.map((v) => (
          <li key={v.url}>
            <b>{v.preTitle}</b>{" "}
            <ExternalLink href={v.url}>{v.title}</ExternalLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

const items = [
  {
    title: "Загальні критерії оцінювання",
    url: "https://drive.google.com/file/d/1aJjznGhzSPqRUhsAQdmzKiOmo8RYD4iE/view",
  },
  {
    title: "Громадянська та історична освітня галузь",
    url: "https://drive.google.com/file/d/1dK9VJ8Sptv68EhtkXkIlM_8Sxt8otaY6/view",
  },
  {
    title: "Іноземна мова",
    url: "https://drive.google.com/file/d/11VfiEeezXLRkfUAmr1yASmysRKSfrgU7/view",
  },
  {
    title: "Інформативно освітня галузь",
    url: "https://drive.google.com/file/d/1_5KcAeRqdUQTEFk1zZTajCIrPxs9DtA4/view",
  },
  {
    title: "Математично освітня галузь",
    url: "https://drive.google.com/file/d/1SiI-mHfvl7uOqByJuwhFbH024hRsKuAp/view",
  },
  {
    title: "Мистецька освітня галузь",
    url: "https://drive.google.com/file/d/1Qbrm1pfhh2CE8ntExiI_FA9pdY98DCq-/view",
  },
  {
    title: "Мовно-літературна галузь",
    url: "https://drive.google.com/file/d/1lMCj5jIoQx52RahiuW_VyXD4c4W-DTZy/view",
  },
  {
    title: "Природнича освітня галузь",
    url: "https://drive.google.com/file/d/18FLZ0Be2hFN6S3PURbZBIqzm231_rlmd/view",
  },
  {
    title: "Соціальна та здоров'я збережувальна освітня галузь",
    url: "https://drive.google.com/file/d/1EYIun9HUYvBWj0FLzCblE2V4Q0-eqe0c/view",
  },
  {
    title: "Технологічна освітня галузь",
    url: "https://drive.google.com/file/d/15BGiqIioL8GQuVMnF-Y3fElayHMh5BYw/view",
  },
  {
    title: "Фізична культура",
    url: "https://drive.google.com/file/d/1iHQwbaF5RJpuVChM6W0VfJkG5hfZZwS-/view",
  },
];

const items2 = [
  {
    title: "ВИТЯГ З ПОЛОЖЕННЯ ПРО ВНУТРІШНЮ СИСТЕМУ ЗАБЕЗПЕЧЕННЯ ЯКОСТІ ОСВІТИ",
    url: "https://drive.google.com/file/d/1VGWQi3Tepak6ZjkJnjQ5bBtr0kF1_fC0/view",
  },
  {
    title: "Оцінювання педагогічної діяльності педагогічних працівників",
    url: "https://rada.info/upload/users_files/06670569/16042c4cf2879428fbccafd5898c9e81.docx",
  },
  {
    preTitle: "АТЕСТАЦІЯ ПЕДАГОГІЧНИХ ПРАЦІВНИКІВ",
    title:
      "(наказ МОН № 930 від 06.10.2010 р. «Про затвердження Типового положення про атестацію педагогічних працівників»)",
    url: "https://zakon.rada.gov.ua/laws/show/z1255-10",
  },
  {
    preTitle: "ПІДВИЩЕННЯ КВАЛІФІКАЦІЇ ПЕДПРАЦІВНИКІВ",
    title:
      "(наказ МОН №36 від 15.01.2018 р. «Про затвердження Типової освітньої програми організації і проведення підвищення кваліфікації педагогічних працівників закладами післядипломної педагогічної освіти»)",
    url: "https://zakon.rada.gov.ua/rada/show/v0036729-18",
  },
  {
    preTitle: "СЕРТИФІКАЦІЯ ПЕДАГОГІЧНИХ ПРАЦІВНИКІВ",
    title:
      "(Положення “Про сертифікацію педагогічних працівників”, затверджене постановою КМУ №1190 від 27.12.2018 р)",
    url: "https://zakon.rada.gov.ua/laws/show/1190-2018-%D0%BF.",
  },
  {
    preTitle: "ПРОФЕСІЙНИЙ СТАНДАРТ «ВЧИТЕЛЬ ПОЧАТКОВИХ КЛАСІВ ЗЗСО»",
    title:
      "(наказ міністерства соціальної політики України від 10.08.2018 р. №1143)",
    url: "https://zakon.rada.gov.ua/rada/show/v1143732-18",
  },
];
