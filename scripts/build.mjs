import { cpSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "dist", "client");

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

cpSync(join(root, "index.html"), join(out, "index.html"));
cpSync(join(root, "src"), join(out, "src"), { recursive: true });
cpSync(join(root, "public"), out, { recursive: true });

console.log("built -> dist/client");
