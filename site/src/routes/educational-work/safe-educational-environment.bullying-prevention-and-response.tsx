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

function RouteComponent() {
  return (
    <div className="content">
      <ul>
        <li>
          <ExternalLink href="https://drive.google.com/file/d/1s_yen3VjMJ10bid-07MygswJebe6kBbn/view">
            Положення про запобігання і протидію насильству та жорстокому
            поводженню з дітьми
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://drive.google.com/file/d/1EpfHUNfyDTL4QlIP5FsHpkylD6qRQQ1j/view">
            Щодо впровадження в закладі заходів спрямованих на запобігання та
            протидію булінгу
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://drive.google.com/file/d/1wjy8ugpCRuLuZ5HEojj06Dg_RGWJZlN4/view">
            Правила поведінки здобувачів освіти у КГ №55 КМР
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://drive.google.com/file/d/1ETRbZOmT6TQ9qs-g292jxVBgfUFjiDsd/view">
            План заходів, спрямованих на запобігання та протидію булінгу
            (цькуванню) в КГ №55 КМР
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://drive.google.com/file/d/1hIx9yBrFoV2MFYyJ3QObu1O2keKPJ6QT/view">
            Порядок подання та розгляду (з дотриманням конфіденційності) заяв
            про випадки булінгу (цькуванню) в закладі освіти
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://drive.google.com/file/d/1GfQEehKmX6or04AJQALIT1E1iVkSTIwr/view">
            Порядок реагування на доведені випадки булінгу (цькуванню) в закладі
            освіти та відповідальність осіб, причетних до булінгу (цькуванню)
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://drive.google.com/file/d/1PrCmOcfCVmFFNDTablKC4CPHaaaWKoDa/view">
            Зразок заяви про випадки булінгу (цькуванню)
          </ExternalLink>
        </li>
      </ul>
    </div>
  );
}

