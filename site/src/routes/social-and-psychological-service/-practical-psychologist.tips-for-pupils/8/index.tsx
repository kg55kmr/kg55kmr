import { definePost } from "~/components/posts";
import i1 from "./1.jpg";
import i2 from "./2.jpg";

export default definePost({
  title: "COVID-19",
  preview:
    "Інформаційна пам'ятка щодо профілактики коронавірусної інфекції COVID-19: основні симптоми, правила гігієни, захист від зараження та рекомендації для збереження здоров'я.",
  content: (
    <div className="flex flex-wrap items-center justify-center gap-5">
      <img src={i1} className="w-104" />
      <img src={i2} className="w-104" />
    </div>
  ),
});
