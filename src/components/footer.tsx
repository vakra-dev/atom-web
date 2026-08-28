import Link from "next/link";
import { AtomMark } from "./atom-mark";

const groups = [
  {
    title: "product",
    links: [
      { label: "how it works", href: "/#how-it-works" },
      { label: "features", href: "/#features" },
      { label: "faq", href: "/#faq" },
    ],
  },
  {
    title: "docs",
    links: [
      { label: "install", href: "/docs/install/" },
      { label: "cli reference", href: "/docs/cli/" },
      { label: "mcp server", href: "/docs/mcp/" },
      { label: "llms.txt", href: "/llms.txt" },
    ],
  },
  {
    title: "company",
    links: [
      { label: "about", href: "/about" },
      { label: "contact", href: "/contact" },
      { label: "privacy", href: "/privacy" },
      { label: "terms", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-surface-alt border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-start justify-between gap-12 px-6 py-16">
        <div className="flex flex-col gap-2">
          <span className="flex items-center gap-2 text-2xl font-semibold text-ink">
            <AtomMark size={26} className="translate-y-0.5" />
            atom
          </span>
          <span className="text-base text-ink-2 max-w-sm leading-relaxed">
            the developer productivity platform for fast moving engineering
            teams.
          </span>
          <span className="text-xs text-ink-2 mt-2">
            &copy; {new Date().getFullYear()} atom
          </span>
        </div>

        <div className="flex flex-wrap gap-16">
          {groups.map((group) => (
            <div key={group.title} className="flex flex-col gap-2">
              <span className="eyebrow mb-1">{group.title}</span>
              {group.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-base text-ink-2 no-underline transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
