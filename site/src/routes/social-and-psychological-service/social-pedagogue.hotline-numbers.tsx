import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "~/components/link";
import { dirAsset } from "~/lib/utils";

export const Route = createFileRoute(
  "/social-and-psychological-service/social-pedagogue/hotline-numbers",
)({
  component: RouteComponent,
  staticData: { title: "Телефони гарячої лінії" },
});

const image = dirAsset("images/");

function RouteComponent() {
  return (
    <div className="content">
      <img src={image("гаряча-лінія.jpg")} className="mx-auto w-md" />

      <p>
        У Кривому Розі триває реалізація проєкту «Впровадження психологічної
        допомоги».
      </p>
      <p>
        В рамках проєкту для мешканців та гостей міста постійно працює{" "}
        <b>гаряча лінія психологічної допомоги 0 800 300 265</b>.
      </p>
      <p>
        На зв’язку 28 фахівців – психологів і лікарів-психіатрів, які пройшли
        відповідну підготовку. Станом на сьогодні спеціалісти прийняли вже понад
        2 500 звернень.
      </p>
      <p>
        <b>Всі дзвінки анонімні та безкоштовні</b>. У телефонній розмові фахівці
        оцінюють стан людини й надають відповідну допомогу. За необхідності
        скеровують до лікаря-психіатра, який може призначити медикаментозне
        лікування. Також у кожному районі міста працюють групи психологів для
        надання екстреної психологічної допомоги у разі надзвичайних ситуацій.
      </p>
      <p className="font-bold text-red-600">
        Гаряча лінія психологічної підтримки 0 800 300 265 працює щодня з 9:00
        до 21:00.
      </p>

      <p>
        Як звернутися по консультацію юриста системи безоплатної правничої
        допомоги:
      </p>
      <ul>
        <li>
          Щоб отримати усну консультацію, телефонуйте до контактного центру
          системи БПД за номером: <b>0 800 213 103</b>. Дзвінки зі стаціонарних
          та мобільних телефонів у межах України безкоштовні. Контактний центр
          працює в будні з<b>8:00 до 18:00</b>.
        </li>
        <li>
          <ExternalLink href="https://t.me/+380677213103">
            https://t.me/+380677213103
          </ExternalLink>{" "}
          (безкоштовні дзвінки з мобільного застосунку Telegram)
        </li>
        <li>
          Якщо вам зручно отримати правничу допомогу письмово, напишіть у
          телеграм-бот:{" "}
          <ExternalLink href="https://t.me/LegalAidUkraineBot">
            https://t.me/LegalAidUkraineBot
          </ExternalLink>
        </li>
        <li>
          Або звертайтеся до найближчого бюро правової допомоги:{" "}
          <ExternalLink href="https://bit.ly/bpd_buro">
            https://bit.ly/bpd_buro
          </ExternalLink>
        </li>
      </ul>

      <div className="flex flex-col gap-4">
        <img src={image("мобільна-бригада.jpg")} className="mx-auto w-180" />
        <img
          src={image("як-звернутися-до-юристів.jpg")}
          className="mx-auto w-180"
        />
        <img src={image("домашнє-насильство.jpg")} className="mx-auto w-180" />
        <img src={image("вона-хаб.jpg")} className="mx-auto w-180" />
      </div>
    </div>
  );
}
