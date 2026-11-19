import { definePost } from "~/components/posts";
import image from "./1.jpg";

export default definePost({
  title: "Як виховати стійкість у воєнний час",
  preview:
    "Практичні рекомендації для дорослих щодо підтримки дітей у воєнний час: як зберігати спокій, підтримувати психологічну стійкість дитини та створювати відчуття безпеки.",
  content: <img src={image} className="mx-auto w-148" />,
});
