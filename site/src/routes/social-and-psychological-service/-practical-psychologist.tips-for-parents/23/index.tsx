import { definePost } from "~/components/posts";
import image from "./1.jpg";

export default definePost({
  title: "Рука психічного здоров'я",
  preview:
    "П'ять простих запитань собі наприкінці дня: чи добре я спав, їв, рухався, спілкувався і відпочивав? Рука психічного здоров'я допоможе це помітити.",
  content: <img src={image} className="mx-auto w-190" />,
});
