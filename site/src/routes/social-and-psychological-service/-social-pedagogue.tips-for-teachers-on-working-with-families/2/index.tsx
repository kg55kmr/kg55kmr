import { Pdf } from "~/components/pdf";
import pdf from "./1.pdf";

export const title = "Академічна доброчесність у школі";

export function Content() {
  return <Pdf src={pdf} />;
}
