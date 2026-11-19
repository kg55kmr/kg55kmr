import { definePost } from "~/components/posts";
import image from "./1.jpg";

export default definePost({
  title: "Як дистанційне навчання зробити продуктивним і комфортним",
  preview:
    "Інфографіка та практичні поради для учнів і батьків про те, як організувати робочий простір, режим дня й концентрацію під час дистанційного навчання.",
  content: <img src={image} className="mx-auto w-160" />,
});
