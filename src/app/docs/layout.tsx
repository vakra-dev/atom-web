import { DocsSidebar } from "../../components/docs/sidebar";
import { docSections, getDocHeadings, type DocHeading } from "../../lib/docs";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const headings: Record<string, DocHeading[]> = {};
  for (const section of docSections) {
    headings[section.slug] = getDocHeadings(section.slug);
  }

  return (
    <div className="bg-page min-h-screen pt-24 pb-24">
      <div className="mx-auto max-w-6xl px-6 md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-12">
        <DocsSidebar sections={docSections} headings={headings} />
        <div>{children}</div>
      </div>
    </div>
  );
}
