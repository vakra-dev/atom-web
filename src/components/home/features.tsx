"use client";

import { FadeIn, Stagger, StaggerItem } from "../ui/fade-in";
import type { ReactNode } from "react";

function C({ children }: { children: ReactNode }) {
  return (
    <code className="px-1.5 py-0.5 rounded bg-surface-alt border border-line text-ink font-mono text-[13px]">
      {children}
    </code>
  );
}

const features = [
  {
    title: "threaded pr conversations",
    desc: (
      <>
        Every PR gets its own thread. Comments, reviews, approvals, and assignments — one thread,
        one story, from <C>open</C> to <C>merge</C>.
      </>
    ),
  },
  {
    title: "live status tracking",
    desc: (
      <>
        Status cards update in real time. <C>[OPEN]</C> <C>[MERGED]</C> <C>[CLOSED]</C>.
        Your channel becomes a living dashboard of code velocity.
      </>
    ),
  },
  {
    title: "intelligent routing",
    desc: (
      <>
        Map repos to channels. Frontend PRs go to <C>#frontend</C>, platform PRs to{" "}
        <C>#platform</C>. Every notification reaches the right team.
      </>
    ),
  },
  {
    title: "smart mentions",
    desc: (
      <>
        Atom maps GitHub identities to Slack profiles. When a review is requested, the right person
        gets <C>@mentioned</C> directly.
      </>
    ),
  },
  {
    title: "daily pr reminders",
    desc: (
      <>
        Automated summaries of open pull requests. Configure repos, days, and delivery time.
        Surface stale PRs before standup.
      </>
    ),
  },
  {
    title: "slash commands",
    desc: (
      <>
        <C>/atom pr</C> to see open PRs. <C>/atom me</C> for PRs waiting on you.{" "}
        <C>/atom connect</C> to link accounts.
      </>
    ),
  },
  {
    title: "review lifecycle",
    desc: (
      <>
        Requested. Commented. Changes requested. Approved. Every review state is tracked and
        surfaced in the thread.
      </>
    ),
  },
  {
    title: "zero disruption",
    desc: (
      <>
        Atom doesn't change how you write code, branch, or merge. It adds a communication layer
        on top of your existing workflow.
      </>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="bg-surface-alt border-y border-line">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <FadeIn>
          <p className="eyebrow mb-4">features</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-16">
            built for teams that take code review seriously.
          </h2>
        </FadeIn>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.06}>
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="rounded-xl border border-line bg-surface p-7 transition-colors hover:border-ink-4 h-full">
                <h3 className="text-[17px] font-semibold text-ink mb-3">{f.title}</h3>
                <p className="text-base text-ink-2 leading-[1.75]">{f.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
