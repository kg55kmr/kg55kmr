import { createFileRoute } from "@tanstack/react-router";
import { Phone, SquareText, User } from "lucide-react";
import { ExternalLink } from "~/components/link";
import { employees } from "~/data/employees";

export const Route = createFileRoute(
  "/educational-work/safe-educational-environment/",
)({
  component: RouteComponent,
  staticData: {
    title: "Загальна інформація",
  },
});

const phones = [
  {
    number: "116 111",
    number2: "0 800 500 225",
    info: "Національна дитяча гаряча лінія",
  },
  {
    number: "116 123",
    number2: "0 800 500 335",
    info: "Гаряча лінія з попередження домашнього насильства",
  },
  {
    number: "1547",
    info: "Урядова гаряча лінія з протидії торгівлі людьми та домашньому насильству",
  },
  { number: "0 800 213 103", info: "Безоплатна правнича допомога" },
  {
    number: "1678",
    info: "Уповноважений Верховної Ради України з прав людини",
  },
  {
    number: "102",
    info: "Національна поліція України",
  },
];

function TelephoneNumbers() {
  return (
    <div>
      <div className="flex h-15 items-center gap-2">
        <Phone className="size-10 rounded-2xl bg-red-100 p-2 text-red-400" />
        <h1 className="text-lg font-bold">Телефони довіри та гарячі лінії</h1>
      </div>
      <div className="grid auto-rows-fr gap-x-10 gap-y-5 sm:grid-cols-2">
        {phones.map((v) => (
          <div
            key={v.number}
            className="flex flex-col justify-center rounded-xl border border-slate-300 p-2 text-center"
          >
            <div className="font-roboto-condensed text-lg font-bold text-blue-700">
              {v.number}
            </div>
            <div className="text-sm">{v.info}</div>
            {v.number2 && (
              <div className="text-sm">
                (або{" "}
                <span className="font-bold text-blue-700">{v.number2}</span>)
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ResponsiblePerson() {
  const info = employees.byPosition("заступник директора з виховної роботи")[0];

  return (
    <div>
      <div className="flex h-15 items-center gap-2">
        <User className="size-10 rounded-2xl bg-blue-100 p-2 text-blue-500" />
        <div>
          <h1 className="text-lg font-bold">Відповідальна особа</h1>
          <div className="text-sm text-gray-500">
            За оперативне реагування у випадку звернення щодо фактів булінгу
            (цькуванню) у гімназії
          </div>
        </div>
      </div>
      <div className="flex gap-4 rounded-xl border border-slate-300 p-4">
        <img src={info.image} className="h-50 rounded-2xl" />
        <div className="font-roboto-condensed flex flex-col gap-3">
          <div>
            <div className="text-lg font-bold">{info.name}</div>
            <div>{info.position}</div>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="size-10 rounded-2xl bg-red-100 p-2 text-red-400" />
            <div>(096) 095-04-11</div>
          </div>
          <div className="flex items-center gap-2">
            <SquareText className="size-10 rounded-2xl bg-blue-100 p-2 text-blue-400" />
            <ExternalLink href="https://drive.google.com/file/d/1PrCmOcfCVmFFNDTablKC4CPHaaaWKoDa/view">
              Зразок заяви про випадки булінгу (цькуванню)
            </ExternalLink>
          </div>
        </div>
      </div>
    </div>
  );
}

function RouteComponent() {
  return (
    <div className="grid gap-x-20 gap-y-5 lg:grid-cols-2">
      <TelephoneNumbers />
      <ResponsiblePerson />
      {/* <div className="grid gap-5 lg:grid-cols-2">
        <div>
          <ExternalLink href="https://www.legalaid.gov.ua/">
            <img
              src={asset("images/безоплатна-правова-допомога.webp")}
              className="w-60"
            />
          </ExternalLink>
        </div>
      </div> */}
    </div>
  );
}
