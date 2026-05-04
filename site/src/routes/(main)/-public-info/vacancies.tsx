import { asset } from "~/lib/utils";

const teachingStaff = [
  "вчитель математики (18 год)",
  "вчитель української мови та літератури (1,5 ст)",
  "вчитель англійської мови (18 год)",
  "вчитель хімії (11 год)",
  'вчитель інтегрованого курсу "Пізнаю природу" (8 год)',
  "вчитель інформатики (9 год)",
  "вчитель образотворчого мистецтва (7 год)",
  "вчитель-логопеда (1 ст)",
  "вихователь ГПД (2 ст)",
  "завідувач бібліотеки (1 ст)",
];

const technicalStaff = [
  "кухар (1 ст)",
  "робітник з обслуговування будівель та споруд (1 ст)",
  "прибиральник службових приміщень (1 ст)",
];

export function Vacancies() {
  return (
    <>
      <img
        src={asset("images/вакансії.jpg")}
        className="float-right ml-4 w-120"
      />
      <Items data={teachingStaff} title="Педагогічний персонал" />
      <Items data={technicalStaff} title="Технічний персонал" />
    </>
  );
}

function Items(props: { data: string[]; title: string }) {
  return (
    <div className="content font-roboto-condensed">
      <h1 className="my-0 text-left">{props.title}</h1>
      <ul>
        {props.data.map((v) => (
          <li key={v}>{v}</li>
        ))}
      </ul>
    </div>
  );
}
