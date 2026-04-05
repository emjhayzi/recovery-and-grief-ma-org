# Claude Handoff

Use this file as the starting point for a second-opinion review of the website project.

## Project Goal

Build a calm, clear, static website for Massachusetts peer grief support aimed at people in recovery grieving a death caused by alcohol or other drugs.

## What Is In Scope Right Now

- Static multi-page site (9 public pages)
- Shared CSS and small JavaScript file
- Co-branded SADOD + The Sun Will Rise header/footer
- Per-page atmospheric hero backgrounds with Unsplash photography
- An About Us section split into Who We Are and What We Do sub-pages
- A rebuilt Direct Connections page with alternating image/text layout
- Content drafts informed by v3-0 copy decks in the References folder
- Local preview/testing through Python

## Main Files

- `index.html`
- `about.html`
- `who-we-are.html`
- `what-we-do.html`
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

- the About Us section was split into Who We Are and What We Do, with a navigation dropdown
- connect.html was rebuilt from the v3-0 Direct Connection copy deck with alternating image/text bands, a prominent email CTA, and program teaser sections
- per-page atmospheric hero backgrounds use real Unsplash photography with CSS gradient fade overlays
- the header uses a three-column CSS grid with SADOD and TSWR logos flanking centered brand content
- navigation was redesigned to pipe-separated links on a single row
- page transition animations, staggered IntersectionObserver reveals, card drift-in, and scroll parallax are all in place
- the homepage hero was reworked as six pathway cards integrated directly into the hero stage
- the full-site background blends SADOD-inspired cool tones on the left with TSWRF-inspired warm sunrise tones on the right

Already done:

- 9-page site structure with About Us dropdown split
- shared visual system with per-page hero atmospheres
- responsive nav with pipe-separated links
- co-branded logo integration (pixel-edited SADOD logo + TSWR logo)
- alternating image/text layout on Direct Connections page
- page-to-page transitions and staggered section reveals
- basic accessibility support
- basic SEO meta tags
- Python-based local preview workflow
- Cloudflare Pages staging pipeline

Still intentionally unfinished:

- final team bios and photos
- final support-group schedule or registration flow
- final outbound resource links
- video embeds for whole-person page
- some placeholder copy in teaser sections pending client approval
- production hosting/domain setup
- Request Help form destination

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
- `docs/operations/qa-smoke-checklist.md`

## Important Context

Some sections are placeholders on purpose. Please distinguish between:

- true problems or regressions
- acceptable placeholders that are waiting on real content

The most valuable feedback will focus on structure, clarity, usability, accessibility, and whether the site feels trustworthy and emotionally safe.
