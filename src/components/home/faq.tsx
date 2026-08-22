"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, Stagger, StaggerItem } from "../ui/fade-in";

const faqs = [
  {
    q: "how long does setup take?",
    a: "about two minutes. run npx @useatom/cli init in your terminal. it signs you in with github, installs the github app and the slack bot, and maps your first repo to a channel. notifications start flowing immediately.",
  },
  {
    q: "does @atom approve really count as my approval?",
    a: "yes. when you link your account, atom holds a github token that acts as you. approvals, change requests, comments, assignments, and labels all land on github under your name. approving never falls back to a bot account.",
  },
  {
    q: "how noisy is it?",
    a: "one message per event, never two. the pr message edits itself in place when status changes instead of reposting. you get a dm only when something waits on you, and the dm badge updates itself once it no longer does. errors and help are visible only to the person who asked.",
  },
  {
    q: "is my code safe?",
    a: "atom never reads or stores your source code. it receives webhook metadata from github: pr titles, usernames, branch names, comments, and review states. your code stays on github.",
  },
  {
    q: "how is this different from github's own slack integration?",
    a: "github's integration posts a separate message per event with no memory. atom keeps one living thread per pull request, lets you act on it from slack as yourself, and adds reminders and standups. it is a workflow, not a firehose.",
  },
  {
    q: "what do the standups look like?",
    a: "participants get a dm nudge at a time you choose, reply in plain words, and atom logs it. a single board message posts to your channel and fills in live as updates land, with a waiting list that shrinks. no forms, no thread spam.",
  },
  {
    q: "can my coding agent set atom up?",
    a: "yes, that is a first-class path. the docs ship in markdown with an llms.txt index, the cli is fully non-interactive with --json output, and an mcp server exposes setup and config as tools. point your agent at useatom.dev and ask it to install atom.",
  },
  {
    q: "can i control which repos post where?",
    a: "yes. only repos with a channel mapping generate notifications. one channel can carry many repos. mappings, reminders, and standups are all configurable from slack, the cli, or the mcp server.",
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
