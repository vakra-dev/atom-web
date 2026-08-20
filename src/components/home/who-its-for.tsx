"use client";

import { FadeIn, Stagger, StaggerItem } from "../ui/fade-in";

const personas = [
  {
    title: "engineering leaders",
    body: "You need visibility into your team's review process without micromanaging it. Atom gives you a real-time view of what's open, what's blocked, and what's been sitting too long.",
    bullets: [
      "real-time PR velocity across every repository",
      "automated reminders that catch stale PRs early",
      "channel-level visibility without additional tooling",
    ],
  },
  {
    title: "developers",
    body: "You shouldn't have to check GitHub to know if your PR was reviewed. Atom brings every review, comment, and approval into Slack the moment it happens.",
    bullets: [
      "instant notifications for reviews, comments, and merges",
      "one command to see everything waiting on you",
      "tagged mentions that reach you where you work",
    ],
  },
  {
    title: "teams shipping continuously",
    body: "Your deploy pipeline is fast. Your bottleneck is the human step. Atom compresses the gap between \"PR opened\" and \"PR reviewed.\"",
    bullets: [
      "sub-minute notification latency",
      "structured threads that keep review context organized",
      "a communication layer that matches the speed of your pipeline",
    ],
  },
];

export function WhoItsFor() {
  return (
    <section className="bg-page">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <FadeIn>
          <p className="eyebrow mb-4">who it's for</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-12">
            purpose built for modern engineering organizations.
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
