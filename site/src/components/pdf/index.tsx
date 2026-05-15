import { clientOnlyLazy } from "../client-only-lazy";
export type { PDFProps } from "./component";

export const Pdf = clientOnlyLazy(() => import("./component"));
