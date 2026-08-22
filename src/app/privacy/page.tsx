import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "privacy | atom",
  description:
    "what atom collects, why, where it lives, and how you stay in control of it.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 pt-28 pb-24 [&_h1]:text-4xl [&_h1]:font-extrabold [&_h1]:tracking-tight [&_h1]:text-ink [&_h1]:mb-4 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:text-ink-2 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ul]:text-ink-2 [&_ul]:leading-relaxed [&_ul]:mb-4 [&_a]:text-ink [&_a]:underline [&_a]:underline-offset-4">
      <h1>privacy policy</h1>
      <p className="text-sm text-ink-3">effective august 22, 2026</p>

      <p>
        our approach to your privacy comes down to doing the right thing. you
        should never feel surprised by what we know about you or when we
        contact you. we collect the least information we can, and if anything
        here ever surprises you, tell us and we will fix it.
      </p>
      <p>
        if you do not agree with this policy, please do not use our services.
        our services are anything atom creates and operates: the atom slack
        app, the atom github app, the atom cli and mcp server, and this
        website.
      </p>

      <h2>1. information we collect and why</h2>
      <p>
        when you install atom into your slack workspace and github organization
        we collect what the service needs to function, and anything you choose
        to give us. we use it to run the product, identify you across github
        and slack, improve the service, and contact you when needed.
      </p>
      <p>specifically:</p>
      <ul>
        <li>
          <strong className="text-ink">your github identity.</strong> when you
          sign in with github oauth we collect your username, display name,
          avatar, and email address. admins may be contacted about product
          usage, billing, and support. we send as little email as we can.
        </li>
        <li>
          <strong className="text-ink">your slack identity.</strong> when you
          link your slack account we collect your slack user id, display name,
          and workspace id, so notifications and mentions reach the right
          person.
        </li>
        <li>
          <strong className="text-ink">pull request metadata.</strong> titles,
          numbers, branch names, review states, commit messages, comment text,
          and the usernames involved, received from github webhooks so we can
          post and update slack threads.
        </li>
        <li>
          <strong className="text-ink">messages you send to atom.</strong>{" "}
          standup updates you dm to the bot, commands you send by mentioning
          atom, and feedback you submit, along with timestamps and the channel
          they came from. we collect only what the feature needs.
        </li>
        <li>
          <strong className="text-ink">workspace configuration.</strong> repo
          to channel mappings, reminder schedules, and standup settings.
        </li>
      </ul>

      <h2>2. acting on github as you</h2>
      <p>
        when you sign in, atom stores an access token that allows it to perform
        github actions on your behalf. it is used only when you explicitly ask
        for an action, for example replying @atom approve in a pull request
        thread, and never for anything you did not request. tokens are stored
        securely, and disconnecting your account or deleting your data revokes
        our use of them.
      </p>

      <h2>3. no access to your source code</h2>
      <p>
        the atom github app does not request or obtain access to your source
        code. we receive metadata about pull requests, reviews, and comments,
        never repository contents. we do not intentionally collect personal
        data that may appear inside your pull request titles or comments; that
        content belongs to you, and you are responsible for it, including any
        regulatory controls that apply to it.
      </p>

      <h2>4. automated processing of messages</h2>
      <p>
        two features use a large language model to understand free form text:
        classifying standup updates you dm to the bot, and interpreting
        loosely phrased commands when you mention atom. for these features the
        text of your message is sent to anthropic, our model provider, to be
        processed and is used only to provide the feature. it is not used to
        train models.
      </p>

      <h2>5. where your information lives</h2>
      <p>
        atom runs on reputable cloud infrastructure providers in the united
        states, with encryption in transit and at rest. the parties that help
        us operate, and what they handle:
      </p>
      <ul>
        <li>
          our website is served by{" "}
          <a href="https://vercel.com" target="_blank" rel="noreferrer noopener">
            vercel
          </a>
          , and our application and database run on managed cloud hosting.
        </li>
        <li>
          <a href="https://www.anthropic.com" target="_blank" rel="noreferrer noopener">
            anthropic
          </a>{" "}
          processes messages for the features in section 4.
        </li>
        <li>
          when paid plans are available, payments are processed by{" "}
          <a href="https://stripe.com" target="_blank" rel="noreferrer noopener">
            stripe
          </a>
          , which uses your name and email to send receipts.
        </li>
      </ul>
      <p>
        beyond these, your information is never sold, exchanged, transferred,
        or given to any other company for any reason without your consent,
        other than to deliver the service you asked for.
      </p>

      <h2>6. data retention</h2>
      <p>
        we keep the information required to run the service while you use it.
        after you uninstall atom, your data is archived for 30 days, so your
        workspace can pick up where it left off if you return, and then
        deleted. you can request immediate deletion at any time (section 8).
      </p>

      <h2>7. cookies and analytics</h2>
      <p>
        our website does not use tracking cookies. if we measure traffic, we
        use privacy friendly analytics that do not identify you and do not
        follow you across the web.
      </p>

      <h2>8. how you control your data</h2>
      <p>
        you can ask us to send, correct, or permanently delete any information
        about your account. email{" "}
        <a href="mailto:support@useatom.dev">support@useatom.dev</a> and we
        will complete deletion within 30 days of your request. uninstalling
        atom from slack or github stops the corresponding data collection
        immediately.
      </p>

      <h2>9. consent</h2>
      <p>
        if you do not consent to the collection, use, or disclosure of your
        personal information as described here, please do not provide personal
        information to the service. if you have provided it and change your
        mind, email{" "}
        <a href="mailto:support@useatom.dev">support@useatom.dev</a>.
      </p>

      <h2>10. changes to this policy</h2>
      <p>
        we may update this policy to reflect current practice, and will take
        reasonable steps to let you know through the website. continued use
        after a change means you accept it. if we make a significant change,
        for example to a lawful basis on which we process your information, we
        will ask you to consent again.
      </p>

      <h2>11. contact</h2>
      <p>
        questions about this policy:{" "}
        <a href="mailto:support@useatom.dev">support@useatom.dev</a>
      </p>
    </article>
  );
}
