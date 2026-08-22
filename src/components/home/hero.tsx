"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AtomField } from "./atom-field";

const INSTALL_COMMAND = "npx @useatom/cli init";

function InstallCommand() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(INSTALL_COMMAND);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="group flex items-center gap-3 px-5 py-3 bg-dark text-white rounded-md font-mono text-sm transition-all hover:bg-dark-3 cursor-pointer border border-dark-3"
    >
      <span className="text-ink-3 select-none">$</span>
      <span>{INSTALL_COMMAND}</span>
      <span className="text-xs text-ink-3 group-hover:text-white transition-colors select-none">
        {copied ? "copied" : "copy"}
      </span>
    </button>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14">
      <div className="absolute inset-0 bg-page" />
      <AtomField />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 45% 55% at center, rgb(255 255 255 / 0.5) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 pt-16 pb-32 flex flex-col items-center text-center pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-5xl md:text-7xl font-extrabold text-ink tracking-tight max-w-4xl leading-[1.08]"
        >
          pull requests, where your team already is.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-8 text-lg md:text-xl text-ink-2 max-w-2xl mx-auto leading-relaxed"
        >
          atom streams github into tidy slack threads, chases reviews for you,
          and runs your daily standup with a live board. install it in two
          minutes from your terminal, or point your coding agent at our docs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-3 pointer-events-auto"
        >
          <InstallCommand />
          <a
            href="/docs/"
            className="px-8 py-3 border border-line-2 text-ink-2 font-semibold rounded-md no-underline transition-all hover:bg-surface-alt hover:border-ink-3 hover:text-ink cursor-pointer"
          >
            read the docs
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
        >
          {[
            "acts as you on github",
            "one living thread per pr",
            "mcp server for coding agents",
          ].map((pill) => (
            <span
              key={pill}
              className="px-3 py-1 rounded-full border border-line bg-surface/80 text-ink-2 font-mono text-xs"
            >
              {pill}
            </span>
          ))}
        </motion.div>

        {/* Slack mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-14 w-full max-w-2xl mx-auto pointer-events-auto"
        >
          <SlackMockup />
        </motion.div>
      </div>
    </section>
  );
}

function SlackMockup() {
  return (
    <div
      className="rounded-xl bg-dark overflow-hidden text-left border border-dark-3"
      style={{ boxShadow: "0 20px 60px -20px rgba(0, 0, 0, 0.3)" }}
    >
      <div className="flex items-center justify-between px-5 py-3.5 bg-dark-2 border-b border-dark-3">
        <span className="text-base font-semibold text-white"># eng-reviews</span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-good animate-pulse-dot" />
          <span className="text-xs text-ink-3 font-mono">live</span>
        </div>
      </div>

      <div className="px-5 py-4 border-b border-dark-3">
        <div className="flex items-center gap-2 mb-2">
          <StatusPill status="approved" />
          <span className="text-sm text-ink-3 font-mono">atom-core #412</span>
        </div>
        <p className="text-base font-semibold text-white mb-1">add per-channel reminder timezones</p>
        <div className="flex items-center gap-2 text-sm text-ink-3 font-mono mb-3">
          <span>@aria</span><span>&middot;</span>
          <span>3 commits</span><span>&middot;</span>
          <span className="text-good">+128</span><span className="text-bad">&minus;42</span>
        </div>
        <div className="pl-3 border-l border-dark-3 space-y-2">
          <p className="text-sm text-ink-3">aria requested a review from felix</p>
          <p className="text-sm text-ink-3">felix: @atom approve <span className="text-good">&#10003;</span></p>
          <p className="text-sm text-ink-3">felix approved</p>
        </div>
      </div>

      <div className="px-5 py-4 border-b border-dark-3">
        <div className="flex items-center gap-2 mb-2">
          <StatusPill status="merged" />
          <span className="text-sm text-ink-3 font-mono">atom-web #318</span>
        </div>
        <p className="text-base font-semibold text-white mb-1">dark mode parity for the dashboard</p>
        <p className="text-sm text-ink-3 font-mono">merged by @noah &middot; 2 approvals</p>
      </div>

      <div className="px-5 py-4">
        <div className="flex items-center gap-2 mb-2">
          <StatusPill status="open" />
          <span className="text-sm text-ink-3 font-mono">design-tokens #207</span>
        </div>
        <p className="text-base font-semibold text-white mb-1">move repo-channel map to remote config</p>
        <p className="text-sm font-mono">
          <span className="text-ink-3">@kira &middot; </span>
          <span className="text-draft">waiting on review</span>
        </p>
      </div>
    </div>
  );
}

function StatusPill({ status }: { status: "open" | "approved" | "merged" }) {
  const config = {
    open:     { label: "open",     color: "var(--good)" },
    approved: { label: "approved", color: "var(--good)" },
    merged:   { label: "merged",   color: "var(--merged)" },
  }[status];

  return (
    <span
      className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-mono font-medium uppercase tracking-wider"
      style={{ background: `${config.color}20`, color: config.color }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: config.color }} />
      {config.label}
    </span>
  );
}
