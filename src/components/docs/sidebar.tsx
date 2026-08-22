"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { DocHeading, DocSection } from "../../lib/docs";

interface DocsSidebarProps {
  sections: DocSection[];
  headings: Record<string, DocHeading[]>;
}

export function DocsSidebar({ sections, headings }: DocsSidebarProps) {
  const pathname = usePathname();
  const activeSlug = pathname.replace(/^\/docs\/?/, "").replace(/\/$/, "");

  return (
    <>
      {/* mobile: horizontal pill row */}
      <nav className="md:hidden -mx-6 px-6 mb-8 overflow-x-auto">
        <div className="flex gap-2 pb-2">
          {sections.map((s) => (
            <Link
              key={s.slug}
              href={`/docs/${s.slug}/`}
              className={`whitespace-nowrap px-3 py-1.5 rounded-full text-sm no-underline border transition-colors ${
                activeSlug === s.slug
                  ? "bg-ink text-white border-ink"
                  : "border-line text-ink-2 hover:text-ink hover:border-ink-4"
              }`}
            >
              {s.title}
            </Link>
          ))}
        </div>
      </nav>

      {/* desktop: sticky index */}
      <nav className="hidden md:block sticky top-24 self-start">
        <Link
          href="/docs/"
          className={`block text-sm font-semibold no-underline mb-4 ${
            activeSlug === "" ? "text-ink" : "text-ink-2 hover:text-ink"
          }`}
        >
          docs
        </Link>
        <ul className="space-y-1 border-l border-line">
          {sections.map((s) => {
            const active = activeSlug === s.slug;
            return (
              <li key={s.slug}>
                <Link
                  href={`/docs/${s.slug}/`}
                  className={`block pl-4 -ml-px border-l py-1.5 text-sm no-underline transition-colors ${
                    active
                      ? "border-ink text-ink font-semibold"
                      : "border-transparent text-ink-2 hover:text-ink"
                  }`}
                >
                  {s.title}
                </Link>
                {active && headings[s.slug]?.length > 0 && (
                  <ul className="mb-2">
                    {headings[s.slug].map((h) => (
                      <li key={h.anchor}>
                        <a
                          href={`#${h.anchor}`}
                          className="block pl-8 -ml-px border-l border-transparent py-1 text-[13px] text-ink-3 no-underline hover:text-ink transition-colors"
                        >
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
        <div className="mt-6 pt-4 border-t border-line space-y-2">
          <a
            href="/llms.txt"
            className="block text-[13px] text-ink-3 no-underline hover:text-ink font-mono"
          >
            llms.txt
          </a>
          <a
            href="/llms-full.txt"
            className="block text-[13px] text-ink-3 no-underline hover:text-ink font-mono"
          >
            llms-full.txt
          </a>
        </div>
      </nav>
    </>
  );
}
