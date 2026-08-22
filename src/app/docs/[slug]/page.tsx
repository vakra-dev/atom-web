import type { Metadata } from "next";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  docSections,
  getDocContent,
  slugifyHeading,
} from "../../../lib/docs";

export const dynamicParams = false;

export function generateStaticParams() {
  return docSections.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const section = docSections.find((s) => s.slug === slug);
  return {
    title: `${section?.title ?? slug} | atom docs`,
    description: section?.description,
  };
}

const headingText = (children: React.ReactNode): string =>
  Array.isArray(children) ? children.join("") : String(children ?? "");

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = getDocContent(slug);
  const index = docSections.findIndex((s) => s.slug === slug);
  const prev = index > 0 ? docSections[index - 1] : null;
  const next = index < docSections.length - 1 ? docSections[index + 1] : null;

  return (
    <main className="max-w-3xl">
      <div className="flex items-center justify-end mb-6">
        <a
          href={`/docs/${slug}.md`}
          className="text-sm text-ink-3 no-underline hover:text-ink font-mono"
        >
          view as markdown
        </a>
      </div>

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: (props) => (
            <h1 className="text-4xl font-extrabold tracking-tight text-ink mb-6" {...props} />
          ),
          h2: ({ children, ...props }) => (
            <h2
              id={slugifyHeading(headingText(children))}
              className="text-2xl font-bold tracking-tight text-ink mt-12 mb-4 scroll-mt-24"
              {...props}
            >
              {children}
            </h2>
          ),
          h3: (props) => (
            <h3 className="text-lg font-semibold text-ink mt-8 mb-3" {...props} />
          ),
          p: (props) => (
            <p className="text-base text-ink-2 leading-relaxed mb-4" {...props} />
          ),
          a: (props) => (
            <a className="text-ink underline underline-offset-4" {...props} />
          ),
          ul: (props) => (
            <ul className="list-disc pl-5 space-y-2 text-base text-ink-2 leading-relaxed mb-4" {...props} />
          ),
          ol: (props) => (
            <ol className="list-decimal pl-5 space-y-2 text-base text-ink-2 leading-relaxed mb-4" {...props} />
          ),
          strong: (props) => <strong className="font-semibold text-ink" {...props} />,
          code: (props) => {
            const { children, className } = props as { children?: React.ReactNode; className?: string };
            if (className?.includes("language-")) {
              return <code className="font-mono text-[13px] text-white">{children}</code>;
            }
            return (
              <code className="px-1.5 py-0.5 rounded bg-surface-alt border border-line text-ink font-mono text-[13px]">
                {children}
              </code>
            );
          },
          pre: (props) => (
            <pre
              className="bg-dark rounded-xl border border-dark-3 p-5 overflow-x-auto mb-6 font-mono text-[13px] leading-relaxed"
              {...props}
            />
          ),
          table: (props) => (
            <div className="overflow-x-auto mb-6 rounded-xl border border-line">
              <table className="w-full text-left text-[15px]" {...props} />
            </div>
          ),
          thead: (props) => <thead className="bg-surface-alt" {...props} />,
          th: (props) => (
            <th className="px-4 py-3 font-semibold text-ink border-b border-line" {...props} />
          ),
          td: (props) => (
            <td className="px-4 py-3 text-ink-2 border-b border-line align-top" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>

      <div className="flex items-center justify-between mt-16 pt-8 border-t border-line">
        {prev ? (
          <Link href={`/docs/${prev.slug}/`} className="text-sm text-ink-2 no-underline hover:text-ink">
            &larr; {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/docs/${next.slug}/`} className="text-sm text-ink-2 no-underline hover:text-ink">
            {next.title} &rarr;
          </Link>
        ) : (
          <span />
        )}
      </div>
    </main>
  );
}
