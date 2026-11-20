import { ImageKitCarousel } from "~/components/carousel";
import { definePost } from "~/components/posts";

export default definePost({
  title: "Булінг у навчальному закладі: що це таке і як з ним боротися",
  preview:
    "Булінг - це цькування однієї дитини іншою. Агресивне переслідування, яке досить часто поширене у навчальних закладах",
  content: (
    <ImageKitCarousel path="educational-work/safe-educational-environment/булінг" />
  ),
});
