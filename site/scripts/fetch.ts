import { writeFile } from "fs/promises";
import { getImageKitImages } from "../src/server/imagekit";

const images = await getImageKitImages("main/header");
await writeFile("src/data/header-images.json", JSON.stringify(images));
