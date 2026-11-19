import { ImageKitCarousel } from "~/components/carousel";
import { definePost } from "~/components/posts";

export default definePost({
  title: "Особисті кордони дитини: Як їх встановити та захистити",
  preview:
    "Як навчити дитину розуміти і захищати свої особисті кордони? Пояснюємо батькам, з чого почати.",
  content: (
    <div className="content">
      <p>
        Дорослі вчать дітей поваги до інших людей. Проте не менш важливо
        сформувати у дитини розуміння власних кордонів і вміння захищати їх, щоб
        вона змогла гармонійно вибудовувати взаємини з іншими протягом життя.
      </p>
      <ImageKitCarousel path="psychological-service/psychologist/Особисті кордони дитини: Як їх встановити та захистити" />
    </div>
  ),
});
