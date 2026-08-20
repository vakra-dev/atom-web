# Install Atom — instructions for coding agents

You are setting up **Atom** (useatom.dev) for your user. Atom posts GitHub pull
request notifications into Slack channels: one threaded message per PR, live
status updates, review/comment replies in the thread.

Follow these steps in order. Three steps open a browser window that **the
human must complete** (OAuth consent). Everything else is yours.

## Prerequisites

- Node.js 18.17 or newer (`node --version`)
- The user must have: a GitHub account, and admin access to the GitHub org
  and/or permission to add apps to the Slack workspace. If they only have one
  of the two, see "Split admin access" below — setup still works.

## Step 1 — install the CLI

```bash
npm install -g @useatom/cli
```

(Or use `npx @useatom/cli <command>` everywhere without installing.)

## Step 2 — sign in

```bash
atom login
```

This opens a browser for GitHub sign-in — **tell the user to approve it**.
The command waits, then prints `signed in`. No token handling needed on your
side. (Headless/CI alternative: `ATOM_TOKEN=<jwt> atom login --with-token`.)

## Step 3 — create the workspace and connect both sides

```bash
atom init --name "<the user's team or company name>"
```

This is resumable and safe to re-run. In a non-interactive shell it will,
in order:

1. Reuse the signed-in session
2. Create the workspace (or reuse the existing one)
3. Open the browser to install the **Atom GitHub App** — the user picks their
   org and repos, clicks Install. The command polls until done (5 min limit).
4. Open the browser to **add Atom to Slack** — the user clicks Allow. Same
   polling.

If a browser step times out because the user cancelled, just re-run
`atom init` — completed steps are skipped.

## Step 4 — map repos to channels

Ask the user which repo should post to which Slack channel, then:

```bash
atom repos                      # see available repos and current mappings
atom channels                   # see channels the bot can post to
atom map org/repo "#channel"    # create a mapping (repeat per repo)
```

Note: the Slack bot only sees channels it's a member of. If a channel is
missing, the user should type `/invite @atom` in that Slack channel first.

## Step 5 — verify

```bash
atom status --json
```

Confirm `github.connected` and `slack.connected` are `true` and `mappings`
is non-empty. From now on, opening a PR in a mapped repo posts to the mapped
channel automatically.

## Step 6 (recommended) — connect the MCP server

So you (the agent) can manage Atom conversationally later:

```bash
claude mcp add atom -- atom mcp
```

Tools exposed: `atom_status`, `list_repos`, `list_channels`, `list_mappings`,
`map_repo`, `unmap_repo`, `get_invite_link`.

## Split admin access (delegation)

If your user lacks GitHub org admin or Slack app permission, get the invite
code with `atom invite` and have them send it to whoever has that access.
That person runs:

```bash
npm install -g @useatom/cli
atom login
atom join <code>
atom connect github   # or: atom connect slack — whichever they can approve
```

Re-run `atom status` afterwards; setup completes once both sides are
connected.

## Troubleshooting

- `Not logged in` → run `atom login` again (tokens last 30 days).
- `No channel found` → the bot isn't in that channel; `/invite @atom` in Slack.
- Browser never opened → every command also prints the URL; open it manually.
- Wrong workspace → `atom whoami` shows all memberships; pass
  `--workspace <id>` to any command.
