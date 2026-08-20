"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, Stagger, StaggerItem } from "../ui/fade-in";

const faqs = [
  {
    q: "how long does setup take?",
    a: "Two minutes. Install the GitHub App, add Atom to Slack, map your repos to channels. Notifications start flowing immediately.",
  },
  {
    q: "which github events does atom track?",
    a: "PR opened, closed, merged, reopened. Reviews (approved, commented, changes requested). Comments, review comments, assignments, review requests, and new commits. Every meaningful PR event is captured.",
  },
  {
    q: "is my code safe?",
    a: "Atom never reads or stores your source code. We receive webhook metadata from GitHub: PR titles, usernames, branch names, comments, and review states. Your code stays on GitHub.",
  },
  {
    q: "how is this different from github's slack integration?",
    a: "GitHub's integration posts individual event messages, unstructured and noisy. Atom creates one status card per PR with a dedicated thread for all activity. Structured. Threaded. Actionable. It also provides slash commands, daily reminders, intelligent routing, and identity-mapped mentions.",
  },
  {
    q: "does it work with github enterprise?",
    a: "Atom supports GitHub.com and GitHub Enterprise Cloud. GitHub Enterprise Server support is on the roadmap.",
  },
  {
    q: "do all team members need to configure atom?",
    a: "No. One admin installs the integrations and maps repos to channels. Team members link their accounts with /atom connect to enable smart mentions.",
  },
  {
    q: "can developers receive dm notifications?",
    a: "Yes. Atom posts to channels for team visibility. Individual developers can opt into DMs for events that directly involve them, like review requests, assignments, and mentions.",
  },
  {
    q: "can i control which repos send notifications?",
    a: "Yes. Only repos with an active channel mapping generate notifications. Add or remove mappings at any time from the dashboard.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-surface-alt border-y border-line">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <FadeIn>
          <p className="eyebrow mb-4">faq</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-8">
            common questions
          </h2>
        </FadeIn>

        <Stagger stagger={0.06}>
          {faqs.map((faq, i) => (
            <StaggerItem key={i}>
              <FaqItem q={faq.q} a={faq.a} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-line">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between cursor-pointer py-5 text-left text-lg font-semibold text-ink select-none"
      >
        {q}
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-4 text-ink-3 text-lg shrink-0"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden"
          >
            <p className="text-base text-ink-2 leading-relaxed pb-5">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
