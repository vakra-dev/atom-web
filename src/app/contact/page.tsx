import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "contact | atom",
  description: "how to reach the atom team: email, feedback from slack, and docs.",
};

export default function ContactPage() {
  return (
    <main className="bg-page min-h-screen pt-28 pb-24">
      <div className="mx-auto max-w-2xl px-6">
        <p className="eyebrow mb-4">contact</p>
        <h1 className="text-4xl font-extrabold tracking-tight text-ink mb-8">
          talk to us.
        </h1>
        <div className="space-y-6 text-base text-ink-2 leading-relaxed">
          <p>
            email works best:{" "}
            <a
              href="mailto:support@useatom.dev"
              className="text-ink underline underline-offset-4"
            >
              support@useatom.dev
            </a>
            . we read everything and reply fast.
          </p>
          <p>
            already using atom? send feedback without leaving slack:{" "}
            <code className="px-1.5 py-0.5 rounded bg-surface-alt border border-line text-ink font-mono text-[13px]">
              @atom feedback your thoughts
            </code>
          </p>
          <p>
            setup questions are usually answered in the{" "}
            <a href="/docs/" className="text-ink underline underline-offset-4">
              docs
            </a>
            , including the full cli and mcp reference.
          </p>
        </div>
      </div>
    </main>
  );
}
