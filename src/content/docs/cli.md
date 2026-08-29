# cli reference

the atom cli (`@useatom/cli`, binary `atom`) is the fastest way to set up and configure atom. every command supports `--json` for machine-readable output and exits 0 on success, 1 on failure.

## setup commands

| command | what it does |
|---|---|
| `atom init` | interactive setup: sign in, create or pick a workspace, connect github and slack, map a repo. resumable. |
| `atom login` | sign in with github through your browser. `--manual` prints a url and lets you paste the token back. `--with-token` reads a token from `$ATOM_TOKEN` or stdin. |
| `atom logout` | sign out and clear stored credentials. |
| `atom connect github` | install the github app on your organization. add `--force` to reconnect. |
| `atom connect slack` | install the slack bot. `--force` reinstalls, which you need after a permissions change. |

## workspace commands

| command | what it does |
|---|---|
| `atom status` | workspace overview: connections, mappings, plan. |
| `atom whoami` | the signed-in user and their workspaces. |
| `atom invite` | print the invite code for teammates. |
| `atom join <code>` | join a workspace with an invite code. pasted invite links work too. |

## inbox and insights

| command | what it does |
|---|---|
| `atom inbox` | everything that needs you: reviews waiting on you, your own prs ranked by what needs action, and prs where you are mentioned or assigned. |
| `atom insights` | this week's team metrics with last week alongside, including a review load chart. scope with `--repos org/repo,org/other`. |
| `atom stats` | your personal week: prs, reviews given, response times. |

all three support `--json` for scripts and agents.

## repos and channels

| command | what it does |
|---|---|
| `atom map [repo] [channel]` | route a repo's pull requests to a slack channel. accepts bare repo names and `#channel` names. interactive without arguments. |
| `atom unmap [repo]` | remove a mapping. `-y` skips the confirmation. |
| `atom repos` | list repos and their mapped channels. |
| `atom channels` | list slack channels the bot can post to. |

one channel can carry many repos. each repo maps to exactly one channel.

## pr reminders

| command | what it does |
|---|---|
| `atom reminders` | list reminder configs. |
| `atom reminders set --channel #x` | create or update reminders for a channel. options: `--time 10:00`, `--tz America/New_York`, `--days mon,tue,wed,thu,fri`, `--repos api,web`. repos default to the channel's mapped repos. |
| `atom reminders delete --channel #x` | remove reminders from a channel. |

add `--digest on` to `atom reminders set` to get a monday morning week in review for the channel, and `--digest-time 09:00` to pick when it posts.

## standup

| command | what it does |
|---|---|
| `atom standup status` | show the standup config and participants. |
| `atom standup enable --channel #x` | enable the standup. options: `--nudge 09:30`, `--post 11:00`, `--tz Zone`, `--days mon,fri`. |
| `atom standup disable` | pause the standup. config and history are kept. |
| `atom standup add-user <github-login>` | enroll a workspace member. participation is opt-in. |
| `atom standup remove-user <github-login>` | remove a participant. |

## environment variables

| variable | purpose |
|---|---|
| `ATOM_API_URL` | point the cli at a different atom server. |
| `ATOM_TOKEN` | provide a token without touching the config file. never persisted. |
| `ATOM_CONFIG_DIR` | use an alternate config directory, useful for a second account. |

configuration lives in `~/.useatom/config.json` with owner-only permissions.
