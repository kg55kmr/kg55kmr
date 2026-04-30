import { Accordion } from "~/components/accordion";
import { Embed } from "~/components/embed";

const items = [
  {
    title:
      "Положення про запобігання і протидію насильству та жорстокому поводженню з дітьми",
    href: "https://drive.google.com/file/d/1s_yen3VjMJ10bid-07MygswJebe6kBbn/preview",
  },
  {
    title:
      "Щодо впровадження в закладі заходів спрямованих на запобігання та протидію булінгу",
    href: "https://drive.google.com/file/d/1EpfHUNfyDTL4QlIP5FsHpkylD6qRQQ1j/preview",
  },
  {
    title: "Правила поведінки здобувачів освіти в КГ №55 КМР",
    href: "https://drive.google.com/file/d/1wjy8ugpCRuLuZ5HEojj06Dg_RGWJZlN4/preview",
  },
  {
    title:
      "План заходів, спрямованих на запобігання та протидію булінгу (цькуванню) в КГ №55 КМР",
    href: "https://drive.google.com/file/d/1ETRbZOmT6TQ9qs-g292jxVBgfUFjiDsd/preview",
  },
  {
    title:
      "Порядок подання та розгляду (з дотриманням конфіденційності) заяв про випадки булінгу (цькуванню) в закладі освіти",
    href: "https://drive.google.com/file/d/1hIx9yBrFoV2MFYyJ3QObu1O2keKPJ6QT/preview",
  },
  {
    title:
      "Порядок реагування на доведені випадки булінгу (цькування) в закладі освіти та відповідальність осіб, причетних до булінгу (цькуванню)",
    href: "https://drive.google.com/file/d/1GfQEehKmX6or04AJQALIT1E1iVkSTIwr/preview",
  },
  {
    title: "Зразок заяви про випадки булінгу (цькуванню)",
    href: "https://drive.google.com/file/d/1PrCmOcfCVmFFNDTablKC4CPHaaaWKoDa/preview",
  },
];

export function Bullying() {
  return (
    <>
      <div className="font-roboto-condensed my-2 rounded-md border border-gray-300 bg-green-50 p-2">
        <b>Алтинбаєва Лариса Миколаївна</b>: відповідальна особа за оперативне
        реагування у випадку звернення щодо фактів булінгу (цькуванню)
        <br />
        <b>телефон:</b> <span className="text-red-600">(096) 095-04-11</span>
      </div>
      <Accordion>
        {items.map((v) => (
          <Accordion.Item key={v.title} title={v.title}>
            <Embed src={v.href} />
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
}
