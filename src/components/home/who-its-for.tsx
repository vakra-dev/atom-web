"use client";

import { FadeIn, Stagger, StaggerItem } from "../ui/fade-in";

const personas = [
  {
    title: "engineering leaders",
    body: "you need visibility into review flow without micromanaging it. atom gives you a live view of what is open, what is blocked, and what has been sitting too long.",
    bullets: [
      "scheduled summaries of open prs per channel",
      "standups with a live board, no extra bot",
      "channel-level visibility without another dashboard",
    ],
  },
  {
    title: "developers",
    body: "you should not have to check github to know whether your pr moved. atom brings every review, comment, and approval into slack the moment it happens.",
    bullets: [
      "a dm only when something actually waits on you",
      "@atom my prs shows everything on your plate",
      "approve and review from the thread, as yourself",
    ],
  },
  {
    title: "teams shipping continuously",
    body: "your pipeline is fast. the human step is the bottleneck. atom compresses the gap between pr opened and pr reviewed.",
    bullets: [
      "notifications in seconds, not inbox digests",
      "threads keep review context in one place",
      "your coding agent can run the whole setup",
    ],
  },
];

export function WhoItsFor() {
  return (
    <section className="bg-page">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <FadeIn>
          <p className="eyebrow mb-4">who it is for</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-12">
            built for teams that live in slack and ship from github.
          </h2>
        </FadeIn>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-4" stagger={0.1}>
          {personas.map((p) => (
            <StaggerItem key={p.title}>
              <div className="rounded-xl border border-line bg-surface p-6 transition-colors hover:border-ink-4 h-full">
                <h3 className="text-lg font-semibold text-ink mb-3">{p.title}</h3>
                <p className="text-base text-ink-2 leading-relaxed mb-4">{p.body}</p>
                <ul className="space-y-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-base text-ink-2">
                      <span className="text-ink-2 text-xs mt-0.5">&#10003;</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
