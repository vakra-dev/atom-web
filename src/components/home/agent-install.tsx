"use client";

import { FadeIn } from "../ui/fade-in";
import { Term, TC } from "../ui/term";

export function AgentInstall() {
  return (
    <section className="bg-surface-alt border-y border-line">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <FadeIn>
          <p className="eyebrow mb-4">for coding agents</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-8">
            tell your agent to set it up.
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="space-y-4 text-base text-ink-2 leading-relaxed mb-8">
            <p>
              every page on this site has a markdown twin, and{" "}
              <a href="/llms.txt" className="text-ink underline underline-offset-4">
                llms.txt
              </a>{" "}
              maps them all. point claude code or any coding agent at useatom.dev
              and it can read the docs, install the cli, connect github and slack,
              and map your repos while you watch.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.25}>
          <Term
            label="claude code"
            copyText={'claude "set up atom for my team by following https://useatom.dev/llms-install.md"'}
          >
            <TC c="dim">$</TC> claude <TC c="ok">&quot;set up atom for my team by following</TC>{"\n"}
            {"  "}<TC c="ok">https://useatom.dev/llms-install.md&quot;</TC>{"\n"}
            {"\n"}
            <TC c="dim"># and give it the atom mcp server:</TC>{"\n"}
            <TC c="dim">$</TC> claude mcp add atom -- atom mcp
          </Term>
        </FadeIn>
      </div>
    </section>
  );
}
