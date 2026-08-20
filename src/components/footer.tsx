import Link from "next/link";

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
    title: "company",
    links: [
      { label: "about", href: "/about" },
      { label: "contact", href: "mailto:support@useatom.dev" },
    ],
  },
  {
    title: "legal",
    links: [
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
          <span className="text-lg font-semibold text-ink">atom</span>
          <span className="text-base text-ink-2 max-w-xs leading-relaxed">
            the developer productivity platform for fast moving engineering teams.
          </span>
          <span className="text-xs text-ink-2 mt-2">
            &copy; {new Date().getFullYear()} atom
          </span>
        </div>

        <div className="flex flex-wrap gap-16">
          {groups.map((group) => (
            <div key={group.title} className="flex flex-col gap-2">
              <span className="eyebrow mb-1">{group.title}</span>
              {group.links.map((link) =>
                "external" in link && link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-ink-2 no-underline transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-base text-ink-2 no-underline transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
