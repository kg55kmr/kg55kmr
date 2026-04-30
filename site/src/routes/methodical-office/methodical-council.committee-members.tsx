import { createFileRoute } from "@tanstack/react-router";
import { type Employee, employees } from "~/data/employees";

export const Route = createFileRoute(
  "/methodical-office/methodical-council/committee-members",
)({
  component: RouteComponent,
  staticData: {
    title: "Склад методичної ради",
  },
});

const head = employees.director();
const members = [
  ...employees.byJob("ЗДНВР"),
  ...employees.byJob("ЗДВР"),
  {
    ...employees.byName("Артемюк Наталія Анатоліївна"),
    post: "керівник МО предметів природничо-математичного циклу",
  },
  {
    ...employees.byName("Рзаєва Наталія Олександрівна"),
    post: "керівник МО предметів суспільно-гуманітарного циклу",
  },
];

function RouteComponent() {
  return (
    <div className="grid grid-cols-2 place-items-center gap-4">
      <Header text="Голова науково-методичної ради" />
      <Member employee={head} />
      <Header text="Члени методичної ради" />
      {members.map((v) => (
        <Member key={v.name} employee={v} />
      ))}
    </div>
  );
}

function Header(props: { text: string }) {
  return (
    <h1 className="font-philosopher col-span-2 text-center text-2xl font-bold text-fuchsia-800">
      {props.text}
    </h1>
  );
}

function Member({ employee }: { employee: Employee }) {
  return (
    <>
      <img src={employee.image} className="w-50" />
      <div className="text-center">
        <div className="font-bold text-red-700 underline underline-offset-4">
          {employee.name}
        </div>
        <div className="font-bold">{employee.post}</div>
      </div>
    </>
  );
}
