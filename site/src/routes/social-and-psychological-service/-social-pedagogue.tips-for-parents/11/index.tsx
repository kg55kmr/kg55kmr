import { definePost } from "~/components/posts";
import image from "./1.jpg";

export default definePost({
  title: "Пам'ятка для батьків у час воєнної небезпеки",
  preview:
    "Важливі правила та поради для батьків у період воєнної небезпеки: як подбати про безпеку дитини, підготуватися до надзвичайних ситуацій та підтримувати психологічний спокій у родині.",
  content: <img src={image} className="mx-auto w-148" />,
});
