# Content Inventory

Primary tracker: `docs/agile/single-source-of-truth.md`

## Project Format

The project is a folder-based static website. There is no framework or package-manager-driven app runtime in the current setup, but the workspace is tracked in Git and mirrored into a deploy-ready `publish/` folder for Cloudflare Pages staging and deployment.

## Top-Level Inventory

### Public Website Files

- `index.html`
- `about.html`
- `who-we-are.html`
- `what-we-do.html`
- `connect.html`
- `groups.html`
- `whole-person.html`
- `resources.html`
- `help-others.html`
- `design-lab.html`
- `robots.txt`

### Shared Front-End Assets

- `assets/css/styles.css`: full visual system, layout, responsive behavior, and page atmosphere styling (~2,240 lines)
- `assets/css/design-lab.css`: internal design-lab interface styles
- `assets/js/script.js`: mobile navigation toggle, active-page state, page transitions, and homepage motion
- `assets/js/design-lab.js`: internal live preview and override tooling for the design lab
- `assets/images/sadod-logo.png`
- `assets/images/tswr-logo.png`
- `assets/images/hero-*.jpg`: per-page atmospheric hero backgrounds (7 images)
- `assets/images/card-*.jpg`: card background images for homepage pathways and inner-page sections (6 images)

### Local Preview Scripts

- `Start Website Test.cmd`: starts a Python-based local server on port 8000 and opens the browser
- `Start Design Lab.cmd`: starts the local server and opens the design lab at `http://localhost:8000/design-lab.html`
- `Stop Website Test.cmd`: stops the local server on port 8000
- `Prepare Cloudflare Publish.cmd`: refreshes the deploy-ready `publish/` folder from the current site files

### Project And Handoff Docs

- `README.md`
- `CLAUDE-HANDOFF.md`
- `docs/README.md`

### Source Material

- `References/`: planning documents, PDFs, logo experiments, and image-processing outputs used during design exploration

## Page Inventory

| Page | Purpose | Current Status | Main CTA / Outcome |
| --- | --- | --- | --- |
| `index.html` | Introduce the program and route visitors into support pathways | Strong draft with hero pathway cards | Talk to someone now |
| `about.html` | Legacy about page retained for routing | Redirect candidate | Build trust and understanding |
| `who-we-are.html` | Team, mission, and peer grief support model | Draft with placeholders for bios | Build trust and understanding |
| `what-we-do.html` | Programs, RIVER model, and support options | Good draft with approved content | Understand available support |
| `connect.html` | Present direct connection and program options | Rebuilt from v3-0 copy deck with alternating layout | Reach out for support |
| `groups.html` | Explain group support and how to join | Needs final schedule/process | Join or ask about a group |
| `whole-person.html` | Frame grief support within broader recovery wellbeing | Good draft, video decision still open | Understand broader support path |
| `resources.html` | Offer curated follow-up materials and links | Implemented, pending final approval/curation check | Explore trusted resources |
| `help-others.html` | Hold a future volunteer/supporter pathway | Strategic decision pending | Volunteer or express interest |

## Design System Notes

- Typography uses Geneva as the preferred face, with a local font file plus Verdana/Tahoma fallbacks
- The visual direction uses warm neutrals, teal accents, soft cards, per-page hero atmospheres with Unsplash photography, and CSS gradient overlays
- Layout is mobile-responsive through shared media queries
- Navigation includes an About Us dropdown grouping Who We Are and What We Do
- Navigation state is controlled through the `data-page` attribute on each page body
- The header uses a three-column CSS grid with co-branded partner logos

## Technical Inventory

### Dependencies

- Browser support for HTML/CSS/JavaScript
- local Geneva font asset plus the current stylesheet imports
- Python available locally for `python -m http.server 8000` or the start script
- Git-based deployment workflow using the `publish/` directory for Cloudflare Pages staging

### No-Build Characteristics

- no npm
- no bundler
- no database
- no framework
- no server-side rendering

## Documentation Inventory

### Agile

- `docs/agile/project-charter.md`
- `docs/agile/project-status.md`
- `docs/agile/product-backlog.md`
- `docs/agile/release-roadmap.md`
- `docs/agile/raid-log.md`

### Product

- `docs/product/site-brief.md`
- `docs/product/content-inventory.md`

### Operations

- `docs/operations/runbook.md`
- `docs/operations/publish-checklist.md`
- `docs/operations/qa-smoke-checklist.md`
- `docs/operations/client-hosting-recommendation.md`
- `docs/operations/cloudflare-pages-staging.md`

### Research

- `docs/research/maintenance-pricing-research.md`

### Reviews

- `docs/reviews/claude-second-opinion-prompt.md`

## Current Gaps Visible From Inventory

- team bios and photos are still placeholder
- several pages still contain placeholder language pending client approval
- Request Help form destination is not yet linked
- whole-person video/embed direction is still not fully decided
- production launch details still need final confirmation even though staging is set up
- the design lab is still an internal tool and needs a final decision before public launch
