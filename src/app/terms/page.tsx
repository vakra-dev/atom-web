import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-ink [&_h1]:mb-4 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:text-ink-2 [&_p]:leading-relaxed [&_p]:mb-4 [&_a]:text-accent [&_a]:underline">
      <h1>Terms of Service</h1>
      <p className="text-sm text-gray-500">Last updated: May 2026</p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using Atom (&quot;the Service&quot;), provided by Vakra Labs,
        you agree to these Terms of Service.
      </p>

      <h2>2. Description of Service</h2>
      <p>
        Atom is a GitHub-to-Slack integration that delivers pull request
        notifications and activity updates to Slack workspaces.
      </p>

      <h2>3. Account Registration</h2>
      <p>
        You must authenticate via GitHub OAuth to use the Service. You are
        responsible for maintaining the security of your account credentials.
      </p>

      <h2>4. Acceptable Use</h2>
      <p>
        You agree not to misuse the Service, including but not limited to:
        automated abuse, unauthorized access to other users' data, or using the
        Service for illegal purposes.
      </p>

      <h2>5. Subscription & Billing</h2>
      <p>
        Free tier usage has no cost. Pro plans are billed monthly. Trials last
        14 days. Refunds are available within 15 days of purchase.
      </p>

      <h2>6. Termination</h2>
      <p>
        We may suspend or terminate your access if you violate these terms. You
        may cancel at any time by uninstalling Atom from Slack.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        Atom is provided &quot;as is&quot;. Vakra Labs shall not be liable for any
        indirect, incidental, or consequential damages arising from use of the
        Service.
      </p>

      <h2>8. Contact</h2>
      <p>
        Questions about these terms? Contact{" "}
        <a href="mailto:support@useatom.dev">support@useatom.dev</a>.
      </p>
    </article>
  );
}
