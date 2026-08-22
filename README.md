# atom-web

The [useatom.dev](https://useatom.dev) marketing site and docs. Next.js 16 static export, all lowercase, black and white with status-color accents.

## Quick Start

```bash
nvm use 22.12.0
npm install
npm run dev          # http://localhost:8502
```

`npm run build` produces the full static site in `out/` (deployable to any static host).

## What's Inside

- **Landing page** (`src/components/home/`): hero with a cursor-reactive particle field (`atom-field.tsx`, three.js), four-angle copy, differentiator pills, a Slack thread mockup, features, agent install section, FAQ.
- **Docs** (`/docs`): six pages rendered from markdown with a sticky index sidebar. Content lives in `src/content/docs/*.md` as the single source.
- **Agent surface**: every docs page ships a raw markdown twin at `/docs/<page>.md`; `public/llms.txt` indexes them (llmstxt.org format) and `llms-full.txt` concatenates everything. `llms-install.md` is the step-by-step agent install guide.
- **SEO**: generated `sitemap.xml`, `robots.txt`, favicon (`src/app/icon.svg`), per-page metadata.

## Editing Docs

Edit the markdown in `src/content/docs/`. The `prebuild`/`predev` script (`scripts/build-docs-mirrors.mjs`) mirrors pages into `public/docs/` and regenerates `llms-full.txt` automatically. To add a page, create the markdown file and register it in `src/lib/docs.ts`.

## Copy Rules

All lowercase. No em dashes, no unnecessary hyphenated compounds, complete natural sentences. Realistic command examples instead of `<placeholder>` syntax.

## Stack

Next.js 16 (`output: "export"`, trailing slashes), Tailwind CSS v4, framer-motion, three (hero field), react-markdown + remark-gfm (docs).
