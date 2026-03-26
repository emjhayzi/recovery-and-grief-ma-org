# Content Inventory

## Project Format

The project is a folder-based static website. There is no framework, build pipeline, or package manager in the current setup.

## Top-Level Inventory

### Public Website Files

- `index.html`
- `about.html`
- `connect.html`
- `groups.html`
- `whole-person.html`
- `resources.html`
- `help-others.html`
- `robots.txt`

### Shared Front-End Assets

- `assets/css/styles.css`: full visual system, layout, responsive behavior, and page atmosphere styling
- `assets/js/script.js`: mobile navigation toggle and active-page state
- `assets/images/sadod-logo.png`
- `assets/images/tswr-logo.png`
- `assets/images/sadod-logo-backup.png`

### Local Preview Scripts

- `Start Website Test.cmd`: starts a Python-based local server on port 8000 and opens the browser
- `Stop Website Test.cmd`: stops the local server on port 8000

### Project And Handoff Docs

- `README.md`
- `CLAUDE-HANDOFF.md`
- `docs/README.md`

### Source Material

- `References/`: planning documents, PDFs, logo experiments, and image-processing outputs used during design exploration

## Page Inventory

| Page | Purpose | Current Status | Main CTA / Outcome |
| --- | --- | --- | --- |
| `index.html` | Introduce the program and route visitors into support pathways | Strong draft | Talk to someone now |
| `about.html` | Explain peer grief support and the partner model | Draft with placeholders | Build trust and understanding |
| `connect.html` | Present direct connection and one-on-one support options | Structurally ready, operationally incomplete | Reach out for support |
| `groups.html` | Explain group support and how to join | Needs final schedule/process | Join or ask about a group |
| `whole-person.html` | Frame grief support within broader recovery wellbeing | Good draft, needs program specifics | Understand broader support path |
| `resources.html` | Offer curated follow-up materials and links | Needs approved external resources | Explore trusted resources |
| `help-others.html` | Hold a future volunteer/supporter pathway | Strategic decision pending | Volunteer or express interest |

## Design System Notes

- Typography is loaded from Google Fonts in the stylesheet
- The visual direction uses warm neutrals, teal accents, soft cards, and page-specific hero atmospheres
- Layout is mobile-responsive through shared media queries
- Navigation state is controlled through the `data-page` attribute on each page body

## Technical Inventory

### Dependencies

- Browser support for HTML/CSS/JavaScript
- Google Fonts import in `assets/css/styles.css`
- Python available locally for `python -m http.server 8000` or the start script

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
- `docs/operations/client-hosting-recommendation.md`

### Research

- `docs/research/maintenance-pricing-research.md`

### Reviews

- `docs/reviews/claude-second-opinion-prompt.md`

## Current Gaps Visible From Inventory

- launch contact path is still missing
- several pages still contain approved-placeholder language only
- there is no live deployment target in the folder
- source control is not yet configured in this workspace
