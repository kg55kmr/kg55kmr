import { definePost } from "~/components/posts";
import image from "./1.jpg";

export default definePost({
  title: "Рюкзак моїх суперсил",
  preview:
    "Зберіть у уявний рюкзак усе, що додає вам сил: улюблені речі, риси характеру й вміння. Він завжди буде з вами в дорозі.",
  content: <img src={image} className="w-full" />,
});
