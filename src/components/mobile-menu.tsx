"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

interface MobileMenuProps {
  links: { href: string; label: string }[];
  appUrl: string;
}

export function MobileMenu({ links, appUrl }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-ink-2"
        aria-label="Toggle menu"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-14 z-50 border-b border-line bg-page px-6 py-4">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-md px-3 py-3 text-base text-ink-2 no-underline transition-colors hover:bg-surface-alt hover:text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={appUrl}
              className="mt-2 rounded-md bg-dark px-3 py-3 text-center text-base font-medium text-white no-underline"
            >
              get started
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
