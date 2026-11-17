import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "~/components/link";

export const Route = createFileRoute(
  "/educational-work/safe-educational-environment/bullying-prevention-and-response",
)({
  component: RouteComponent,
  staticData: {
    title: "Запобігання та протидія булінгу",
  },
});

const documents = [
  {
    title:
      "Положення про запобігання і протидію насильству та жорстокому поводженню з дітьми",
    url: "https://drive.google.com/file/d/1s_yen3VjMJ10bid-07MygswJebe6kBbn/view",
  },
  {
    title:
      "Щодо впровадження в закладі заходів спрямованих на запобігання та протидію булінгу",
    url: "https://drive.google.com/file/d/1EpfHUNfyDTL4QlIP5FsHpkylD6qRQQ1j/view",
  },
  {
    title: "Правила поведінки здобувачів освіти у КГ №55 КМР",
    url: "https://drive.google.com/file/d/1wjy8ugpCRuLuZ5HEojj06Dg_RGWJZlN4/view",
  },
  {
    title:
      "План заходів, спрямованих на запобігання та протидію булінгу (цькуванню) в КГ №55 КМР",
    url: "https://drive.google.com/file/d/1ETRbZOmT6TQ9qs-g292jxVBgfUFjiDsd/view",
  },
  {
    title:
      "Порядок подання та розгляду (з дотриманням конфіденційності) заяв про випадки булінгу (цькуванню) в закладі освіти",
    url: "https://drive.google.com/file/d/1hIx9yBrFoV2MFYyJ3QObu1O2keKPJ6QT/view",
  },
  {
    title:
      "Порядок реагування на доведені випадки булінгу (цькуванню) в закладі освіти та відповідальність осіб, причетних до булінгу (цькуванню)",
    url: "https://drive.google.com/file/d/1GfQEehKmX6or04AJQALIT1E1iVkSTIwr/view",
  },
  {
    title: "Порядок дій щодо запобігання і протидії булінгу в закладі освіти",
    url: "https://drive.google.com/file/d/1ygfzK4R5x81BSJpPguu9oWJ0oEkH0oj6/view",
  },
  {
    title: "Порядок у разі вчинення учнями правопорушень та злочинів",
    url: "https://drive.google.com/file/d/177PoqdyhdI5Io1ew0EzrBg-KklMnnSp5/view",
  },
  {
    title: "Зразок заяви про випадки булінгу (цькуванню)",
    url: "https://drive.google.com/file/d/1PrCmOcfCVmFFNDTablKC4CPHaaaWKoDa/view",
  },
];

function RouteComponent() {
  return (
    <div className="content">
      <ul>
        {documents.map((d) => (
          <li key={d.url}>
            <ExternalLink href={d.url}>{d.title}</ExternalLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

