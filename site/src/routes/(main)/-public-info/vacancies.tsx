import { asset } from "~/lib/utils";

type Vacancy = {
  name: string;
  rate?: string;
};

const teachingStaff: Vacancy[] = [
  { name: "вчитель математики", rate: "18 год" },
  { name: "вчитель української мови та літератури", rate: "1,5 ст" },
  { name: "вчитель англійської мови", rate: "18 год" },
  { name: "вчитель інтегрованого курсу «Пізнаю природу»", rate: "8 год" },
  { name: "вчитель інформатики", rate: "9 год" },
  { name: "вчитель образотворчого мистецтва", rate: "7 год" },
  { name: "вчитель-логопед", rate: "1 ст" },
  { name: "вихователь ГПД", rate: "2 ст" },
  { name: "завідувач бібліотеки", rate: "1 ст" },
];

const technicalStaff: Vacancy[] = [
  { name: "кухар" },
  { name: "робітник з обслуговування будівель та споруд" },
  { name: "прибиральник службових приміщень" },
];

export function Vacancies() {
  return (
    <div className="flex flex-wrap-reverse items-end justify-center gap-10">
      <div>
        <Items data={teachingStaff} title="Педагогічний персонал" />
        <Items data={technicalStaff} title="Технічний персонал" />
      </div>
      <img src={asset("images/вакансії.jpg")} className="w-120" />
    </div>
  );
}

function Items(props: { data: Vacancy[]; title: string }) {
  return (
    <div className="content font-roboto-condensed mb-10">
      <h1 className="my-0 text-left">{props.title}</h1>
      <table className="md:ml-10">
        <tbody>
          {props.data.map((v) => (
            <tr key={v.name}>
              <td className="pr-5 md:list-item">{v.name}</td>
              <td className="font-bold">{v.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
