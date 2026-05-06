import { clientOnlyLazy } from "../client-only-lazy";

export const Pdf = clientOnlyLazy(() => import("./component"));
