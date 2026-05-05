# Add a Projects section showcasing recent open-source work

**Goal:** Add a Projects section showcasing recent open-source work
**Status:** in_progress
**Created:** 2026-05-05
**Execution:** Use `/execute-plan <path-to-this-file>` to run this plan task-by-task.

---

## Architecture

Add a new `/projects` route that mirrors the structure of `/talks` (ScrollArea + FloatingHeader + PageTitle + list component). A new `<ProjectsList>` component renders curated entries from a static array (`src/lib/projects.js`) with title, short description, repo URL, and optional tech tags — same row layout and hover styles as `talks-list.js` so it matches the existing minimalist theme. Wire it into the global nav (`LINKS` in `src/lib/constants.js`), home page (small "Projects" section above or beside Talks, matching the existing Talks block on `page.js`), and `sitemap.js`.

**Design parity rules:**
- Use `ScrollArea`, `FloatingHeader`, `PageTitle`, `content-wrapper`, `content` exactly as `/talks` does
- Row styling: `flex items-baseline justify-between gap-4 border-b border-gray-200 py-4 first:border-t hover:text-blue-600` (same as `talks-list.js:31`)
- `ArrowUpRightIcon` for external links; `target="_blank" rel="noopener noreferrer"` (matches PR #2 convention)
- Mono-font right-side metadata slot (used by talks for `/slug/`) — repurpose for tech stack or stars
- No new colors, no new fonts, no new spacing tokens

**Data source decision:** Static curated list in `src/lib/projects.js` (not GitHub API). Reasons: user wants curation ("some of the work"), avoids rate limits / runtime fetch failures, keeps the page server-renderable with no async deps, and lets him control ordering/descriptions. Can add a GitHub-API enrichment layer later if desired.

---

## Phase 1 — Data + List Component

- [x] Create `src/lib/projects.js` exporting a `PROJECTS` array. Each entry: `{ slug, title, description, url, tech?: string[] }`. Seed with these 12 repos in this exact order (Ali-curated from `aliir74` GitHub):

  1. **news-summarizer** — `https://github.com/aliir74/news-summarizer` — "Persian news bot: monitors Telegram channels and RSS feeds, summarizes via LLM, posts to Telegram and Bale." — `["Python", "Pyrogram", "OpenRouter"]`
  2. **cortex** — `https://github.com/aliir74/cortex` — "Claude Code plugin with developer-productivity skills — PR monitoring, ClickUp, research, browser verification." — `["Claude Code", "Shell"]`
  3. **fact-checker-bot** — `https://github.com/aliir74/fact-checker-bot` — "Telegram bot that fact-checks text, images, and URLs using Google Fact Check API + Gemini, deployed on Cloudflare Workers." — `["TypeScript", "Cloudflare Workers", "D1"]`
  4. **twitter-blocker** — `https://github.com/aliir74/twitter-blocker` — "Chrome/Firefox extension that uses AI to detect and block hate speech or cult-like praise in Twitter/X replies." — `["TypeScript", "WXT", "React"]`
  5. **clickup-cli** — `https://github.com/aliir74/clickup-cli` — "Command-line ClickUp client with git integration, GitHub linking, and AI-agent support." — `["Go"]` _(fork — contributions upstream)_
  6. **Amethyst** — `https://github.com/aliir74/Amethyst` — "Contributions to Amethyst — automatic tiling window manager for macOS, à la xmonad." — `["Swift"]` _(fork — contributions upstream; refine description to specify what was added)_
  7. **intent-prompter** — `https://github.com/aliir74/intent-prompter` — "Anchor — ADHD return-to-PC intent prompter. Asks what you came back for so you don't get lost." — `["Rust", "Tauri", "React"]`
  8. **copy-image-hotkey** — `https://github.com/aliir74/copy-image-hotkey` — "Obsidian plugin: Cmd+C copies the actual image when an image embed is selected in source mode." — `["TypeScript", "Obsidian"]`
  9. **persian-pdf-to-epub** — `https://github.com/aliir74/persian-pdf-to-epub` — "Convert Persian (Farsi) PDFs to EPUB with proper RTL handling, dictionary-based word repair, and auto section detection." — `["Python"]`
  10. **x-shield** — `https://github.com/aliir74/x-shield` — "Auto-privates your X account when viral activity is detected — adaptive thresholds on followers and engagement spikes." — `["Python", "twikit"]`
  11. **channel-ghost** — `https://github.com/aliir74/channel-ghost` — "Always-on Telegram watcher that mirrors channels and archives deleted posts." — `["Python", "Telethon"]`
  12. **persian-translator-bot** — `https://github.com/aliir74/persian-translator-bot` — "Telegram bot that translates messages to Persian via OpenRouter LLM." — `["Python"]`

  Order in the array must match this list — it's the rendering order. Descriptions are starting points; Ali to refine before/after merging.
- [x] Create `src/components/projects-list.js` mirroring `src/components/talks-list.js`:
  - Server component (no `"use client"`)
  - Imports `PROJECTS` from `@/lib/projects`
  - Renders `<ul className="flex flex-col">` with the same row classes as talks-list
  - Left side: title + `ArrowUpRightIcon` + 1-line description in `text-sm text-gray-500`
  - Right side: optional tech tags or year in `font-mono text-xs text-gray-400`
  - External `<a>` with `target="_blank" rel="noopener noreferrer"` and `href={project.url}`
- [x] Implement
- [x] Verify: import the component in a scratch render, confirm no runtime errors and markup matches talks-list visual rhythm
- [x] Commit (bundles plan file): `feat(projects): add projects data + list component`

## Phase 2 — Page + Navigation Wiring

- [x] Create `src/app/projects/page.js` modeled exactly on `src/app/talks/page.js`:
  - `export const revalidate = 3600`
  - `<ScrollArea useScrollAreaId>` + `<FloatingHeader scrollTitle="Projects" />`
  - `<PageTitle title="Projects" />` + intro paragraph (`text-gray-600`, e.g. "Open-source things I've built recently.")
  - `<ProjectsList />`
  - `generateMetadata()` returning title/description/openGraph/canonical for `/projects`
- [x] Add `/projects` to `LINKS` in `src/lib/constants.js` with a suitable lucide icon (e.g. `CodeIcon` or `BoxIcon`) — import alongside the existing icons.
- [x] Add `/projects` entry to `src/app/sitemap.js` (priority 0.8, changeFrequency 'monthly', mirroring the talks entry).
- [x] Add a Projects block on the home page (`src/app/page.js`) just above or below the existing Talks block — same `<div className="content mb-12">` wrapper, same `<h2 className="mb-2 text-xl font-semibold tracking-tight">` heading, same "See all on /projects" pattern. Decide ordering: Projects-then-Talks vs Talks-then-Projects (recommend Projects first since it's the headline change).
- [x] Implement
- [x] Verify: run `npm run dev`, visit `/`, `/projects`, confirm nav link appears in side menu and mobile drawer, confirm Projects shows on home page, confirm `/projects` page renders with floating header and list. Open DevTools, confirm no console errors, confirm dark/light theme parity with `/talks`.
- [ ] Commit: `feat(projects): add /projects route and home section`

## Phase 3 — Polish + Ship

- [ ] Run `npm run lint` — fix any ESLint findings
- [ ] Run `npm run prettier` — apply formatting (single quotes, no semis, 120 width)
- [ ] Run `npm run build` — confirm production build passes, no warnings about missing metadata or dead links
- [ ] Eyeball `/projects` at xs (390px), sm (435px), and desktop widths — confirm the row layout doesn't wrap awkwardly with tech tags
- [ ] Confirm OG image generation still works (the global `og.png/route.js` should pick it up automatically — no per-page OG needed unless we want one)
- [ ] Commit any lint/format fixes
- [ ] Switch to personal GitHub account: `gh auth switch --user aliir74`
- [ ] Push branch and open PR with summary + screenshot of `/projects` page
- [ ] Switch back: `gh auth switch --user aliovou`

---

## Decisions Made

| Decision | Rationale |
|---|---|
| Static curated list in `src/lib/projects.js`, not GitHub API | User wants curation; avoids rate limits, runtime failures, async page; matches simplicity of `talks-list` |
| Seed with 12 repos, fixed order, including 2 forks (clickup-cli, Amethyst) | Ali-curated from aliir74 GitHub; forks included where Ali contributed upstream |
| Mirror `/talks` structure exactly (ScrollArea/FloatingHeader/PageTitle, same row styles) | "Make sure design matches current theme" — copy what works |
| Add a Projects section to home page mirroring the existing Talks block | Symmetry with how Talks already surfaces on home |
| New route under `/projects` (not `/work` or `/oss`) | Most discoverable; matches OSS framing in user request |
| No tech-tag colors / no new tokens | Theme is monochrome + blue accent; new colors would break parity |

---

## Errors Encountered

| Error | Attempt | Resolution |
|---|---|---|
| _(none yet)_ | | |
