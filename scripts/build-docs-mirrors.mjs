import fs from "node:fs";
import path from "node:path";

// docs pages ship as markdown twins: src/content/docs/*.md is the single
// source, mirrored to public/docs/ for raw access and concatenated into
// public/llms-full.txt for agents that want everything at once.

const root = process.cwd();
const srcDir = path.join(root, "src", "content", "docs");
const outDir = path.join(root, "public", "docs");

const order = ["install", "slack", "insights", "cli", "mcp", "reminders", "standups"];

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

const parts = [];

for (const slug of order) {
  const file = path.join(srcDir, `${slug}.md`);
  const content = fs.readFileSync(file, "utf8");
  fs.writeFileSync(path.join(outDir, `${slug}.md`), content);
  parts.push(content.trim());
}

const header = `# atom, full documentation

> atom is a github to slack platform for engineering teams: living pr threads, review actions attributed to you, pr reminders, and standups. install with \`npx @useatom/cli init\`. this file concatenates every docs page; individual pages live at https://useatom.dev/docs/<page>.md
`;

fs.writeFileSync(
  path.join(root, "public", "llms-full.txt"),
  [header, ...parts].join("\n\n---\n\n") + "\n"
);

console.log(`mirrored ${order.length} docs pages and built llms-full.txt`);
