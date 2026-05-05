# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Ali Irani's personal website, forked from [onur.dev](https://github.com/suyalcinkaya/onur.dev). Built with Next.js 14
(App Router), Tailwind CSS, and Contentful as the headless CMS. Hosted on Vercel.

## Commands

- **Dev server:** `npm run dev`
- **Build:** `npm run build`
- **Lint:** `npm run lint` (ESLint for .js/.jsx)
- **Format:** `npm run prettier`
- **Find unused exports:** `npm run unused`

Package manager: npm (has `package-lock.json`). Node 18.x required.

## Architecture

### Data Sources

- **Contentful** (`src/lib/contentful.js`): Pages, blog posts, and logbook entries via GraphQL API. All queries use
  React `cache()` and `server-only`. Preview/draft mode toggled via `draftMode()`.
- **Raindrop** (`src/lib/raindrop.js`): Bookmarks collections. Collection IDs are defined in `src/lib/constants.js`.
- **Supabase** (`src/lib/supabase/`): Page view counts (table: `pages`). Has separate public/private clients.
- **Tinybird**: Client-side analytics via script tag in layout.

### Route Structure

- `/` — Home page
- `/[slug]` — Dynamic pages from Contentful page collection
- `/writing` — Blog listing; `/writing/[slug]` — Individual posts from Contentful
- `/journey` — Journey/logbook from Contentful
- `/writing.xml` — RSS feed

### Key Patterns

- **Path alias**: `@/` maps to `src/` (configured in `jsconfig.json`)
- **Constants split**: `src/constants.ts` exports `BASE_URL` from env; `src/lib/constants.js` has navigation links,
  profiles, collection IDs, and UI constants
- **`cn()` utility** (`src/lib/utils.js`): Combines `classix/cx` + `tailwind-merge` for class merging
- **UI components**: shadcn/ui (new-york style, JSX not TSX, no CSS variables) in `src/components/ui/`
- **Middleware** (`src/middleware.js`): Fires view-count analytics on `/writing/:path/` visits using `event.waitUntil()`
- **OG images**: Generated dynamically via `og.png/route.js` files using `@vercel/og`
- **Million.js**: Compiler-level React optimization enabled in `next.config.mjs`

### Styling

- Tailwind CSS 3 with custom breakpoints (xs: 390px, sm: 435px)
- Prettier config: single quotes, no semicolons, 120 print width, trailing comma none
- Geist font family (sans + mono) loaded via `geist` package

## Environment Variables

See `.env.example` — requires Contentful, Supabase, Raindrop, Tinybird, and Airtable credentials. `BASE_URL` must also
be set.
