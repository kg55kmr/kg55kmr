import { Pdf } from "~/components/pdf";
import pdf from "./1.pdf";

export const title = "Cтатеве виховання";

export function Content() {
  return <Pdf src={pdf} />;
}
