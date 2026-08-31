# SSDF Inc. / AMAIMA Inc. — Public Capability Site

A static, single-page public site built from the Capability Statement. No
login, no database, no backend — three files (`index.html`, `styles.css`,
`script.js`) plus a minimal `vercel.json` for security headers.

## Source repositories

Product links on this site point at GitHub first. Public product sites are
listed only when they are live.

| Product | Source | Site |
|---|---|---|
| **AMAIMA** | [github.com/CreoDAMO/AMAIMA](https://github.com/CreoDAMO/AMAIMA) — **private, access by request only** | [basisguard.site](https://basisguard.site) (public product surface) |
| **Genesis-Engine** | [github.com/CreoDAMO/Genesis-Engine](https://github.com/CreoDAMO/Genesis-Engine) | Site URL forthcoming |
| **StackDesk** | [github.com/CreoDAMO/StackDesk](https://github.com/CreoDAMO/StackDesk) | [stackdesk.online](https://stackdesk.online) |
| **SSDF Digital Commerce** | [github.com/CreoDAMO/SSDF_DigitalCommerce](https://github.com/CreoDAMO/SSDF_DigitalCommerce) | [ssdf.site](https://ssdf.site) |
| **BasisGuard** | [github.com/CreoDAMO/BasisGuard](https://github.com/CreoDAMO/BasisGuard) | [basisguard.site](https://basisguard.site) |

## Deploy to Vercel

**Option A — no Git needed (fastest):**
1. Go to vercel.com, sign in, click **Add New → Project**.
2. Choose **Deploy without Git** / drag-and-drop, and drop this whole folder in.
3. Vercel detects it as a static site automatically — no build command needed.

**Option B — via GitHub (recommended for future edits):**
1. Create a new empty repo on GitHub.
2. From this folder: `git init`, `git add .`, `git commit -m "Initial site"`,
   then push to the new repo.
3. In Vercel: **Add New → Project → Import Git Repository**, select the repo.
4. Framework preset: **Other** (static). No build command, no output directory
   override needed — leave both blank.
5. Deploy. Vercel gives you a `*.vercel.app` URL immediately; add a custom
   domain (e.g. `amaima.live` or a subdomain) under Project → Settings →
   Domains once ready.

## Editing content later

All copy lives directly in `index.html`, organized by section comment
(`<!-- HERO -->`, `<!-- SOURCE -->`, `<!-- CORE CAPABILITIES -->`, etc.). Colors and type live in
`styles.css` under `:root` at the top of the file. No build step — edit and
redeploy (or just push to GitHub if connected, and Vercel redeploys
automatically).

## What's intentionally not here

This is the Public tier only — no investor login, no admin dashboard, no
AR/AP, no database. The full internal company-management app (entities,
patents, cap table, contracts, AR/AP, document intake) lives in the separate
Replit-hosted build. This site is just the front door.
