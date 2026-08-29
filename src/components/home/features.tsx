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
    title: "living pr threads",
    desc: (
      <>
        one thread per pull request. the main message flips through its states,
        from <C>open</C> to <C>merged</C>, editing itself in place with title,
        link, commits, and diff counts always current.
      </>
    ),
  },
  {
    title: "act as yourself",
    desc: (
      <>
        <C>@atom approve</C>, <C>request changes</C>, <C>comment</C>,{" "}
        <C>assign</C>, <C>labels</C>, <C>close</C>, <C>reopen</C>. every action
        runs on github under your name, not a bot account. plain language works
        too, like <C>@atom lgtm</C>.
      </>
    ),
  },
  {
    title: "your pr inbox",
    desc: (
      <>
        <C>@atom inbox</C> shows everything that needs you: reviews waiting on
        you, your own prs ranked by what needs action, and where you are
        mentioned. also in your terminal as <C>atom inbox</C>.
      </>
    ),
  },
  {
    title: "team insights",
    desc: (
      <>
        <C>@atom insights</C> answers with real numbers: median time to first
        review, publish to merge, review load, first pass rate. computed live
        from your prs, with the methodology published.
      </>
    ),
  },
  {
    title: "ci status in the thread",
    desc: (
      <>
        checks pass or fail right in the pr thread, with the failing job named
        and linked. approve when green without opening github.
      </>
    ),
  },
  {
    title: "stale pr nudges",
    desc: (
      <>
        when a pr stops moving, atom nudges the right reviewer at one day,
        again at two, and tells the channel at three. any activity resets the
        clock.
      </>
    ),
  },
  {
    title: "merge conflict alerts",
    desc: (
      <>
        know the moment a pr conflicts with its base branch, not at merge time.
        one alert in the thread, and it stays quiet once you fix it.
      </>
    ),
  },
  {
    title: "the monday digest",
    desc: (
      <>
        a week in review for your channel: what merged, how fast reviews went
        compared to last week, who carried the load, and what is stuck.
      </>
    ),
  },
  {
    title: "noise you can actually stand",
    desc: (
      <>
        one message per event, never two. status changes edit existing messages
        instead of reposting. dms only when something waits on you, with badges
        that update themselves when it no longer does.
      </>
    ),
  },
  {
    title: "pr reminders",
    desc: (
      <>
        a scheduled summary of open pull requests per channel, grouped by repo
        with authors and ages. drafts tagged, timezones respected. configure it
        with <C>/atom reminders</C> right in the channel.
      </>
    ),
  },
  {
    title: "standups without the standup bot",
    desc: (
      <>
        participants get a dm nudge, reply in plain words, and a live board in
        your channel fills in as updates land. same tool, one less subscription.
      </>
    ),
  },
  {
    title: "built for coding agents",
    desc: (
      <>
        a real cli and an mcp server ship in one package. your agent can install
        atom, map repos, and configure reminders and standups end to end.{" "}
        <C>claude mcp add atom -- atom mcp</C> and it speaks atom.
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
            github to slack, without the noise.
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
