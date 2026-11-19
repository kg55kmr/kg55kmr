import { ImageKitCarousel } from "~/components/carousel";
import { definePost } from "~/components/posts";

export default definePost({
  title: "Стрес у дітей: як впоратись",
  preview:
    "Чи завжди стрес шкодить дитині і як допомогти їй з ним упоратися? Відповідає психологиня Катерина Базиль.",
  content: (
    <ImageKitCarousel path="psychological-service/psychologist/Стрес у дітей. Як впоратись" />
  ),
});
