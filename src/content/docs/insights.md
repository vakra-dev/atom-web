# inbox and insights

atom keeps track of what needs you and how your team is really doing, computed live from your pull request activity. both are available in slack, the terminal, and through the mcp server for coding agents.

## your inbox

ask `@atom inbox` in slack, run `atom inbox` in your terminal, or let your agent call `get_inbox`. you get three buckets:

- **needs your review**: pull requests where your review was requested, oldest request first, so the person who has waited longest is at the top.
- **your pull requests**: your own open prs, ranked by what needs your action. changes requested come first, then failing checks and merge conflicts, then approved prs ready to merge, then everything else.
- **mentioned or assigned**: prs where someone mentioned you in a comment or assigned you, most recent activity first.

a pull request appears once, in its most urgent bucket. draft prs never show up in anyone's review queue.

## team insights

ask `@atom insights` in a channel and atom answers for that channel's repos. run `atom insights` in the terminal for the whole workspace, or scope it with `--repos`. the numbers cover the current week, with last week alongside:

- pull requests merged and opened
- time to first review
- publish to merge time
- review cycles until merge
- first pass rate: the share of prs approved without a round of changes
- review load per reviewer
- pull requests that are stale right now

## your stats

`@atom stats` in slack or `atom stats` in the terminal shows your own week: prs opened and merged, reviews you gave, your median response time to review requests, and how long your own prs waited for a first review.

## the weekly digest

a channel can opt into a monday morning week in review that covers the same ground automatically. see [pr reminders](/docs/reminders/) for setup.

## how the numbers are computed

metrics are only useful if you can trust them, so here is exactly how atom counts:

- **medians, not averages.** one monster pr should not distort your week.
- **merged pull requests only.** abandoned prs do not count against review speed.
- **the clock starts at ready for review.** if a pr is opened as a draft, timing starts when it is marked ready, not when it was created. time spent drafting is not time spent waiting.
- **response time pairs each request with the reviewer's next review.** if you are re-requested after changes, that is a new pair. the median across pairs is your response time.
- **first pass rate** counts merged prs that never received a changes requested review.
- **bots are excluded.** dependabot opening forty prs does not change your team's numbers.
- **everything is live.** metrics are computed from events as they arrive, not from a nightly sync.

atom never reads your source code for any of this. all metrics come from the same webhook metadata that powers notifications: titles, states, timestamps, and usernames.
