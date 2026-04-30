import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/educational-process/class-period")({
  component: RouteComponent,
  staticData: {
    title: "Режим роботи",
  },
});

function RouteComponent() {
  return (
    <div className="content">
      <p>
        Навчальний процес проходить в одну зміну з 5-ти денним тижневим
        навантаженням. Початок занять о 8:30.
      </p>
      <h1>Розклад дзвінків та тривалість перерв при очному навчанні</h1>
      <InPersonLearning
        cols={inPersonLearning.cols}
        data={inPersonLearning.regular}
      />
      <h1>
        Розклад дзвінків та тривалість перерв при очному навчанні <br />
        (за наявності інформаційно-виховних заходів)
      </h1>
      <InPersonLearning
        cols={inPersonLearning.cols}
        data={inPersonLearning.homeroom}
      />
      <h1>
        Розклад дзвінків та тривалість перерв під час організації освітнього
        процесу за технологіями дистанційного навчання
      </h1>
      <DistanceLearning
        cols={distanceLearning.cols}
        before={distanceLearning.before}
        items={distanceLearning.classes}
      />
      <div className="mb-5 grid-cols-2 gap-5 md:grid">
        <div className="content">
          <h1 className="text-blue-700">Навчальне навантаження</h1>
          <p className="font-bold">
            Тижневе навантаження учнів (без урахування годин фізичної культури)
            не перебільшує гранично допустимого навантаження на одного учня,
            визначеного навчальними планами МОН України.
          </p>
          <p className="font-bold">
            Розвантажувальний день: для учнів 1 класів – четвер
          </p>
        </div>
        <div className="content">
          <h1 className="text-blue-700">Тижневе навантаження по класах</h1>
          <table className="table-border mx-auto">
            <tbody>
              {weeklyWorkload.map((v, i) => (
                <tr key={i}>
                  <td className="pr-5">{i + 1} клас</td>
                  <td className="font-bold">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <h1>Вимоги до організації харчування у КГ №55 КМР</h1>
      <ol>
        <li>
          Харчування в КГ №55 КМР здійснюється за розробленим графіком
          харчування здобувачів освіти.
        </li>
        <li>
          При організації харчування необхідно забезпечити відстань між столами
          не менше 1,5 м та розміщення за столом не більше 4-х осіб.
        </li>
        <li>
          Усі працівники харчоблоку повинні бути забезпечені засобами
          індивідуального захисту із розрахунку 1 захисна маска на 3 години
          роботи, одноразовими рукавичками, які необхідно змінювати після кожної
          дії (виробничого процесу на харчоблоці їдальні), не пов'язаних між
          собою. Засоби індивідуального захисту мають бути в наявності із
          розрахунку на 5 робочих днів, у т.ч. на 1 робочу зміну - безпосередньо
          на робочому місці працівника.
        </li>
        <li>
          Після кожного зняття засобів індивідуального захисту (захисних масок
          одноразових рукавичок) перед одяганням чистих засобів індивідуального
          захисту, працівник повинен ретельно вимити руки з милом або обробити
          антисептичним засобом.
        </li>
        <li>
          Організовано здійснюється централізований збір використаних засобів
          індивідуального захисту, паперових серветок в окремі контейнери (урни)
          з кришками та поліетиленовими пакетами, з подальшою утилізацією згідно
          з укладеною угодою на вивіз твердих побутових відходів.
        </li>
        <li>
          Працівник їдальні, який видає страви або здійснює розрахунок, повинен
          бути забезпечений засобами індивідуального захисту: захисною маскою
          або респіратором, захисними окулярами або захисним щитком,
          одноразовими рукавичками.
        </li>
        <li>
          При організації харчування необхідно забезпечити умови для дотриманням
          працівниками правил особистої гігієни (рукомийники, мило рідке,
          паперові рушники, антисептичні засоби для обробки рук тощо).
        </li>
        <li>
          З працівниками харчоблоку необхідно провести навчання щодо одягання,
          використання, зняття засобів індивідуального захисту, їх утилізації,
          забезпечити контроль за виконанням цих вимог.{" "}
        </li>
      </ol>
    </div>
  );
}

type InPersonData = {
  class: string;
  items: {
    start: string;
    end: string;
    break?: number;
  }[];
};

type InPersonLearningProps = {
  cols: string[];
  data: {
    before?: { start: string; end: string };
    items: InPersonData[];
  };
};

function InPersonLearning(props: InPersonLearningProps) {
  return (
    <div className="mb-4 grid-cols-2 justify-items-center gap-10 md:grid lg:grid-cols-3">
      {props.data.items.map((classData) => (
        <div key={classData.class}>
          <h1 className="mb-2 text-center text-lg font-bold text-blue-700">
            Для учнів {classData.class} класів
          </h1>
          <table className="table-border mb-4">
            <thead>
              <tr className="font-bold">
                {props.cols.map((col) => (
                  <th key={col}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {props.data.before && (
                <tr>
                  <td>В</td>
                  <td>
                    {props.data.before.start} - {props.data.before.end}
                  </td>
                  <td></td>
                </tr>
              )}
              {classData.items.map((lesson, i) => (
                <tr key={i}>
                  <td className="pr-10">{i + 1}</td>
                  <td className="pr-10">
                    {lesson.start} - {lesson.end}
                  </td>
                  <td>{lesson.break && `${lesson.break} хв`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

type DistanceLearningData = {
  class: string;
  items: (
    | {
        start: string;
        end: string;
        asyncStart: string;
        asyncEnd: string;
        break?: number;
      }
    | { async: boolean }
  )[];
};

type DistanceLearningProps = {
  cols: string[];
  before: { start: string; end: string; break?: number };
  items: DistanceLearningData[];
};

function DistanceLearning(props: DistanceLearningProps) {
  return (
    <div className="mb-4 grid-cols-2 justify-items-center gap-10 md:grid lg:grid-cols-3">
      {props.items.map((classData) => (
        <div key={classData.class}>
          <h1 className="my-2 text-center text-lg font-bold text-blue-700">
            Для учнів {classData.class} класів
          </h1>
          <table className="table-border">
            <thead>
              <tr className="font-bold">
                {props.cols.map((col) => (
                  <th key={col}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pr-5">Ранкова зустріч</td>
                <td>
                  {props.before.start} - {props.before.end}
                </td>
                <td></td>
              </tr>
              {classData.items.map((lesson, i) => {
                const time =
                  "async" in lesson
                    ? "асинхронно"
                    : `${lesson.start} - ${lesson.end}`;
                const breakTime =
                  "break" in lesson && lesson.break ? `${lesson.break} хв` : ``;
                return (
                  <tr key={i}>
                    <td className="pr-10">{i + 1}</td>
                    <td className="pr-10">{time}</td>
                    <td>{breakTime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

const inPersonLearning = {
  cols: ["№ уроку", "Час", "Перерва"],
  regular: {
    items: [
      {
        class: "1",
        items: [
          { start: "08:30", end: "09:05", break: 20 },
          { start: "09:20", end: "10:00", break: 20 },
          { start: "10:20", end: "10:55", break: 20 },
          { start: "11:15", end: "11:50", break: 15 },
          { start: "12:05", end: "12:40" },
        ],
      },
      {
        class: "2-4",
        items: [
          { start: "08:30", end: "09:10", break: 20 },
          { start: "09:30", end: "10:10", break: 20 },
          { start: "10:30", end: "11:10", break: 20 },
          { start: "11:30", end: "12:10", break: 15 },
          { start: "12:25", end: "13:05" },
        ],
      },
      {
        class: "5-9",
        items: [
          { start: "08:30", end: "09:15", break: 10 },
          { start: "09:25", end: "10:10", break: 20 },
          { start: "10:30", end: "11:15", break: 20 },
          { start: "11:35", end: "12:20", break: 15 },
          { start: "12:35", end: "13:20", break: 10 },
          { start: "13:30", end: "14:15", break: 10 },
          { start: "14:25", end: "15:10" },
        ],
      },
    ],
  },
  homeroom: {
    before: { start: "08:30", end: "08:50" },
    items: [
      {
        class: "1",
        items: [
          { start: "08:55", end: "09:30", break: 20 },
          { start: "09:50", end: "10:25", break: 20 },
          { start: "10:45", end: "11:20", break: 20 },
          { start: "11:40", end: "12:15", break: 15 },
          { start: "12:30", end: "13:05" },
        ],
      },
      {
        class: "2-4",
        items: [
          { start: "08:55", end: "09:35", break: 15 },
          { start: "09:50", end: "10:30", break: 15 },
          { start: "10:45", end: "11:25", break: 15 },
          { start: "11:40", end: "12:20", break: 15 },
          { start: "12:35", end: "13:15" },
        ],
      },
      {
        class: "5-9",
        items: [
          { start: "08:55", end: "09:40", break: 10 },
          { start: "09:50", end: "10:35", break: 10 },
          { start: "10:45", end: "11:30", break: 15 },
          { start: "11:45", end: "12:30", break: 10 },
          { start: "12:40", end: "13:25", break: 10 },
          { start: "13:35", end: "14:20", break: 5 },
          { start: "14:25", end: "15:10" },
        ],
      },
    ],
  },
};

const distanceLearning = {
  cols: ["№ уроку", "Час", "Перерва"],
  before: { start: "08:30", end: "08:40", break: 10 },
  classes: [
    {
      class: "1",
      items: [
        {
          start: "08:50",
          end: "09:10",
          asyncStart: "09:10",
          asyncEnd: "09:25",
          break: 15,
        },
        {
          start: "09:40",
          end: "10:00",
          asyncStart: "10:00",
          asyncEnd: "10:15",
          break: 15,
        },
        {
          start: "10:30",
          end: "10:50",
          asyncStart: "10:50",
          asyncEnd: "11:05",
          break: 15,
        },
        { async: true },
        { async: true },
      ],
    },
    {
      class: "2",
      items: [
        {
          start: "08:50",
          end: "09:10",
          asyncStart: "09:10",
          asyncEnd: "09:30",
          break: 15,
        },
        {
          start: "09:45",
          end: "10:05",
          asyncStart: "10:05",
          asyncEnd: "10:25",
          break: 15,
        },
        {
          start: "10:40",
          end: "11:00",
          asyncStart: "11:00",
          asyncEnd: "11:20",
          break: 15,
        },
        { async: true },
        { async: true },
      ],
    },
    {
      class: "3-4",
      items: [
        {
          start: "08:50",
          end: "09:10",
          asyncStart: "09:10",
          asyncEnd: "09:30",
          break: 15,
        },
        {
          start: "09:45",
          end: "10:05",
          asyncStart: "10:05",
          asyncEnd: "10:25",
          break: 15,
        },
        {
          start: "10:40",
          end: "11:00",
          asyncStart: "11:00",
          asyncEnd: "11:20",
          break: 15,
        },
        {
          start: "11:35",
          end: "11:55",
          asyncStart: "11:55",
          asyncEnd: "12:15",
          break: 15,
        },
        { async: true },
      ],
    },
    {
      class: "5-6",
      items: [
        {
          start: "08:50",
          end: "09:15",
          asyncStart: "09:15",
          asyncEnd: "09:35",
          break: 15,
        },
        {
          start: "09:50",
          end: "10:15",
          asyncStart: "10:15",
          asyncEnd: "10:35",
          break: 15,
        },
        {
          start: "10:50",
          end: "11:15",
          asyncStart: "11:15",
          asyncEnd: "11:35",
          break: 15,
        },
        {
          start: "11:50",
          end: "12:15",
          asyncStart: "12:15",
          asyncEnd: "12:35",
          break: 15,
        },
        { async: true },
        { async: true },
        { async: true },
      ],
    },
    {
      class: "7-9",
      items: [
        {
          start: "08:50",
          end: "09:15",
          asyncStart: "09:15",
          asyncEnd: "09:35",
          break: 15,
        },
        {
          start: "09:50",
          end: "10:15",
          asyncStart: "10:15",
          asyncEnd: "10:35",
          break: 15,
        },
        {
          start: "10:50",
          end: "11:15",
          asyncStart: "11:15",
          asyncEnd: "11:35",
          break: 15,
        },
        {
          start: "11:50",
          end: "12:15",
          asyncStart: "12:15",
          asyncEnd: "12:35",
          break: 15,
        },
        {
          start: "12:50",
          end: "13:15",
          asyncStart: "13:15",
          asyncEnd: "13:35",
          break: 10,
        },
        { async: true },
        { async: true },
      ],
    },
  ],
};

const weeklyWorkload = [
  "20+3",
  "22+3",
  "23+3",
  "23+3",
  "28+3",
  "31+3",
  "32+3",
  "33+3",
  "33+3",
];
