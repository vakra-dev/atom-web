"use client";

import { useState } from "react";
import { FadeIn } from "../ui/fade-in";

const INSTALL_COMMAND = "npx @useatom/cli init";

export function BottomCta() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(INSTALL_COMMAND);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-page">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <FadeIn>
          <div className="rounded-2xl bg-dark p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 max-w-2xl mx-auto leading-tight">
              one bot for prs, reminders, and standups.
            </h2>
            <p className="text-base text-ink-3 mb-10 max-w-xl mx-auto">
              install it in two minutes from your terminal, or point your coding
              agent at our docs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={copy}
                className="inline-flex items-center gap-3 px-6 py-3 bg-white text-ink font-mono text-sm rounded-md transition-all hover:bg-[#E5E5E5] cursor-pointer"
              >
                <span className="text-ink-3 select-none">$</span>
                <span>{INSTALL_COMMAND}</span>
                <span className="text-xs text-ink-3 select-none">
                  {copied ? "copied" : "copy"}
                </span>
              </button>
              <a
                href="/docs/"
                className="inline-flex px-6 py-3 border border-dark-3 text-white font-semibold rounded-md no-underline transition-all hover:bg-dark-3 cursor-pointer"
              >
                read the docs
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
