# Content Inventory

Primary tracker: `docs/agile/single-source-of-truth.md`

Inventory audited against the website source on April 11, 2026.

## Project Format

The project is a folder-based static website. Root HTML files and `assets/` are the implementation truth. `publish/` is the generated deployment copy.

## Top-Level Website Files

- `index.html`
- `about.html`
- `who-we-are.html`
- `what-we-do.html`
- `connect.html`
- `groups.html`
- `whole-person.html`
- `other-paths-to-recovery.html`
- `resources.html`
- `help-others.html`
- `design-lab.html`
- `robots.txt`

## Shared Front-End Assets

- `assets/css/styles.css`
- `assets/css/design-lab.css`
- `assets/js/script.js`
- `assets/js/design-lab.js`
- `assets/fonts/GENEVA.TTF`
- `assets/images/`

## Current Page Inventory

| Page | Current role in source | Primary outcome |
| --- | --- | --- |
| `index.html` | Homepage with one-line hero and six pathway cards | Route visitors into the right next step |
| `about.html` | Redirect page | Preserve legacy route |
| `who-we-are.html` | Team/story page with five profile sections | Build trust |
| `what-we-do.html` | Peer grief support explanation plus CTA block | Explain the offer and invite next steps |
| `connect.html` | Direct support page with email and Request Help form | Reach a real person |
| `groups.html` | Group support page with directory and email route | Find or ask about a group |
| `whole-person.html` | New Form / whole-person page with two live videos and one pending Tavyn block | Connect grief support with recovery context |
| `other-paths-to-recovery.html` | Recovery-path directory page | Explore fellowships and support models |
| `resources.html` | Bridge page | Route visitors into Other Paths to Recovery |
| `help-others.html` | Future-state placeholder page | Signal a possible future volunteer path |

## Homepage Pathways

Current homepage cards route to:

- `who-we-are.html`
- `connect.html`
- `groups.html`
- `whole-person.html`
- `resources.html`
- `help-others.html`

## Design And Layout Notes

- shared co-branded masthead with outbound partner-logo links
- homepage partnership block is stacked vertically
- footer is styled as a four-part row
- homepage currently adds footer column labels in markup
- local Geneva font is loaded from `assets/fonts/GENEVA.TTF`
- body copy inside `main` is left-aligned by default

## Current Public Gaps Visible In Source

- crisis CTA links still use `href="#"`
- TSWR social links still use `href="#"`
- Tavyn video block is still in placeholder state
- Leslie bio still contains `202x`
- `help-others.html` is intentionally unfinished

## Deployment Inventory

- `scripts/build-publish.mjs`: regenerates `publish/`
- `publish/`: deploy-ready copy of the site
