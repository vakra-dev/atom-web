"use client";

import { FadeIn } from "../ui/fade-in";

export function Solution() {
  return (
    <section className="bg-surface-alt border-y border-line">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <FadeIn>
          <p className="eyebrow mb-4">the solution</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-8">
            one platform. complete pr visibility.
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="space-y-4 text-base text-ink-2 leading-relaxed">
            <p>
              Atom gives your engineering team a single, structured view of every pull request, right
              inside Slack. Every PR gets a live status card and a dedicated thread. Reviews, comments,
              approvals, and assignments flow in as they happen. The right people get notified at the
              right time.
            </p>
            <p>
              No more context switching. No more chasing updates. No more PRs that sit untouched for
              days.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
