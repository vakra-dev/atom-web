# pr reminders

reminders post a scheduled summary of open pull requests to a channel, so stale reviews surface before they become week-old reviews.

## what the summary looks like

a single message, grouped by repo:

- each pull request with its linked title, the author linked to their github profile, and how long it has been open
- draft prs tagged `(draft)` and excluded from the waiting count
- a closing line like "3 pull requests across 2 repositories are waiting for review"
- when everything is clear: "no open pull requests right now. everything is clear."

## configure from slack

run `/atom reminders` in the channel that should receive the summary. the form covers timezone, time of day, days of the week, and which repos to include. it pre-selects the channel's mapped repos, and if a config already exists it loads it for editing. saving posts a confirmation in the channel.

turn them off with `/atom reminders off`.

## weekly digest

alongside the daily summary, a channel can get a monday morning week in review: how many prs merged, how fast reviews went compared to the week before, who carried the review load, and what is still open from last week.

turn it on from the terminal with `atom reminders set --channel "#your-channel" --digest on`, and pick the posting time with `--digest-time 09:00`. it posts once per week in the channel's timezone.

## configure from the terminal

```bash
atom reminders set --channel #eng-reviews --time 10:00 --tz America/New_York --days mon,tue,wed,thu,fri
atom reminders                       # list configs
atom reminders delete --channel #eng-reviews
```

repos default to the channel's mapped repos when you leave `--repos` out.

## on demand

ask `@atom pending prs` in any configured channel for the same summary immediately, without waiting for the schedule.

## behavior notes

- one config per channel, and different channels can run different schedules, timezones, and repo sets.
- times are interpreted in the config's timezone with a fifteen minute delivery window.
- if github cannot be reached for every configured repo, atom skips the post rather than reporting a false all-clear.
