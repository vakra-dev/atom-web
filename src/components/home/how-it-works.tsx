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
          <StaggerItem className="p-6 md:border-r border-b md:border-b-0 border-line flex flex-col">
            <p className="text-base font-semibold text-ink-2 mb-2">01</p>
            <h3 className="text-lg font-semibold text-ink mb-2">connect</h3>
            <p className="text-base text-ink-2 leading-relaxed mb-4">
              one command signs you in with github, installs the github app and
              the slack bot, and maps your first repo to a channel.
            </p>
            <div className="mt-auto">
              <Term label="terminal" copyText="npx @useatom/cli init">
                <TC c="dim">$</TC> npx @useatom/cli init{"\n"}
                <TC c="ok">&#10003;</TC> <TC c="dim">signed in as you</TC>{"\n"}
                <TC c="ok">&#10003;</TC> <TC c="dim">github and slack connected</TC>{"\n"}
                <TC c="ok">&#10003;</TC> <TC c="dim">api &#8594; #eng-reviews</TC>
              </Term>
            </div>
          </StaggerItem>

          <StaggerItem className="p-6 md:border-r border-b md:border-b-0 border-line flex flex-col">
            <p className="text-base font-semibold text-ink-2 mb-2">02</p>
            <h3 className="text-lg font-semibold text-ink mb-3">track</h3>
            <p className="text-base text-ink-2 leading-relaxed mb-4">
              every pull request appears as one message that edits itself from
              open to merged. one glance shows what is moving and what is stuck.
            </p>
            <div className="mt-auto">
              <Term label="status">
                <TC c="ok">[approved]</TC> <TC c="dim">#412 reminder timezones</TC>{"\n"}
                <TC c="flag">[merged]</TC>   <TC c="dim">#318 dark mode parity</TC>{"\n"}
                <TC c="warn">[open]</TC>     <TC c="dim">#207 remote config</TC>
              </Term>
            </div>
          </StaggerItem>

          <StaggerItem className="p-6 flex flex-col">
            <p className="text-base font-semibold text-ink-2 mb-2">03</p>
            <h3 className="text-lg font-semibold text-ink mb-2">act</h3>
            <p className="text-base text-ink-2 leading-relaxed mb-4">
              reviews, comments, and pushes flow into the thread. reply to
              approve, request changes, assign, or label, and it lands on github
              as you.
            </p>
            <div className="mt-auto">
              <Term label="#eng-reviews">
                <TC c="dim">you:</TC> @atom approve{"\n"}
                <TC c="ok">&#10003;</TC> <TC c="dim">approved on github as you</TC>
              </Term>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
