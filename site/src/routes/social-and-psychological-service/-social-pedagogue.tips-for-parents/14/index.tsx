import { ImageKitCarousel } from "~/components/carousel";
import { definePost } from "~/components/posts";

export default definePost({
  title: "Торгівля людьми",
  preview:
    "Інформаційно-профілактична добірка матеріалів про протидію торгівлі людьми: ключові ризики, правила безпечної поведінки та корисні поради від соціально-психологічної служби.",
  content: (
    <ImageKitCarousel path="psychological-service/social-pedagogue/human-trafficking" />
  ),
});
