import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { MarketingNav } from "../components/marketing-nav";
import { Footer } from "../components/footer";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "atom | the developer productivity platform for fast moving engineering teams",
  description:
    "atom streams github into tidy slack threads, chases reviews for you, and runs your daily standup with a live board. install it in two minutes from your terminal, or point your coding agent at our docs.",
  metadataBase: new URL("https://useatom.dev"),
  openGraph: {
    title: "pull requests, where your team already is.",
    description:
      "atom turns github pull requests into living slack threads. review and approve from slack, attributed to you on github. one bot for prs, reminders, and standups.",
    siteName: "atom",
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://useatom.dev" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://useatom.dev/#organization",
      name: "atom",
      url: "https://useatom.dev",
      logo: "https://useatom.dev/icon.svg",
      contactPoint: {
        "@type": "ContactPoint",
        email: "support@useatom.dev",
        contactType: "customer support",
        url: "https://useatom.dev/contact/",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "atom",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web, Slack, CLI",
      url: "https://useatom.dev",
      description:
        "atom streams github into tidy slack threads, chases reviews for you, and runs your daily standup with a live board. review actions run on github as you, and a cli and mcp server let coding agents configure everything.",
      publisher: { "@id": "https://useatom.dev/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jetbrains.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body className="min-h-screen bg-page font-sans text-ink antialiased">
        <MarketingNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
