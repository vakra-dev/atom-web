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
  title: "atom | pull requests, where your team already is",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jetbrains.variable}`}>
      <head>
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
