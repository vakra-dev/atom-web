import type { Metadata } from "next";
import Link from "next/link";
import { docSections } from "../../lib/docs";

export const metadata: Metadata = {
  title: "docs | atom",
  description:
    "how to install and use atom: cli, mcp server, slack commands, pr reminders, and standups.",
};

export default function DocsHub() {
  return (
    <main>
      <p className="eyebrow mb-4">docs</p>
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink mb-4">
        how to use atom.
      </h1>
      <p className="text-lg text-ink-2 mb-12 max-w-2xl leading-relaxed">
        everything here is also plain markdown. agents can start from{" "}
        <a href="/llms.txt" className="text-ink underline underline-offset-4">
          llms.txt
        </a>{" "}
        or read any page raw at{" "}
        <code className="px-1.5 py-0.5 rounded bg-surface-alt border border-line font-mono text-[0.85em]">
          /docs/&lt;page&gt;.md
        </code>
        .
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {docSections.map((s) => (
          <Link
            key={s.slug}
            href={`/docs/${s.slug}/`}
            className="rounded-xl border border-line bg-surface p-6 no-underline transition-colors hover:border-ink-4 block"
          >
            <h2 className="text-lg font-semibold text-ink mb-2">{s.title}</h2>
            <p className="text-base text-ink-2 leading-relaxed">{s.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
