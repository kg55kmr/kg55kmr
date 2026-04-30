import { Pdf } from "~/components/pdf";
import pdf from "./1.pdf";

export const title = "Що таке статеве виховання і чому це важливо";

export function Content() {
  return <Pdf src={pdf} />;
}
