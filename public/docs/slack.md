# using atom in slack

atom has three surfaces in slack: slash commands for configuration, mentions for everything conversational, and dms for standups.

## slash commands

| command | what it does |
|---|---|
| `/atom help` | how to work with atom, with setup links if something is not connected yet. |
| `/atom connect` | link your slack identity to your github account. this is what routes review requests to you and lets atom act as you on github. |
| `/atom reminders` | configure pr reminders for the channel you are in. the form pre-loads the existing config and pre-selects the channel's repos. |
| `/atom reminders off` | turn reminders off for this channel. |
| `/atom standup` | configure the standup: participants, nudge time, board time, days. the board posts to the channel you run this in. |
| `/atom standup off` | pause the standup. config and history are kept. |

configuration confirmations post in the channel so the whole team sees what changed.

## mention atom in a channel

| say | what happens |
|---|---|
| `@atom pending prs` | a summary of open pull requests for this channel's repos, replied in a thread under your message, grouped by repo with authors and ages. |
| `@atom my prs` | your open pull requests across the workspace. visible only to you. |
| `@atom reminder config` | this channel's reminder schedule. |
| `@atom standup config` | the standup schedule and participants. |
| `@atom feedback ...` | send us feedback, right from slack. |
| `@atom help` | what atom can do in a channel. |

plain language works: atom understands phrasing like "@atom what's waiting on me?".

## mention atom in a pull request thread

inside a pr thread, mentions act on that pull request, on github, as you:

| say | what happens |
|---|---|
| `@atom approve` | approves the pr. add a message after it if you like. `@atom lgtm` works too. |
| `@atom request changes needs tests` | requests changes with your feedback. |
| `@atom comment deploying after lunch` | comments on the pr. |
| `@atom request review from @teammate` | requests a review. |
| `@atom assign @teammate` | assigns them. |
| `@atom add labels docs, do not merge` | adds labels, comma separated, validated against the repo's real labels. |
| `@atom remove labels docs` | removes labels. |
| `@atom close` and `@atom reopen` | closes or reopens the pr. |

a successful action gets a checkmark reaction on your message and nothing else: the thread stays clean because your command is the record. errors are visible only to you. approving never falls back to a bot account, so an approval from slack is a real approval from you.

## notifications you can live with

- one message per event, never two.
- the pr message edits itself through open, changes requested, approved, merged, and closed.
- dms only when something waits on you, and the dm badge updates itself when it no longer does.
- pushes show the real commit count and messages, linked to the compare view.
