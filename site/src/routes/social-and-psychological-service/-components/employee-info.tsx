import type { Employee } from "~/data/employees";
import { ExternalLink as EL } from "lucide-react";
import { ExternalLink } from "~/components/link";

type Props = {
  employee: Employee;
  workingHours: WorkingHours[];
};

type WorkingHours = [string, string];

export function EmployeeInfo(props: Props) {
  const e = props.employee;
  return (
    <div className="grid items-center justify-items-center md:grid-cols-2">
      <div>
        <img src={e.image} className="w-60" />
        {e.blog && (
          <ExternalLink href={e.blog}>
            <div className="mt-1 flex gap-1">
              Блог <EL />
            </div>
          </ExternalLink>
        )}
      </div>
      <div className="text-center">
        <div className="font-bold">
          <div className="text-2xl text-violet-700">{e.name}</div>
          <div className="text-xl text-red-700">{e.post}</div>
        </div>
        <p className="font-bold">Графік роботи</p>
        <table className="table-border mx-auto text-left">
          <tbody>
            {props.workingHours.map((v, i) => (
              <tr key={i}>
                <th>{dayName[i]}</th>
                <td>
                  {v[0]} - {v[1]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const dayName = ["Понеділок", "Вівторок", "Середа", "Четвег", "П'ятниця"];
