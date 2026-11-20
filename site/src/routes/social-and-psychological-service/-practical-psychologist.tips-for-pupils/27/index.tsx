import { definePost } from "~/components/posts";
import image from "./1.jpg";

export default definePost({
  title: "Вправа «Коло контролю»",
  preview:
    "Що в моїх руках, а що ні? Розділіть думки, слова й рішення від минулого, майбутнього та чужих реакцій, щоб повернути собі спокій.",
  content: <img src={image} className="w-full" />,
});
