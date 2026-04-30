import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "~/components/link";
import { employees } from "~/data/employees";
import { EmployeeInfo } from "./-components/employee-info";

export const Route = createFileRoute(
  "/social-and-psychological-service/speech-therapist",
)({
  component: RouteComponent,
  staticData: {
    title: "Загальна інформація",
  },
});

function RouteComponent() {
  return (
    <div className="content">
      <EmployeeInfo
        employee={employees.byJob("логопед")[0]}
        workingHours={[
          ["12:35", "16:35"],
          ["12:35", "16:35"],
          ["12:35", "16:35"],
          ["12:35", "16:35"],
          ["12:35", "16:35"],
        ]}
      />
      <div className="text-center">
        <ExternalLink href="https://zakon.rada.gov.ua/laws/show/z0059-93">
          Положення про логопедичні пункти системи освіти
        </ExternalLink>
      </div>
      <div className="font-bold text-violet-700">Мета роботи:</div>
      <ul>
        <li>
          створення комфортних умов для корекційно-відновлювальних занять;
        </li>
        <li>
          підтримка сприятливої психологічної атмосфери для дітей молодшого
          шкільного віку;
        </li>
        <li>створення ситуації успіху та інтелектуального розвитку школяра.</li>
      </ul>

      <div className="font-bold text-violet-700">
        Завдання вчителя-логопеда:
      </div>
      <ul>
        <li>
          усунення порушень усного і писемного мовлення у дітей молодшого
          шкільного віку;
        </li>
        <li>запобігання відхилень мовного розвитку учнів початкових класів;</li>
        <li>
          інформація про позитивні зміни мовної діагностики молодших школярів
          серед учителів, вихователів та батьків.
        </li>
      </ul>

      <div className="font-bold text-violet-700">
        Ефективні методи, прийоми логопедичних занять:
      </div>
      <ul>
        <li>
          технологія кооперативного навчання (парна та групова робота, метод
          "Карусель", "Два, чотири, всі разом)
        </li>
        <li>
          технологія кооперативно-групового навчання ("Мікрофон", "Мозковий
          штурм", "Незакінчені речення")
        </li>
        <li>
          технології ситуативного моделювання (симуляції, рольові ігри,
          ігри-тренінги, театралізація)
        </li>
      </ul>
    </div>
  );
}
