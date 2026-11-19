import { definePost } from "~/components/posts";
import image from "./1.jpg";

export default definePost({
  title: "Антитривожна шпаргалка",
  preview:
    "Не все в нашому житті залежить від нас. Дізнайтеся, що справді в межах вашого контролю, а що краще відпустити, щоб зберегти спокій і сили.",
  content: <img src={image} className="mx-auto w-160" />,
});
