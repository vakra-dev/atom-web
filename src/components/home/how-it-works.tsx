"use client";

import { Term, TC } from "../ui/term";
import { FadeIn, Stagger, StaggerItem } from "../ui/fade-in";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-page">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <FadeIn>
          <p className="eyebrow mb-4">how it works</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-16">
            set up in two minutes. stay in sync from day one.
          </h2>
        </FadeIn>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-line rounded-xl overflow-hidden bg-surface" stagger={0.12}>
          <StaggerItem className="p-6 md:border-r border-b md:border-b-0 border-line">
            <p className="text-base font-semibold text-ink-2 mb-2">01</p>
            <h3 className="text-lg font-semibold text-ink mb-2">connect</h3>
            <p className="text-base text-ink-2 leading-relaxed">
              Install Atom on your GitHub organization and Slack workspace. Map repositories to
              the channels where your team already works.
            </p>
          </StaggerItem>

          <StaggerItem className="p-6 md:border-r border-b md:border-b-0 border-line flex flex-col">
            <p className="text-base font-semibold text-ink-2 mb-2">02</p>
            <h3 className="text-lg font-semibold text-ink mb-3">track</h3>
            <p className="text-base text-ink-2 leading-relaxed mb-4">
              Every pull request appears as a status card in your channel. [OPEN] to [MERGED].
              One glance shows you what's moving and what's not.
            </p>
            <div className="mt-auto">
              <Term label="status">
                <TC c="ok">[OPEN]</TC>    <TC c="dim">#412 add reminder timezones</TC>{"\n"}
                <TC c="flag">[MERGED]</TC>  <TC c="dim">#318 dark-mode parity</TC>{"\n"}
                <TC c="warn">[DRAFT]</TC>   <TC c="dim">#207 remote config</TC>
              </Term>
            </div>
          </StaggerItem>

          <StaggerItem className="p-6">
            <p className="text-base font-semibold text-ink-2 mb-2">03</p>
            <h3 className="text-lg font-semibold text-ink mb-2">engage</h3>
            <p className="text-base text-ink-2 leading-relaxed">
              Reviews, comments, and approvals flow into threaded replies. Developers get mentioned
              when they need to act. Everything about a PR lives in one thread.
            </p>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
