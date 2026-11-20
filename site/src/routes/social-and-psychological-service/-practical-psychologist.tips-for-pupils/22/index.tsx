import { definePost } from "~/components/posts";
import image from "./1.jpg";

export default definePost({
  title: "Комплекс вправ для усвідомленності та спокою",
  preview:
    "Комплекс вправ для усвідомленості та спокою: «5–4–3–2–1», сканування тіла, дихання «Квадрат» та інші прості техніки, які допоможуть повернутися в «тут і зараз».",
  content: <img src={image} className="w-full" />,
});
