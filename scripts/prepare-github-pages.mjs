import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const outputDirectory = join(process.cwd(), ".vercel", "output", "static");
const indexFile = join(outputDirectory, "index.html");
const fallbackFile = join(outputDirectory, "404.html");

if (!existsSync(indexFile)) {
  throw new Error(`GitHub Pages build is missing ${indexFile}`);
}

copyFileSync(indexFile, fallbackFile);
