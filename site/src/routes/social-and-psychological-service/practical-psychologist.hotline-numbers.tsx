import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "~/components/link";
import { dirAsset } from "~/lib/utils";

export const Route = createFileRoute(
  "/social-and-psychological-service/practical-psychologist/hotline-numbers",
)({
  component: RouteComponent,
  staticData: { title: "Телефони гарячої лінії" },
});

const image = dirAsset("images/");

function RouteComponent() {
  return (
    <div className="content">
      <h1>Телефони гарячих ліній</h1>
      <p className="text-center italic">
        Ти опинився в складній життєвій ситуації? Шукаєш відповіді на особисті
        запитання? Тебе принижують, змушують до чогось? Можливо, тебе втягують
        або вже втягнули в погану компанію і тепер ти не знаєш, як бути?
        Зателефонувавши по «ТЕЛЕФОНУ ДОВІРИ», ти можеш анонімно порадитися з
        кваліфікованими консультантами у вирішенні твоєї проблеми.
      </p>

      <p>
        Телефон довіри - один з видів соціально значимих послуг. Надає
        можливість анонімної телефонної бесіди з кваліфікованим консультантом.
        Телефон довіри – служба, куди можна звернутися з будь-яким питанням, на
        яке ти шукаєш відповідь.
      </p>

      <div>
        Кожна людина, яка звертається на телефон довіри, має право розраховувати
        на наступне:
      </div>
      <ul>
        <li>Конфіденційність (таємницю розмови);</li>
        <li>Можливість виговоритися;</li>
        <li>Допомогу в пошуку рішення;</li>
        <li>Отримати координати інших служб.</li>
      </ul>

      <div className="float-right flex flex-col items-center gap-7">
        <img src={image("гаряча-лінія.jpg")} className="w-96" />
        <ExternalLink href="https://la-strada.org.ua">
          <img src={image("ла-страда.webp")} className="w-40" />
        </ExternalLink>
      </div>

      <ul className="mt-14">
        <li>
          <div>
            <b>Міський телефон довіри психологічної служби</b>
          </div>
          <div className="font-bold text-violet-700">
            (0564) 40-24-24
            <br />
            (056) 792-86-99
          </div>
        </li>

        <li>
          <div>
            <b>Всеукраїнська гаряча лінія "Дитинство без насильства"</b>
          </div>
          <div className="font-bold text-violet-700">0 800 500 21 80</div>
        </li>

        <li>
          <div>
            <b>Загальнонаціональна Гаряча лінія з питань ВІЛ/СНІД</b>
          </div>
          <div className="font-bold text-violet-700">0-800-500-45-10</div>
        </li>

        <li>
          <div>
            <b>Загальнонаціональна Гаряча лінія з питань туберкульозу</b>
          </div>
          <div className="font-bold text-violet-700">0-800-503-08-00</div>
        </li>

        <li>
          <div>
            <b>
              Національна дитяча «гаряча лінія» (консультують юрист, психолог,
              соціальний працівник)
            </b>
          </div>
          <div className="font-bold text-violet-700">0-800-500-225</div>
        </li>

        <li>
          <div>
            <b>
              Національна "гаряча лінія" з попередження домашнього насильства,
              торгівлі людьми та ґендерної дискримінації (для дорослих)
            </b>
          </div>
          <div className="font-bold text-violet-700">0-800-500-335</div>
        </li>

        <li>
          <div>
            <b>
              Всеукраїнська інформаційно - консультаційна телефонна лінія з
              питань планування сім'ї та репродуктивного здоров'я
            </b>
          </div>
          <div className="font-bold text-violet-700">0-800-502-757</div>
        </li>

        <li>
          <div>
            <b>
              Програма СЕТА - безкоштовна психологічна допомога для українців,
              які постраждали під час війни
            </b>
          </div>
          <div className="font-bold text-violet-700">
            068 283 2098 - Viber
            <br />
            066 147 4317 - Telegram
          </div>
        </li>
      </ul>
      <div className="clear-both" />
    </div>
  );
}
