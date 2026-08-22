# standups

atom runs your daily standup without forms, threads, or another bot subscription. participants reply to a dm, and a live board in your channel fills in as updates land.

## the daily cycle

1. **the nudge.** at the time you set, every participant who has not submitted gets a dm: "standup time. what are you working on today? reply here and i'll log your update."
2. **the reply.** they answer in plain words, as one message or several through the day. atom understands free-form text and splits multi-item updates into clean bullets. same-day messages append.
3. **the ack.** a checkmark reaction and a short confirmation, so nobody wonders whether it counted.
4. **the board.** at post time, one message appears in the standup channel with everyone's updates. it keeps editing itself in place as later updates arrive. submitters are mentioned on their entries; the "waiting on" list stays unpinged and shrinks live.

greetings and questions sent to the bot are answered, not logged. only real updates reach the board.

## configure from slack

run `/atom standup` in the channel where the board should live. pick participants with the user picker, set the nudge time, board time, timezone, and days. participation is opt-in: nobody is enrolled automatically. pause any time with `/atom standup off`; config and history are kept.

## configure from the terminal

```bash
atom standup enable --channel #standup --nudge 09:30 --post 11:00 --tz America/New_York
atom standup add-user teammate-github-login
atom standup status
atom standup disable
```

## check the setup

ask `@atom standup config` in any channel to see the schedule, board channel, and participants.
