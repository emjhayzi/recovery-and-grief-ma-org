# Getting Oriented

Primary planning tracker: `docs/agile/single-source-of-truth.md`

Audited against the website source on April 15, 2026.

This file is the fastest way to re-enter the project after time away.

## What This Project Is

- static multi-page website
- plain HTML, CSS, and JavaScript
- no framework app, CMS runtime, or database in this repo
- Node script used only to regenerate `publish/`
- best suited to static hosting such as Cloudflare Pages

## Current Public Pages

- `index.html`: homepage with six pathway cards
- `about.html`: legacy redirect to `what-we-do.html`
- `who-we-are.html`: team and story page
- `what-we-do.html`: peer grief support explanation page
- `connect.html`: direct connection page
- `what-is-a-peer-grief-ally.html`: explainer page linked from Direct Connection
- `groups.html`: support groups page
- `groups-directory.html`: printable support-group directory page
- `whole-person.html`: Your Path / NewForm page
- `other-paths-to-recovery.html`: recovery-path directory
- `resources.html`: bridge page into Other Paths to Recovery
- `crisis-support.html`: crisis support page

## Shared Files

- `assets/css/styles.css`: layout, typography, responsive rules, and motion
- `assets/js/script.js`: mobile nav, dropdown behavior, page transitions, homepage motion, and scroll-to-top behavior
- `assets/images/`: partner logos, team photos, page imagery, and card imagery

## Deployment Copy

- `publish/`: generated deploy-ready copy of the site
- `scripts/build-publish.mjs`: rebuilds `publish/` from the root website files

## How The Site Is Structured

Each public page is a standalone HTML file using:

- the same masthead pattern
- the same footer structure
- the same shared stylesheet
- the same shared JavaScript file

Each page body has a `data-page` value used for page-specific styling and navigation state.

## Local Preview

Manual preview:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

Helper scripts:

- `tools/Start Website Test.cmd`
- `tools/Start Website Test.command`
- `tools/Stop Website Test.cmd`
- `tools/Stop Website Test.command`

## What Is Already Implemented In Source

- co-branded SADOD + TSWR masthead with outbound logo links
- homepage hero with six pathway cards
- shared footer with support, social, and PSCP sections
- global crisis route via `crisis-support.html`
- calm page-to-page transitions with reduced-motion handling
- live direct-contact email and unified Google Form support links on `connect.html`
- dedicated Peer Grief Ally explainer page linked from `connect.html`
- dedicated printable group directory page linked from `groups.html`
- populated team page with six profile sections
- two live YouTube embeds on `whole-person.html` plus a Tavyn title-slide image block
- More Resources bridge page
- primary nav now surfaces `What We Do` and `Who We Are` as top-level items
- primary `More Resources` and `Help Others` links now point to approved external destinations
- generated Cloudflare-ready `publish/` bundle

## Recent Changes

- mobile header spacing resolved: body padding-top tightened so the brand-shell sits close to the fixed crisis bar with no visible gap
- mobile crisis bar height increased and content centered (balanced vertical padding, explicit horizontal centering)
- CSS syntax error in the mobile brand-shell block corrected
- dead `help-others` entry removed from the JavaScript navigation map
- inner page titles on mobile now wrap and center horizontally; page-hero padding adjusted for balanced top/bottom spacing

## What Is Still Open In Source

- final staging and production deployment verification

## Working Rule

Treat the root HTML files and `assets/` as the implementation truth.

Treat the docs as support material that must stay aligned to the implementation truth.
