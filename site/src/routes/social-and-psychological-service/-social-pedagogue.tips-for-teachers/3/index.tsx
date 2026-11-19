import { definePost } from "~/components/posts";
import image from "./1.jpg";

export default definePost({
  title: "Як виховати стійкість у воєнний час",
  preview:
    "Практичні рекомендації для дорослих щодо підтримки дітей: чому важливо говорити, обмежувати потік новин, дотримуватися розпорядку дня, дбати про себе та вчасно помічати приховані ознаки тривоги і страху.",
  content: <img src={image} className="mx-auto w-148" />,
});
