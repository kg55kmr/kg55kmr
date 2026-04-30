import { parsing } from "./parsing.js";
import { prettify } from "./prettify.js";

const years = process.argv[2];

if (years === undefined) throw new Error("No years specified");

const modified = await prettify("data", (p) =>
  process.stdout.write(`prettify: ${p}%   \r`),
);
console.log(`prettify: done (${modified})                     `);

const sha = await parsing(years, (p) =>
  process.stdout.write(`parsing: ${p}%   \r`),
);
console.log(`parsing: done (${sha})                     `);
