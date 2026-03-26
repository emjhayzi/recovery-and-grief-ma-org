# Claude Handoff

Use this file as the starting point for a second-opinion review of the website project.

## Project Goal

Build a calm, clear, static website for Massachusetts peer grief support aimed at people in recovery grieving a death caused by alcohol or other drugs.

## What Is In Scope Right Now

- Static multi-page site
- Shared CSS and small JavaScript file
- Co-branded SADOD + The Sun Will Rise header/footer
- Early but structured content draft based on planning documents
- Local preview/testing through Python

## Main Files

- `index.html`
- `about.html`
- `connect.html`
- `groups.html`
- `whole-person.html`
- `resources.html`
- `help-others.html`
- `assets/css/styles.css`
- `assets/js/script.js`

## Source Material

Planning docs and original source assets are in `References/`.

The two active website logos are copied into:

- `assets/images/sadod-logo.png`
- `assets/images/tswr-logo.png`

## Current State

The site is intentionally a first structured draft, not a finished launch build.

Recent design/interaction notes from the latest pass:

- the homepage hero was reworked so both left and right panes sit inset within the hero, with the outer surfaces acting as visible framing layers
- the homepage hero no longer uses scroll-linked drifting; movement was reduced in favor of calmer static composition
- homepage section changes were softened with fade-based reveal treatment rather than stronger motion
- the six pathway cards on the homepage have active hover choreography and should be reviewed in-browser
- page-to-page transitions now animate main content and footer, while the header remains visually stable
- the overall site background now blends cooler SADOD-inspired tones on the left with warmer TSWRF-inspired tones on the right
- the header background was tested with a stronger co-branded gradient and then intentionally simplified back down
- button and menu interactions were refined and should be reviewed for feel, not just layout

Already done:

- page structure
- shared visual system
- responsive nav
- logo integration
- basic accessibility support
- basic SEO meta tags
- Python-based local preview workflow

Still intentionally unfinished:

- real contact details
- final bios and team photos
- final support-group schedule or registration flow
- final outbound resource links
- Phoenix/NewForm media embeds
- production hosting/domain setup

## What Needs Review

Please review for:

- broken or weak information architecture
- visual inconsistencies
- layout issues on mobile
- accessibility issues
- misleading placeholder language
- missing trust signals
- copy that feels unclear, clinical, or too generic
- SEO gaps for a simple static site
- anything that should be reorganized before more content is added

## How To Preview Locally

From the project root:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

There are also two clickable helper scripts in the project root:

- `Start Website Test.cmd`
- `Stop Website Test.cmd`

## Helpful Project Docs

- `README.md`
- `docs/README.md`
- `docs/agile/project-status.md`
- `docs/product/site-brief.md`
- `docs/product/content-inventory.md`
- `docs/operations/publish-checklist.md`

## Important Context

Some sections are placeholders on purpose. Please distinguish between:

- true problems or regressions
- acceptable placeholders that are waiting on real content

The most valuable feedback will focus on structure, clarity, usability, accessibility, and whether the site feels trustworthy and emotionally safe.
