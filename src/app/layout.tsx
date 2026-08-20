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
  title: "atom | never miss a pull request again",
  description:
    "Atom is the developer productivity platform that brings GitHub pull requests into Slack. Threaded, tracked, and always visible. Built for fast-moving engineering teams.",
  metadataBase: new URL("https://useatom.dev"),
  openGraph: {
    title: "never miss a pull request again.",
    description:
      "Atom brings GitHub PR activity into Slack with threaded conversations, live status tracking, and smart notifications. Built for engineering teams that ship fast.",
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
