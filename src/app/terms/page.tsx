import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "terms | atom",
  description: "the terms that govern your use of atom and this website.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 pt-28 pb-24 [&_h1]:text-4xl [&_h1]:font-extrabold [&_h1]:tracking-tight [&_h1]:text-ink [&_h1]:mb-4 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:text-ink-2 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ul]:text-ink-2 [&_ul]:leading-relaxed [&_ul]:mb-4 [&_a]:text-ink [&_a]:underline [&_a]:underline-offset-4">
      <h1>terms of service</h1>
      <p className="text-sm text-ink-3">effective august 22, 2026</p>

      <p>
        these terms of service govern your use of our website and the services
        we provide. by using our website and services you accept these terms in
        full; if you disagree with any part of them, do not use our website or
        services. you must be 13 years of age or older to use atom. by using
        our services you warrant that you are at least 13. if you accept these
        terms on behalf of a company, organization, or other legal entity, you
        represent that you are authorized to do so.
      </p>

      <h2>the service</h2>
      <p>
        atom connects your github organization to your slack workspace. the
        service includes the atom slack app (pull request threads,
        notifications, reminders, standups, and actions performed on github
        with your authorization), the atom github app, the atom command line
        tool, and the atom mcp server.
      </p>

      <h2>relationship with slack and github</h2>
      <p>
        atom, slack technologies inc, and github inc are different entities.
        atom has no relationship with slack or github other than being a
        licensee and user of their apis for the purpose of providing the atom
        service. slack and github are not responsible for the atom service and
        will not provide support for it. these terms do not apply to your use
        of slack or github themselves, which are governed by their own terms.
      </p>

      <h2>payments and refunds</h2>
      <p>
        when paid plans are available, billing and payment processing run on{" "}
        <a href="https://stripe.com" target="_blank" rel="noreferrer noopener">
          stripe
        </a>
        . all payments are final and non refundable. you can cancel a paid
        plan at any time, and your plan stays active until the end of the
        period you already paid for.
      </p>

      <h2>license to use the website</h2>
      <p>
        unless otherwise stated, atom and its licensors own the intellectual
        property rights in the website and its material, and all such rights
        are reserved. you may view, download for caching purposes only, and
        print pages from the website for your own personal use, subject to the
        restrictions in these terms. you must not republish material from this
        website, sell, rent, or sublicense it, or reproduce or exploit it for
        a commercial purpose. content specifically made available for
        redistribution, such as our documentation in markdown form, may be
        redistributed.
      </p>

      <h2>acceptable use</h2>
      <p>
        you must not use our website or service in any way that causes, or may
        cause, damage to them or impairment of their availability, or in any
        way that is unlawful, illegal, fraudulent, or harmful. you must not use
        them to copy, store, host, transmit, send, publish, or distribute any
        material that consists of or is linked to spyware, viruses, trojans,
        worms, keystroke loggers, rootkits, or other malicious software. you
        must not conduct systematic or automated data collection against our
        website or service without our express written consent, and you must
        not use them to send unsolicited commercial communications.
      </p>

      <h2>using the service</h2>
      <p>
        you may only use the atom service as permitted by law. we may
        investigate, suspend, or terminate the service to you at any time if
        your use violates these terms or our policies. you must not abuse or
        misuse the service, including without limitation:
      </p>
      <ul>
        <li>using the service for unlawful purposes or activities;</li>
        <li>
          submitting content to the service in violation of applicable law,
          including intellectual property and publicity laws;
        </li>
        <li>accessing or tampering with the service&apos;s server systems;</li>
        <li>
          interfering with or disrupting the access of any user, host, or
          network;
        </li>
        <li>
          submitting excessively frequent requests to the service through the
          api, the cli, the mcp server, or slack.
        </li>
      </ul>
      <p>
        atom, in its sole discretion, will determine what constitutes abuse or
        misuse of the service.
      </p>

      <h2>actions performed on your behalf</h2>
      <p>
        some features perform github actions with your authorization, for
        example approving a pull request when you reply @atom approve. you are
        responsible for the actions you instruct atom to take, exactly as if
        you had taken them directly on github.
      </p>

      <h2>changes to the service</h2>
      <p>
        we reserve the right to modify or discontinue the service, or stop
        updating it, at any time without notice. we will not be liable to you
        or to any third party for any modification, suspension, or
        discontinuance of the service.
      </p>

      <h2>amendments</h2>
      <p>
        we may amend, modify, change, add, or remove portions of these terms at
        any time by posting a revised version on the service or by emailing
        you. the revised version takes effect when posted or notified. your
        continued use of the service after that constitutes your binding
        acceptance of the changes.
      </p>

      <h2>termination</h2>
      <p>
        you may terminate your account and end your use of the service at any
        time, for any or no reason. atom has the right, at its sole
        discretion and for any reason, to delete, disable, or deactivate your
        account, block your email or ip address, or otherwise terminate your
        access to the service, with or without notice, and with no liability
        of any kind to you. on termination, all rights granted to you under
        these terms cease and you must stop all use of the service.
        atom&apos;s rights survive termination.
      </p>

      <h2>limited liability</h2>
      <p>
        to the maximum extent permitted by law, the atom service is provided
        &quot;as is&quot; and &quot;as available&quot;. you expressly
        understand and agree that, where permitted by law, atom and its
        service partners, licensors, employees, and agents will not be
        responsible for any lost profits, revenues, or data, financial losses,
        or indirect, special, consequential, exemplary, or punitive damages
        under any circumstances. your use or purchase of the service is at
        your sole risk. atom does not warrant that the service will meet all
        of your requirements at all times, that it will be error free or that
        all errors will be corrected, or that it will be uninterrupted.
        anything obtained through the use of the service is done at your own
        discretion and risk, and you are solely responsible for any damage to
        your devices or loss of data that results.
      </p>

      <h2>general representation and warranty</h2>
      <p>
        you represent and warrant that your use of the service will be in
        strict accordance with these terms. in particular you represent and
        warrant that:
      </p>
      <ul>
        <li>
          you will comply with the slack and github terms of service at all
          times;
        </li>
        <li>you will provide us with accurate information where required;</li>
        <li>you will not use the service in the event of an emergency;</li>
        <li>
          you will not use the service in any unlawful manner or for any
          unlawful purpose, or act fraudulently or maliciously, for example by
          hacking into or inserting malicious code into the service;
        </li>
        <li>
          you will not infringe our intellectual property rights or those of
          any third party;
        </li>
        <li>
          you will not use the service to send content that is obscene,
          offensive, hateful, or inflammatory, defames any person, promotes
          discrimination, violence, illegal activity, or sexually explicit
          material, discloses anyone&apos;s personal data without consent,
          harasses or deceives any person, impersonates anyone, or contains
          advertising;
        </li>
        <li>
          you will not use the service in a way that could damage, disable,
          overburden, or compromise our systems or security, or interfere
          with other users; and
        </li>
        <li>
          you will not collect or harvest information from our systems or
          attempt to decipher transmissions to or from our servers.
        </li>
      </ul>

      <h2>contact</h2>
      <p>
        questions about these terms:{" "}
        <a href="mailto:support@useatom.dev">support@useatom.dev</a>
      </p>
    </article>
  );
}
