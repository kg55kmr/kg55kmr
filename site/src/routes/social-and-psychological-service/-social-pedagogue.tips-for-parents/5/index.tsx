import { definePost } from "~/components/posts";
import i1 from "./1.webp";
import i2 from "./2.webp";

export default definePost({
  title: "Пам'ятка для батьків дітей з особливими освітніми потребами",
  preview:
    "Корисна пам'ятка для батьків дітей з особливими освітніми потребами: ключові поради та орієнтири щодо підтримки дитини, взаємодії в освітньому процесі та створення сприятливих умов розвитку.",
  content: (
    <div className="flex flex-wrap items-center justify-center">
      <img src={i1} className="w-160" />
      <img src={i2} className="w-160" />
    </div>
  ),
});
