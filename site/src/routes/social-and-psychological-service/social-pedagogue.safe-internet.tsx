import { createFileRoute } from "@tanstack/react-router";
import { ImageKitCarousel } from "~/components/carousel";
import { asset } from "~/lib/utils";

export const Route = createFileRoute(
  "/social-and-psychological-service/social-pedagogue/safe-internet",
)({
  component: RouteComponent,
  staticData: {
    title: "Безпечний інтернет",
  },
});

function RouteComponent() {
  return (
    <div className="content">
      <div className="float-right flex flex-col gap-5 md:mr-2">
        <img src={asset("images/безпечний-інтернет-1.jpg")} className="w-70" />
        <img src={asset("images/безпечний-інтернет-2.jpg")} className="w-70" />
      </div>
      <p>
        Наша країна мужньо бореться з окупантами! У тому числі на інформаційному
        фронті в мережі Інтернет.
      </p>
      <p>
        Ні для кого не секрет, що компанії збирають у мирний час особисті дані
        користувача.
      </p>
      <p>
        У час війни вороги можуть дізнатися про кожен ваш клік та будь-яку
        інформацію, яку ви вводите під час взаємодії в соціальних мережах.
      </p>
      <p>
        Щоб убезпечити дітей під час користування Інтернетом, особливо під час
        війни, потрібно знати правила, про які ви тут можете дізнатися.
      </p>
      <p>Вивчайте їх та використайте негайно!</p>
      <p>Будьмо в безпеці!</p>

      <div className="clear-both" />
      <ImageKitCarousel path="psychological-service/social-pedagogue/safe-internet" />
    </div>
  );
}
