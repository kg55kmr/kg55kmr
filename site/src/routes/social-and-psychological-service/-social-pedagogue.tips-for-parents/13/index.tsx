import { definePost } from "~/components/posts";
import { Pdf } from "~/components/pdf";
import pdf from "./1.pdf";

export default definePost({
  title: "Cтатеве виховання",
  preview:
    "Навчально-інформаційний матеріал у форматі PDF про статеве виховання: ключові поняття, формування здорових уявлень про тілесність, повагу до особистих кордонів та відповідальну поведінку.",
  content: <Pdf src={pdf} />,
});
