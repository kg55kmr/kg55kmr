import { definePost } from "~/components/posts";
import image from "./1.jpg";

export default definePost({
  title: "Медіаграмотність",
  preview:
    "Інформаційно-наочний матеріал з медіаграмотності: як критично сприймати інформацію в медіа, перевіряти джерела та розпізнавати маніпуляції й фейки.",
  content: <img src={image} className="mx-auto w-180" />,
});
