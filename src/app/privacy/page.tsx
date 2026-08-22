import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "privacy | atom",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-ink [&_h1]:mb-4 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:text-ink-2 [&_p]:leading-relaxed [&_p]:mb-4 [&_a]:text-accent [&_a]:underline">
      <h1>Privacy Policy</h1>
      <p className="text-sm text-gray-500">Last updated: May 2026</p>

      <h2>1. Information We Collect</h2>
      <p>
        When you use Atom, we collect information necessary to provide the service,
        including your GitHub username, email address, Slack workspace identity,
        and pull request metadata from connected repositories.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>
        We use collected information to deliver PR notifications to your Slack
        workspace, identify users across GitHub and Slack, and improve the service.
        We do not sell your data.
      </p>

      <h2>3. Data Storage</h2>
      <p>
        Your data is stored securely using MongoDB Atlas with encryption at rest.
        OAuth tokens are stored encrypted and never shared with third parties.
      </p>

      <h2>4. Third-Party Services</h2>
      <p>
        Atom integrates with GitHub and Slack. Their respective privacy policies
        apply to data processed within those platforms.
      </p>

      <h2>5. Data Deletion</h2>
      <p>
        You can request deletion of your data at any time by contacting
        support@useatom.dev. Uninstalling Atom from Slack will stop all data
        collection.
      </p>

      <h2>6. Contact</h2>
      <p>
        Questions? Reach us at{" "}
        <a href="mailto:support@useatom.dev">support@useatom.dev</a>.
      </p>
    </article>
  );
}
