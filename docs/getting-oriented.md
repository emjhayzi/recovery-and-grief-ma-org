# Getting Oriented

Primary planning tracker: `docs/agile/single-source-of-truth.md`

This file is the fastest way to re-enter the project after time away.

## What This Project Is

- Static multi-page website
- Plain HTML, CSS, and JavaScript
- No framework app, CMS runtime, or database in this repo
- Node script used only to regenerate `publish/`
- Best suited to static hosting such as Cloudflare Pages

## Current Public Pages

- `index.html`: homepage with six support/resource pathway cards
- `about.html`: legacy redirect to `who-we-are.html`
- `who-we-are.html`: team/story page
- `what-we-do.html`: peer grief support explanation page
- `connect.html`: direct connection page
- `groups.html`: support groups page
- `whole-person.html`: Your Path / New Form page
- `other-paths-to-recovery.html`: recovery-path directory
- `resources.html`: bridge page into Other Paths to Recovery
- `help-others.html`: placeholder future volunteer page

## Shared Files

- `assets/css/styles.css`: layout, typography, responsive rules, motion, and component styling
- `assets/js/script.js`: mobile nav, page transitions, and homepage motion behavior
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
- the same footer class structure
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
- homepage partnership section stacked vertically
- four-part footer styling
- live direct-contact email and Request Help form links
- live support-group directory link and group-support email
- populated team page with five profile sections
- two live YouTube embeds on `whole-person.html`
- More Resources bridge page
- generated Cloudflare-ready `publish/` bundle

## What Is Still Open In Source

- crisis CTA links still point to `#`
- TSWR social links still point to `#`
- one Tavyn video block still needs a real destination
- Leslie bio still contains a `202x` placeholder year
- `help-others.html` is still intentionally a placeholder page
- `groups.html` still references a future Group Readings block in a comment

## Working Rule

Treat the root HTML files and `assets/` as the implementation truth.

Treat the docs as support material that must stay aligned to the implementation truth.
