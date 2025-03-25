import fs from "node:fs/promises";
import { remark } from "remark";
import remarkDiscordSpoiler from "./plugin.js";

const document = await fs.readFile("input.md", "utf8");

const file = await remark().use(remarkDiscordSpoiler).process(document);

await fs.writeFile("output.md", String(file));
