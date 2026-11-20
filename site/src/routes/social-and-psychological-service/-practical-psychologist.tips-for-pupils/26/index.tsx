import { definePost } from "~/components/posts";
import image from "./1.jpg";

export default definePost({
  title: "Мої опори: люди, місця, заняття",
  preview:
    "Просити про допомогу не соромно. Дізнайтеся, до кого можна звернутися: від найближчих людей до служб підтримки.",
  content: <img src={image} className="w-full" />,
});
