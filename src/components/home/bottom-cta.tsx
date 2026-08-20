"use client";

import { FadeIn } from "../ui/fade-in";
import { urls } from "../../lib/urls";

export function BottomCta() {
  return (
    <section className="bg-page">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <FadeIn>
          <div className="rounded-2xl bg-dark p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 max-w-2xl mx-auto leading-tight">
              built for teams that refuse to let code review be the bottleneck.
            </h2>
            <p className="text-base text-ink-3 mb-10 max-w-xl mx-auto">
              set up in two minutes. no credit card required.
            </p>
            <a
              href={urls.app}
              className="inline-flex px-8 py-3 bg-white text-ink font-semibold rounded-md no-underline transition-all hover:bg-[#E5E5E5] hover:scale-[1.02] cursor-pointer"
            >
              get started
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
