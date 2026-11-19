import { definePost } from "~/components/posts";
import image from "./1.jpg";

export default definePost({
  title: "Як батькам підтримати дитину в укритті?",
  preview:
    "Корисні поради та рекомендації для батьків про те, як заспокоїти, відволікти та психологічно підтримати дитину під час перебування в укритті.",
  content: <img src={image} className="mx-auto w-148" />,
});
