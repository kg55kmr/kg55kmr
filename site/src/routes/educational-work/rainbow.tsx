import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "~/components/link";
import { asset } from "~/lib/utils";

export const Route = createFileRoute("/educational-work/rainbow")({
  component: RouteComponent,
  staticData: { title: 'Газета "Веселка"' },
});

type YearData = {
  year: number | string;
  items: { title: string; url: string }[];
};

const data: YearData[] = [
  {
    year: "2025-2026",
    items: [
      {
        title: "грудень - лютий",
        url: "https://drive.google.com/file/d/1nVSJz4-Va-GILFQdgMIyVueGxpf5J-XB/view",
      },
    ],
  },
  // {
  //   year: "2023-2024",
  //   items: [
  //     {
  //       title: "грудень - лютий",
  //       url: "",
  //     },
  //   ],
  // },
  // {
  //   year: "2022-2023",
  //   items: [
  //     {
  //       title: "грудень - лютий",
  //       url: "",
  //     },
  //   ],
  // },
  {
    year: "2020-2021",
    items: [
      {
        title: "грудень - лютий",
        url: "https://drive.google.com/file/d/1ZiZSCWj8NawWFOMUm-h1SekL2hbAfRoO/view",
      },
    ],
  },
  {
    year: "2019-2020",
    items: [
      {
        title: "вересень - листопад",
        url: "https://drive.google.com/file/d/1lWlDIwJfObV1drwZi2ZSPH3hLrwoEF0K/view",
      },
    ],
  },
  {
    year: "2017-2018",
    items: [
      {
        title: "лютий - квітень",
        url: "https://drive.google.com/file/d/1025pf5enWFtlm0hlI-2bVE9ntXfjo3gJ/view",
      },
      {
        title: "грудень - лютий",
        url: "https://drive.google.com/file/d/1dhYGFyEtW6yp6TEyUtS1OSW5ez5vlZkg/view",
      },
    ],
  },
  {
    year: "2016-2017",
    items: [
      {
        title: "листопад",
        url: "https://drive.google.com/file/d/1BNwDQusLIjbqpCIRFLidKVSICDY75L_c/view",
      },
      {
        title: "жовтень",
        url: "https://drive.google.com/file/d/1aI7Whd-EeHRzHM3_iyxZgdYWcFu7v1HQ/view",
      },
      {
        title: "вересень",
        url: "https://drive.google.com/file/d/1-FzPyXDnRsJWXi95JPcMc4SbN93PWxAH/view",
      },
    ],
  },
  {
    year: "2015-2016",
    items: [
      {
        title: "лютий",
        url: "https://drive.google.com/file/d/1aSjS3ajxMWjCsAjrMUxMMSnNCbBLeadH/view",
      },
      {
        title: "грудень",
        url: "https://drive.google.com/file/d/1xv30kzpz6hnjtveKqvQq-0mG8IGG1AbA/view",
      },
      {
        title: "жовтень",
        url: "https://drive.google.com/file/d/1X1my0x9_O88r3HFD-zOjhXGTWMs4ZAsa/view",
      },
      {
        title: "вересень",
        url: "https://drive.google.com/file/d/1QgIWekW6DrvAtY6VBBWcn5fSJM6g2m9S/view",
      },
    ],
  },
];

function RouteComponent() {
  return (
    <div className="content grid gap-5 sm:grid-cols-[auto_1fr]">
      <div>
        <div className="font-philosopher rounded-lg border border-gray-400 bg-[linear-gradient(45deg,rgba(239,68,68,0.3),rgba(245,158,11,0.3),rgba(250,204,21,0.3),rgba(34,197,94,0.3),rgba(59,130,246,0.3),rgba(99,102,241,0.3),rgba(168,85,247,0.3))] p-5 text-xl shadow-[2px_2px_8px_rgba(0,0,0,0.4)]">
          <h1 className="italic">Випуск газети "Веселка"</h1>
          <hr />
          {data.map((item) => (
            <div key={item.year} className="not-last-of-type:mb-6">
              <div className="text-center font-bold">{item.year}</div>
              {item.items.map((v) => (
                <div key={v.url} className="grid grid-cols-[auto_1fr] gap-2">
                  <img src={asset("icons/газета.webp")} className="w-10" />
                  <ExternalLink href={v.url}>{v.title}</ExternalLink>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="font-thin">
          Газета
          <br />
          <span className="font-lobster text-4xl tracking-widest">
            "
            <span className="[text-shadow:2px_2px_3px_black]">
              <span className="text-red-500">В</span>
              <span className="text-orange-500">Е</span>
              <span className="text-yellow-500">С</span>
              <span className="text-green-500">Е</span>
              <span className="text-blue-500">Л</span>
              <span className="text-indigo-500">К</span>
              <span className="text-violet-500">А</span>
            </span>
            "
          </span>
        </h1>
        <p>
          Газета «Веселка» вперше побачила світ у вересні 2000 року. Виходить з
          періодичністю один раз у квартал, тиражом у 6 примірників, форматом
          А4, кількість сторінок варіюється залежно від випуску. Зазвичай,
          газети друкують у вигляді 2х сторінок на одному аркуші, але ми інколи
          відходимо від традиційності задля зручності: газети розміщено на
          стендах на кожному із поверхів гімназії, тож і читати на окремих
          аркушах значно комфортніше. Наша «Веселка» стала центром шкільного
          життя, інформатором, аналітиком, порадником, платформою для перших
          творчих кроків учнів.
        </p>
        <p>
          <b>Місія газети</b>
        </p>
        <p>
          <i>
            Засобами художнього слова формувати особистість патріота України,
            виховувати людину демократичного світогляду і культури, розвивати
            творчі здібності та обдарованості школярів.
          </i>
        </p>
        <p>Спрямованість газети діти визначають так:</p>
        <p className="pl-8 font-bold italic">
          «Ми руки на пульсі шкільної планети тримаємо,
          <br />
          І щоб там не сталося, -<br />
          Ми все про всіх знаємо».
        </p>
        <p>
          <b>Основний толерантний принцип газети:</b>
        </p>
        <p>
          Кожен має право висловити свою думку, й разом з тим не можна вважати
          тільки власне міркування правильним. Водночас незгода з чиєюсь думкою
          не дає жодних підстав для неповаги до думки іншого.
        </p>
        <p>
          До складу редакції входять учні 6-9 класів: постійні кореспонденти та
          фотограф. У цьому навчальному році до нашої редколегії прийшли новачки
          – учні, які мають бажання займатися журналісткою. Надрукувати свої
          матеріали в номері може кожен бажаючий: і учні, і вчителі, і батьки.
        </p>
        <p>
          <b>Основні завдання газети:</b>
        </p>
        <ul>
          <li>розвиток творчих здібностей і обдарувань дітей;</li>
          <li>
            формування почуття громадянської відповідальності, журналістської
            етики;
          </li>
          <li>
            виховання моральної життєтворчої мотивації, активної громадянської
            позиції, навичок поведінки в колективі і суспільстві;
          </li>
          <li>
            формування високої гуманістичної культури особистості, здатності
            протидіяти проявам бездуховності;
          </li>
          <li>
            виховання демократичних цінностей в учнів, уміння поважати думку
            іншого, відстоюючи власну позицію, вміння спілкуватись з дорослими
            на рівних;
          </li>
          <li>
            забезпечення права дитини на вільне висловлювання своїх думок,
            розширення знань школярів з громадянської освіти;
          </li>
          <li>розвиток навиків критичного мислення учнів.</li>
        </ul>
        <p>
          <b>Концепція газети «Веселка»:</b>
        </p>
        <ul>
          <li>відтворення життя навчального закладу в усій його повноті;</li>
          <li>зберігання та розвиток кращих шкільних традицій;</li>
          <li>
            презентування науково-методичних, літературних досягнень учні та
            вчителів;
          </li>
          <li>батьківський всеобуч;</li>
          <li>пропагування здорового способу життя.</li>
        </ul>
        <p>
          <b>Рубрики газети:</b>
        </p>
        <ul>
          <li>інформація від адміністрації;</li>
          <li>із перших уст;</li>
          <li>події (новини) шкільного життя;</li>
          <li>подорожі;</li>
          <li>психологи радять;</li>
          <li>зернини творчості;</li>
          <li>дитяча сторінка;</li>
          <li>уроки етикету;</li>
          <li>дозвілля;</li>
          <li>шкільний гумор;</li>
        </ul>
      </div>
    </div>
  );
}
