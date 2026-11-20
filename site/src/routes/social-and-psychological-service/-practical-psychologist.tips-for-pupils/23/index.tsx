import { definePost } from "~/components/posts";
import image from "./1.jpg";

export default definePost({
  title: "Дерево сили: карта ваших ресурсів",
  preview:
    "Намалюйте своє дерево: коріння, стовбур і крону. Це допоможе побачити, на що ви можете спертися, коли стає важко.",
  content: <img src={image} className="w-full" />,
});
