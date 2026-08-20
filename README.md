# Atom — Marketing Site, Docs & Blog

pnpm + Turbo monorepo containing the Atom public website, documentation, and blog.

## Quick Start

```bash
nvm use 22.12.0
pnpm install                    # install all workspace dependencies

# Run everything
pnpm dev                        # starts both apps via Turbo

# Or run individually
cd apps/web  && pnpm dev        # marketing site on http://localhost:8502
cd apps/blog && pnpm dev        # blog on http://localhost:8503
```

## Requirements

- Node.js 22.x
- pnpm (`npm install -g pnpm`)

## Structure

```
atom-web/
  pnpm-workspace.yaml          # workspace config
  turbo.json                    # Turbo task pipeline
  apps/
    web/                        # Marketing site + docs (Next.js 16)
    blog/                       # Blog (Astro)
  packages/
    tailwind-config/            # Shared Tailwind theme (colors, fonts, spacing)
```

## apps/web — Marketing Site (port 8502)

Next.js 16 with App Router, Tailwind CSS v4, Framer Motion.

**Pages:**
- `/` — Landing page (hero, problem, how-it-works, features, pricing, CTA)
- `/pricing` — Pricing comparison (Free / Pro / Enterprise)
- `/docs` — Documentation hub with quick-start guide
- `/changelog` — Release history
- `/privacy` — Privacy policy
- `/terms` — Terms of service
- `/sitemap.xml` — Auto-generated sitemap

**Environment variables** (`.env.local`):
```
NEXT_PUBLIC_APP_URL=https://app.useatom.dev
NEXT_PUBLIC_API_URL=https://api.useatom.dev
NEXT_PUBLIC_BLOG_URL=https://blog.useatom.dev
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=useatom.dev
```

**Scripts:**
```bash
pnpm dev        # dev server on :8502
pnpm build      # production build (static export)
pnpm start      # serve production build on :8502
```

## apps/blog — Blog (port 8503)

Astro with MDX support and auto-generated sitemap.

**Content:** Blog posts in `src/content/blog/` as Markdown/MDX files.

**Scripts:**
```bash
pnpm dev        # dev server on :8503
pnpm build      # static build to dist/
pnpm preview    # preview build on :8503
```

## packages/tailwind-config

Shared Tailwind configuration with Atom design tokens:
- Purple primary palette (#5B21B6)
- Gold accent (#F59E0B)
- PR status colors (open, merged, closed, draft)
- Plus Jakarta Sans + JetBrains Mono fonts
- Custom heading sizes (hero, h1, h2, h3)

## Build All

```bash
pnpm build      # builds both apps via Turbo
```
