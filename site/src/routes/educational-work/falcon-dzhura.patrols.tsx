import { createFileRoute } from "@tanstack/react-router";
import { Tabs } from "~/components/tabs";
import { employees } from "~/data/employees";

export const Route = createFileRoute("/educational-work/falcon-dzhura/patrols")(
  {
    component: RouteComponent,
    staticData: {
      title: "Рої",
    },
  },
);

function RouteComponent() {
  return (
    <div className="content">
      <p>Кожен рій повинен мати власні ройові атрибути:</p>

      <ol>
        <li>
          Назву, яка відображає козацько-патріотичний зміст, ідентифікує рій.
        </li>
        <li>
          Відзначки – схематичні зображення емблеми гри «Сокіл» («Джура») та
          власні емблеми, що містять назву та графічні кольорові зображення
          символів рою. Для виготовлення відзначок використовують стандартні
          (9х6 см) нагрудні бейджики. При цьому бейджик з емблемою гри «Сокіл»
          («Джура») розміщується вертикально на лівому боці грудей, а власні
          емблеми – горизонтально, на правому.
        </li>
        <li>
          Ройовий клич-девіз, у якому можна використати народні приказки чи
          прислів’я.
        </li>
        <li>Прапорець встановленої форми із своїми барвами.</li>
      </ol>

      <p>
        Прапорець виготовляється з тканини у формі квадрату розмірами 75x75 см.
        Його кольори складаються з двох чи трьох барв. На правій (по ходу руху
        прапороносця), лицевій стороні прапорця розміщується відзнака рою,
        висотою 25 см. На тій же стороні розміщується симетричний напис назви
        рою. Розміри букв по висоті – 10 см. На лівій стороні прапорця ніяких
        зображень немає. Прапорець носиться прикріпленим до держака довжиною 180
        см та діаметром 3 см.
      </p>
      <p>
        Барви рою – будь-які два чи три кольори, вибрані роєм. Їх можна
        використовувати не тільки для прапорця, але і для інших потреб власної
        ідентифікації. Основна барва для всіх учасників гри «Джура» – малинова.
      </p>
      <p>
        Типова форма – однострій, - має бути простий у виготовленні з елементами
        козацької тематики та народних традицій. Для виготовлення однострою
        можна використати народні костюми, елементи обмундирування українського
        війська різних періодів (але тільки тих, що не мають специфічних
        військових нашивок, емблем, знаків розпізнавання).
      </p>

      <Tabs defaultValue={patrols[0].patrol}>
        {patrols.map((p) => (
          <Tabs.Tab key={p.patrol} title={`Рій «${p.patrol}»`} value={p.patrol}>
            <div className="mb-2 grid grid-cols-[auto_1fr] gap-x-4">
              <TeamLeader assistantLeader={p.assistantLeader} />
              <div>
                <b>Вікова категорія:</b>
              </div>
              <div>{p.ageGroup}</div>
            </div>
            <Patrol team={p.team} />
          </Tabs.Tab>
        ))}
      </Tabs>
    </div>
  );
}

function Patrol(props: { team: Patrol["team"] }) {
  return (
    <table className="table-default table-border table-header-bg-slate-100">
      <thead>
        <tr>
          <th>№ з/п</th>
          <th>Прізвище</th>
          <th>Дата народження</th>
          <th>Клас</th>
        </tr>
      </thead>
      <tbody>
        {props.team.map((v, i) => (
          <tr key={v.name}>
            <td>{i + 1}</td>
            <td>{v.name}</td>
            <td>{v.date}</td>
            <td>{v.class}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

type Patrol = {
  patrol: string;
  ageGroup: string;
  assistantLeader: string;
  team: { name: string; date: string; class: string }[];
};

const patrols: Patrol[] = [
  {
    patrol: "Новаки",
    ageGroup: "Молодша (6-10 років)",
    assistantLeader: employees.byName("Масько Євгеній Віталійович").name,
    team: [
      { name: "Колачик", date: "01.09.2017", class: "4-А" },
      { name: "Коріняка", date: "25.08.2015", class: "4-А" },
      {
        name: "Трофимюк",
        date: "14.10.2016",
        class: "4-А",
      },
      { name: "Коваленко", date: "03.04.2016", class: "4-А" },
      { name: "Конопленко", date: "14.01.2016", class: "4-А" },
      { name: "Кучеренко", date: "11.03.2016", class: "4-А" },
      { name: "Іванов", date: "16.10.2016", class: "4-А" },
      { name: "Складник", date: "20.10.2016", class: "4-А" },
    ],
  },
  {
    patrol: "Джури",
    ageGroup: "Середня (11-14 років)",
    assistantLeader: employees.byName("Лопатін Даниіл Валерійович").name,
    team: [
      { name: "Радько", date: "23.03.2013", class: "8-А" },
      { name: "Радько", date: "06.12.2014", class: "6-А" },
      { name: "Мандрига", date: "08.12.2012", class: "6-А" },
      {
        name: "Мусієнко",
        date: "01.01.2013",
        class: "8-Б",
      },
      { name: "Фетісов", date: "22.10.2014", class: "6-А" },
      { name: "Колб", date: "08.12.2014", class: "6-А" },
      { name: "Джепко", date: "18.03.2012", class: "8-Б" },
      {
        name: "Гребньов",
        date: "28.09.2012",
        class: "8-Б",
      },
    ],
  },
  {
    patrol: "Молоді козаки",
    ageGroup: "Старша (15–17 років)",
    assistantLeader: employees.byName("Лопатін Даниіл Валерійович").name,
    team: [
      {
        name: "Лісневська",
        date: "23.08.2012",
        class: "9-Б",
      },
      { name: "Іщенко", date: "29.09.2011", class: "9-Б" },
      {
        name: "Авраменко",
        date: "05.11.2011",
        class: "9-Б",
      },
      { name: "Грішина", date: "16.05.2012", class: "9-Б" },
      { name: "Зілінченок", date: "24.01.2012", class: "9-Б" },
      { name: "Мельник", date: "24.04.2012", class: "9-Б" },
      { name: "Крилов", date: "25.06.2012", class: "9-А" },
      { name: "Бойко", date: "07.12.2011", class: "9-А" },
      {
        name: "Євницький",
        date: "05.07.2012",
        class: "9-А",
      },
    ],
  },
];

function TeamLeader(props: { assistantLeader: string }) {
  const teamLeader = employees.byName("Неплях Євгеній Олександрович");
  return (
    <>
      <div>
        <b>Керівник рою:</b>
      </div>
      <div>{teamLeader.name}</div>
      <div>
        <b>Заступник:</b>
      </div>
      <div>{props.assistantLeader}</div>
    </>
  );
}
