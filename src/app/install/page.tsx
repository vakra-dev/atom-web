import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "install | atom",
  description:
    "set up atom in about two minutes from your terminal, or point your coding agent at our instructions.",
};

const Code = ({ children }: { children: string }) => (
  <pre className="mt-3 mb-6 overflow-x-auto rounded-lg border border-line bg-[#0A0A0A] px-5 py-4 font-mono text-[13.5px] leading-relaxed text-white">
    {children}
  </pre>
);

export default function InstallPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-ink">
        install atom
      </h1>
      <p className="mt-3 leading-relaxed text-ink-2">
        atom runs from your terminal, no dashboard required. setup takes about
        two minutes and three browser clicks.
      </p>

      <div className="mt-8 rounded-lg border border-line bg-surface-alt px-5 py-4">
        <p className="text-sm leading-relaxed text-ink-2">
          <span className="font-semibold text-ink">
            using claude code or another coding agent?
          </span>{" "}
          point it at{" "}
          <a
            href="/llms-install.md"
            className="font-mono text-[13px] text-ink underline"
          >
            useatom.dev/llms-install.md
          </a>{" "}
          and say &ldquo;set up atom&rdquo;. it will run every step below and
          ask you to click the browser approvals.
        </p>
      </div>

      <h2 className="mt-10 mb-1 text-xl font-semibold text-ink">
        1. install the cli
      </h2>
      <Code>npm install -g @useatom/cli</Code>

      <h2 className="mt-2 mb-1 text-xl font-semibold text-ink">2. sign in</h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-2">
        opens github in your browser, then returns to the terminal.
      </p>
      <Code>atom login</Code>

      <h2 className="mt-2 mb-1 text-xl font-semibold text-ink">
        3. run setup
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-2">
        creates your workspace, installs the github app on your org, adds the
        bot to slack, and maps your first repo to a channel. resumable, so re-run
        it anytime.
      </p>
      <Code>atom init</Code>

      <h2 className="mt-2 mb-1 text-xl font-semibold text-ink">
        4. map repos to channels
      </h2>
      <Code>{`atom map org/repo "#channel"\natom status`}</Code>

      <p className="mt-2 text-sm leading-relaxed text-ink-2">
        that&rsquo;s it. open a pull request and watch it land in slack.
        someone else holds the github or slack admin access? run{" "}
        <span className="font-mono text-[13px] text-ink">atom invite</span> and
        they can finish just their step.
      </p>

      <h2 className="mt-10 mb-1 text-xl font-semibold text-ink">
        talk to atom from your agent
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-2">
        atom ships an mcp server. after setup, your coding agent can map
        repos, list channels, and check status conversationally.
      </p>
      <Code>claude mcp add atom -- atom mcp</Code>
    </article>
  );
}
