import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-page min-h-screen pt-28 pb-24">
      <div className="mx-auto max-w-2xl px-6">
        <p className="eyebrow mb-4">404</p>
        <h1 className="text-4xl font-extrabold tracking-tight text-ink mb-4">
          this page does not exist.
        </h1>
        <p className="text-base text-ink-2 leading-relaxed mb-8">
          the page you are looking for was moved or never existed. here is
          where everything lives:
        </p>
        <ul className="space-y-3 text-base text-ink-2">
          <li>
            <Link href="/" className="text-ink underline underline-offset-4">
              home
            </Link>{" "}
            covers what atom does
          </li>
          <li>
            <Link href="/docs/" className="text-ink underline underline-offset-4">
              docs
            </Link>{" "}
            covers install, the cli, the mcp server, slack commands, reminders,
            and standups
          </li>
          <li>
            <a href="/llms.txt" className="text-ink underline underline-offset-4">
              llms.txt
            </a>{" "}
            indexes every page as plain markdown for agents, and{" "}
            <a href="/sitemap.xml" className="text-ink underline underline-offset-4">
              sitemap.xml
            </a>{" "}
            lists every url
          </li>
        </ul>
      </div>
    </main>
  );
}
