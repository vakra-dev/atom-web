"use client";

import { FadeIn } from "../ui/fade-in";

const bucket = (label: string, rows: Array<[string, string]>) => (
  <div className="px-5 py-4 border-b border-dark-3 last:border-b-0">
    <p className="text-sm font-semibold text-white mb-2">{label}</p>
    {rows.map(([title, note]) => (
      <div key={title} className="mb-2 last:mb-0">
        <p className="text-sm text-white">{title}</p>
        <p className="text-xs text-ink-3 font-mono">{note}</p>
      </div>
    ))}
  </div>
);

export function InboxInsights() {
  return (
    <section className="bg-surface-alt border-y border-line">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <FadeIn>
          <p className="eyebrow mb-4">inbox and insights</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-8">
            know what needs you. know how you are doing.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <FadeIn>
            <div className="space-y-5 text-base text-ink-2 leading-relaxed">
              <p>
                <span className="font-semibold text-ink">one inbox.</span>{" "}
                reviews waiting on you, your prs ranked by what needs action,
                and everywhere you are mentioned.
              </p>
              <p>
                <span className="font-semibold text-ink">real numbers.</span>{" "}
                first review time, review load, first pass rate. live, medians
                not averages.
              </p>
              <p>
                <span className="font-semibold text-ink">wherever you work.</span>{" "}
                slack, your terminal, or your coding agent.
              </p>
              <p className="font-mono text-sm text-ink">
                @atom inbox · @atom insights · @atom stats
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div
              className="rounded-xl bg-dark overflow-hidden text-left border border-dark-3"
              style={{ boxShadow: "0 20px 60px -20px rgba(0, 0, 0, 0.3)" }}
            >
              <div className="flex items-center justify-between px-5 py-3.5 bg-dark-2 border-b border-dark-3">
                <span className="text-base font-semibold text-white">
                  @atom inbox
                </span>
                <span className="text-xs text-ink-3 font-mono">
                  slack · cli · mcp
                </span>
              </div>
              {bucket("needs your review", [
                ["add retry logic to webhook processor (#412)", "aria · waiting 2 days"],
                ["migrate reminders scheduler (#398)", "noah · waiting 4 hours"],
              ])}
              {bucket("your pull requests", [
                ["fix dm badge updates (#401)", "changes requested"],
                ["standup board polish (#405)", "approved and ready to merge"],
              ])}
              {bucket("mentioned or assigned", [
                ["refactor token refresh (#396)", "mentioned by kira · 1 hour ago"],
              ])}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
