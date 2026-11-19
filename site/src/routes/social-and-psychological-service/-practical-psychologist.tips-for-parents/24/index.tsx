import { ImageKitCarousel } from "~/components/carousel";
import { definePost } from "~/components/posts";

export default definePost({
  title: "Як соціальні мережі впливають на ментальне здоров'я",
  preview:
    "Соцмережі стали частиною життя підлітків, але як вони впливають на їхнє ментальне здоров'я? Розповідає ЮНІСЕФ.",
  content: (
    <ImageKitCarousel path="psychological-service/psychologist/Як соціальні мережі впливають на ментальне здоров'я" />
  ),
});
