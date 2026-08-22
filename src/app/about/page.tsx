import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "about | atom",
  description:
    "atom turns pull requests into living slack threads, lets teams review as themselves on github, and runs pr reminders and daily standups.",
};

export default function AboutPage() {
  return (
    <main className="bg-page min-h-screen pt-28 pb-24">
      <div className="mx-auto max-w-2xl px-6">
        <p className="eyebrow mb-4">about</p>
        <h1 className="text-4xl font-extrabold tracking-tight text-ink mb-8">
          why atom exists.
        </h1>
        <div className="space-y-4 text-base text-ink-2 leading-relaxed">
          <p>
            code review slows down in the gap between github, where code gets
            reviewed, and slack, where teams actually talk. atom closes that
            gap: every pull request becomes one living thread, review actions
            run on github as the person who typed them, and the same bot
            handles pr reminders and daily standups.
          </p>
          <p>
            atom is also built for the way software gets made now. the cli, the
            mcp server, and docs published as plain markdown mean a coding
            agent can install and configure atom end to end.
          </p>
          <p>
            we are a small team that ships fast and reads every piece of
            feedback, most of which arrives through atom itself via{" "}
            <code className="px-1.5 py-0.5 rounded bg-surface-alt border border-line text-ink font-mono text-[13px]">
              @atom feedback
            </code>{" "}
            in slack.
          </p>
        </div>
      </div>
    </main>
  );
}
