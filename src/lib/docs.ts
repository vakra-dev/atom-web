import fs from "node:fs";
import path from "node:path";

export interface DocSection {
  slug: string;
  title: string;
  description: string;
}

export const docSections: DocSection[] = [
  {
    slug: "install",
    title: "install",
    description: "one command from your terminal, or hand it to your coding agent.",
  },
  {
    slug: "slack",
    title: "using atom in slack",
    description: "slash commands, channel mentions, and acting on prs as yourself.",
  },
  {
    slug: "cli",
    title: "cli reference",
    description: "every atom command, flag, and environment variable.",
  },
  {
    slug: "mcp",
    title: "mcp server",
    description: "fourteen tools that let coding agents configure atom end to end.",
  },
  {
    slug: "reminders",
    title: "pr reminders",
    description: "scheduled summaries of open pull requests, per channel.",
  },
  {
    slug: "standups",
    title: "standups",
    description: "dm capture, a live board, and no standup bot subscription.",
  },
];

const contentDir = path.join(process.cwd(), "src", "content", "docs");

export function getDocContent(slug: string): string {
  return fs.readFileSync(path.join(contentDir, `${slug}.md`), "utf8");
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export interface DocHeading {
  text: string;
  anchor: string;
}

export function getDocHeadings(slug: string): DocHeading[] {
  const content = getDocContent(slug);
  const headings: DocHeading[] = [];
  for (const line of content.split("\n")) {
    const match = line.match(/^## (.+)$/);
    if (match) {
      headings.push({ text: match[1], anchor: slugifyHeading(match[1]) });
    }
  }
  return headings;
}
