import { definePost } from "~/components/posts";
import i1 from "./1.jpg";
import i2 from "./2.jpg";
import i3 from "./3.jpg";

export default definePost({
  title: "Запобігання професійному вигоранню учасників освітнього процесу",
  preview:
    "Професійне вигорання — це стан емоційного, фізичного та розумового виснаження, що виникає внаслідок тривалого стресу на роботі. Пам'ятка про ознаки вигорання, способи його запобігти та короткі практики для відновлення.",
  content: (
    <div className="flex flex-col gap-5">
      <img src={i1} />
      <img src={i2} />
      <img src={i3} />
    </div>
  ),
});
