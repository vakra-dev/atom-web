"use client";

import Link from "next/link";
import { MobileMenu } from "./mobile-menu";

const navLinks = [
  { href: "/#how-it-works", label: "how it works" },
  { href: "/#features", label: "features" },
  { href: "/docs/", label: "docs" },
  { href: "/#faq", label: "faq" },
];

export function MarketingNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-page/95 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold text-ink no-underline">
          atom
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base text-ink-2 no-underline transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/docs/install/"
            className="hidden text-base font-medium text-white bg-ink px-4 py-1.5 rounded-md no-underline transition-all hover:bg-dark-3 hover:scale-[1.02] cursor-pointer md:inline-flex"
          >
            get started
          </a>
          <MobileMenu links={navLinks} appUrl="/docs/install/" />
        </div>
      </div>
    </header>
  );
}
