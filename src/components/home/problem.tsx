"use client";

import { FadeIn } from "../ui/fade-in";

export function Problem() {
  return (
    <section className="bg-page">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <FadeIn>
          <p className="eyebrow mb-4">the problem</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-8">
            code review shouldn't be a guessing game.
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="space-y-4 text-base text-ink-2 leading-relaxed">
            <p>
              Pull requests get lost between tabs, emails, and GitHub notifications that no one reads.
              Reviews take hours because the right person didn't see the request. Engineers interrupt
              their flow just to check if anything needs their attention.
            </p>
            <p>
              The problem isn't your team. It's the gap between where code gets reviewed and where
              your team communicates.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
