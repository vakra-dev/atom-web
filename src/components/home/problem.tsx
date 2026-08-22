"use client";

import { FadeIn } from "../ui/fade-in";

export function Problem() {
  return (
    <section className="bg-page">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <FadeIn>
          <p className="eyebrow mb-4">the problem</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-8">
            code review should not be a guessing game.
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="space-y-4 text-base text-ink-2 leading-relaxed">
            <p>
              pull requests get lost between tabs, emails, and github notifications
              nobody reads. reviews take hours because the right person never saw
              the request. engineers break their flow just to check whether anything
              needs them.
            </p>
            <p>
              the problem is not your team. it is the gap between where code gets
              reviewed and where your team actually talks.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
