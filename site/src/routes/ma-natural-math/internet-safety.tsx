import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "~/components/link";

export const Route = createFileRoute("/ma-natural-math/internet-safety")({
  component: RouteComponent,
  staticData: {
    title: "Безпека в інтернеті",
  },
});

function RouteComponent() {
  return (
    <div className="content">
      <h1>Правила користування мережею Інтернет</h1>
      <ul>
        <li>
          Не повідомляй незнайомцям, з якими ти спілкуєшся в Інтернеті, про
          своїх рідних, місце їхньої роботи, свою адресу та не поспішай
          зустрічатися з незнайомцями в реальному житті.
        </li>
        <li>
          Не потрібно відповідати на повідомлення, що надходять з незнайомих
          номерів, покажи таке повідомленням батькам, адже це можуть бути
          шахраї.
        </li>
        <li>
          Щоб створити надійний пароль, комбінуй букви, цифри та інші символи
          Тримай свої паролі у секреті.
        </li>
        <li>
          Не вся інформація в Інтернеті є правдивою, завжди перевіряй
          достовірність джерела.
        </li>
        <li>
          Не пиши в Інтернеті того, що не зможеш сказати людині в обличчя.
        </li>
        <li>Подумай двічі, перш ніж поширити будь-яку інформацію.</li>
        <li>
          Не поширюй в Інтернеті контент незаконного або непристойного змісту.
        </li>
        <li>
          Переконайся, що твій профіль у соціальній мережі закритий від
          сторонніх (перевір налаштування безпеки).
        </li>
        <li>
          Додавай "у друзі" тільки тих, кого дійсно знаєш: навіть якщо це друзі
          твоїх друзів, але особисто ви не знайомі.
        </li>
        <li>
          Дітям слід питати дозволу, перш ніж завантажувати фотографії або
          позначати когось на фотографіях в соціальних мережах.
        </li>
        <li>
          Не переходь за посиланнями, прикріпленим в повідомленнях – безпечніше
          вводити адресу в рядок браузера самому.
        </li>
      </ul>

      <div className="mx-auto my-14 w-180 border border-black p-4 text-center">
        <div>
          <ExternalLink href="https://coggle.it/diagram/YdQhoCBjhuYS747m/t/правові-аспекти-кібербезпеки-у-та-захисту-персональних-даних/d34b5acdc6dbd50e03b3404341a0a3bc153d6dd0bc72c6e3365b352fec5874fd">
            Правові аспекти кібербезпеки в навчальному процесі
          </ExternalLink>
        </div>
        <p className="font-bold">
          В даному ресурсі зібрано посилання на діючі в Україні та Європейському
          союзі законодавчі акти щодо кібербезпеки та захисту персональних
          даних, рекомендації для батьків та освітян із захисту дітей в
          Інтернеті, навчальні матеріали. Автор ресурсу - Юлія Булова
        </p>
      </div>

      <div>
        <h2>Поради та інструменти для батьків</h2>
        <ul>
          <li>
            <ExternalLink href="https://starylev.com.ua/blogs/dity-v-sviti-gadzhetiv">
              Діти в світі ґаджетів
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://sotka.life/shchob-dity-ne-zalypaly-v-gadzhetakh-lajfkhaky-vid-dribnoty/">
              Щоб діти не залипали в ґаджетах: лайфхаки від «Дрібноти»
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://stop-sexting.in.ua/igry-ta-vpravy-dlya-ditej-ta-doroslyh-bezpechne-spilkuvannya-v-interneti/">
              Підбірка ігор та вправ №1 Як впевнитись, що дитина знає правила
              безпечного спілкування в Інтернеті?
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://stop-sexting.in.ua/igry-ta-vpravy-dlya-ditej-ta-doroslyh-2-bezpechne-spilkuvannya-v-interneti/">
              Підбірка ігор та вправ №2 Розуміння основних правил поведінки в
              Інтернеті – те, що може посилити безпечне перебування дитини в
              мережі
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://stop-sexting.in.ua/igry-ta-vpravy-dlya-ditej-ta-doroslyh-4-bezpechne-spilkuvannya-v-interneti/">
              Ігри та вправи для дітей та дорослих #4: безпечне спілкування в
              Інтернеті
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://stop-sexting.in.ua/igry-ta-vpravy-dlya-ditej-ta-doroslyh-5-bezpechne-spilkuvannya-v-interneti/">
              Ігри та вправи для дітей та дорослих #5: безпечне спілкування в
              Інтернеті
            </ExternalLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
