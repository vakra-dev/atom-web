# mcp server

atom ships a model context protocol server inside the cli, so coding agents can set up and configure atom conversationally. it speaks json-rpc over stdio and reuses your cli login.

## wiring it up

sign in once, then register the server with your agent:

```bash
atom login
claude mcp add atom -- atom mcp
```

no global install is needed either:

```bash
claude mcp add atom -- npx -y @useatom/cli mcp
```

any mcp-capable client works the same way: run `atom mcp` as a stdio server.

## tools

| tool | what it does |
|---|---|
| `atom_status` | workspace overview: github and slack connection state, plan, mapping count. |
| `list_repos` | github repos available in the workspace. |
| `list_channels` | slack channels the bot can post to. |
| `list_mappings` | which repo posts to which channel. |
| `map_repo` | route a repo to a channel. accepts bare names and `#channel`. |
| `unmap_repo` | remove a repo's mapping. |
| `get_invite_link` | invite code for bringing teammates in. |
| `get_inbox` | the signed-in user's pr inbox: reviews waiting on them, their own prs, and where they are mentioned. useful before starting new work. |
| `get_insights` | team metrics for the week with last week for comparison. optionally scoped to specific repos. |
| `get_stats` | the signed-in user's personal week: prs, reviews, response times. |
| `list_reminders` | pr reminder configs per channel. |
| `set_reminder` | create or update a channel's reminders. repos default to the channel's mappings. can also turn on the monday digest. |
| `delete_reminder` | remove a channel's reminders. |
| `get_standup` | the standup config: times, days, participants. |
| `set_standup` | create, update, pause, or resume the standup. |
| `add_standup_participant` | enroll a member by github login. |
| `remove_standup_participant` | remove a participant. |

errors come back as tool results with `isError`, never as crashes, so agents can read the message and correct course.

## a typical agent session

an agent asked to "set up pr notifications for the api repo in #eng" would call `atom_status` to check connections, `list_repos` and `list_channels` to resolve names, and `map_repo` to create the route. asked for "a daily reminder at 9:30 eastern", it follows with `set_reminder`. the whole configuration surface of atom is reachable this way.
