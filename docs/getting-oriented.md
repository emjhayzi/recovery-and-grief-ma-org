# Getting Oriented

Primary planning tracker: `docs/agile/single-source-of-truth.md`

This file is the fastest way to re-enter the project after time away.

## What This Project Is

- static multi-page website
- plain HTML, CSS, and JavaScript
- no framework app, CMS runtime, or database in this repo
- Node script used only to regenerate `publish/`
- best suited to static hosting such as Cloudflare Pages

## Current Public Pages

- `index.html`: homepage with six pathway cards
- `about.html`: legacy redirect to `who-we-are.html`
- `who-we-are.html`: team and story page
- `what-we-do.html`: peer grief support explanation page
- `connect.html`: direct connection page
- `groups.html`: support groups page
- `whole-person.html`: Your Path / NewForm page
- `other-paths-to-recovery.html`: recovery-path directory
- `resources.html`: bridge page into Other Paths to Recovery
- `help-others.html`: visible future-state volunteer page
- `crisis-support.html`: crisis support page

## Shared Files

- `assets/css/styles.css`: layout, typography, responsive rules, and motion
- `assets/js/script.js`: mobile nav, dropdown behavior, page transitions, homepage motion, and scroll-to-top behavior
- `assets/images/`: partner logos, team photos, page imagery, and card imagery

## Internal Tooling

- `design-lab.html`: internal visual experimentation page
- `assets/css/design-lab.css`
- `assets/js/design-lab.js`

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

- `Start Website Test.cmd`
- `Start Website Test.command`
- `Stop Website Test.cmd`
- `Stop Website Test.command`
- `Start Design Lab.cmd`

## What Is Already Implemented In Source

- co-branded SADOD + TSWR masthead with outbound logo links
- homepage hero with six pathway cards
- shared footer with support, social, and PSCP sections
- global crisis route via `crisis-support.html`
- calm page-to-page transitions with reduced-motion handling
- live direct-contact email and SADOD Request Help form on `connect.html`
- populated team page with five profile sections
- two live YouTube embeds on `whole-person.html`
- More Resources bridge page
- generated Cloudflare-ready `publish/` bundle

## What Is Still Open In Source

- Leslie's bio still contains `202x`
- `help-others.html` is still intentionally a placeholder-style public page
- the global request link and the `connect.html` request link use different URLs
- TSWR TikTok and LinkedIn URLs should be validated before production

## Working Rule

Treat the root HTML files and `assets/` as the implementation truth.

Treat the docs as support material that must stay aligned to the implementation truth.
