import { definePost } from "~/components/posts";
import i1 from "./1.jpg";
import i2 from "./2.jpg";

export default definePost({
  title: "Правила безпечної поведінки в мережі Інтернет",
  preview:
    "Наочні пам'ятки та рекомендації щодо безпечної роботи в мережі Інтернет: захист особистої інформації, обережність під час онлайн-спілкування та цифрова гігієна.",
  content: (
    <div className="flex flex-wrap items-center justify-center">
      <img src={i1} className="w-160" />
      <img src={i2} className="w-140" />
    </div>
  ),
});
