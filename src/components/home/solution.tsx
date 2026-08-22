"use client";

import { FadeIn } from "../ui/fade-in";

export function Solution() {
  return (
    <section className="bg-surface-alt border-y border-line">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <FadeIn>
          <p className="eyebrow mb-4">the solution</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-8">
            code review at the speed of conversation.
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="space-y-4 text-base text-ink-2 leading-relaxed">
            <p>
              every pull request becomes one living thread in the channel that owns
              the repo. the main message carries the status, from open through
              changes requested and approved to merged, and edits itself in place as
              things happen. reviews, comments, pushes, and assignments land as
              tidy replies underneath.
            </p>
            <p>
              and the thread is not just a feed. reply with{" "}
              <code className="px-1.5 py-0.5 rounded bg-surface border border-line text-ink font-mono text-[13px]">
                @atom approve
              </code>{" "}
              or{" "}
              <code className="px-1.5 py-0.5 rounded bg-surface border border-line text-ink font-mono text-[13px]">
                @atom request changes needs tests
              </code>{" "}
              and the review lands on github attributed to you. no tab switch, no
              bot in your review history.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
