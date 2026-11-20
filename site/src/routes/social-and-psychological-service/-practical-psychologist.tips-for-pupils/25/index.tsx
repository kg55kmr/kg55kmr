import { definePost } from "~/components/posts";
import image from "./1.jpg";

export default definePost({
  title: "Коло допомоги: можна звернутись",
  preview:
    "Хто мене вислухає? Де мені спокійно? Що я люблю робити? Дайте відповіді на три прості запитання й знайдіть свої опори.",
  content: <img src={image} className="w-full" />,
});
