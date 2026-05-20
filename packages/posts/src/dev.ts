import { write } from "./local";
import { processPosts } from "./process";
import { getRoot } from "./root";

const root = await getRoot();
const data = await processPosts(root);

write(root, data);
