# install atom

atom connects your github organization to your slack workspace. setup takes about two minutes and runs entirely from your terminal.

## quick start

```bash
npx @useatom/cli init
```

the wizard walks you through four steps:

1. **sign in with github.** your browser opens, you authorize, and the terminal picks up your session automatically.
2. **install the github app** on your organization. atom needs to see pull request activity for the repos you choose.
3. **install the slack bot** in your workspace.
4. **map your first repo to a channel.** pull request threads for that repo will post there.

every step resumes where it left off, so rerunning `init` after an interruption is safe.

## install the cli globally

```bash
npm install -g @useatom/cli
atom init
```

## bring your team in

teammates join with an invite code instead of installing anything on github or slack:

```bash
atom invite          # you: prints the invite code
atom join <code>     # them: joins your workspace
```

each teammate then links their slack identity by running `/atom connect` inside slack. linking is what makes review requests reach the right person and lets `@atom approve` act as them on github.

## installing with a coding agent

atom is built to be installed by agents. point claude code or any coding agent at this site:

```bash
claude "set up atom for my team by following https://useatom.dev/llms-install.md"
```

the cli is fully non-interactive when it needs to be, every command supports `--json`, and an mcp server exposes configuration as tools. see the [mcp docs](/docs/mcp/) for wiring it up.

## requirements

- node 18.17 or newer for the cli
- admin access on the github organization (to install the github app)
- permission to add apps to the slack workspace

if you have neither github nor slack admin access, run `atom init` anyway: it prints an invite link you can hand to the person who does.
