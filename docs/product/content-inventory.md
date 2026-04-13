# Content Inventory

Primary tracker: `docs/agile/single-source-of-truth.md`

Inventory audited against the website source on April 13, 2026.

## Project Format

The project is a folder-based static website. Root HTML files and `assets/` are the implementation truth. `publish/` is the generated deployment copy.

## Top-Level Website Files

- `index.html`
- `about.html`
- `who-we-are.html`
- `what-we-do.html`
- `connect.html`
- `what-is-a-peer-grief-ally.html`
- `groups.html`
- `groups-directory.html`
- `whole-person.html`
- `other-paths-to-recovery.html`
- `resources.html`
- `help-others.html`
- `crisis-support.html`
- `robots.txt`

## Shared Front-End Assets

- `assets/css/styles.css`
- `assets/js/script.js`
- `assets/fonts/GENEVA.TTF`
- `assets/images/`

## Current Page Inventory

| Page | Current role in source | Primary outcome |
| --- | --- | --- |
| `index.html` | Homepage with one-line hero and six pathway cards | Route visitors into the right next step |
| `about.html` | Redirect page | Preserve legacy route |
| `who-we-are.html` | Team and story page with six profile sections | Build trust |
| `what-we-do.html` | Peer grief support explanation page | Explain the offer |
| `connect.html` | Direct support page with email and the shared grief-support Google Form | Reach a real person |
| `what-is-a-peer-grief-ally.html` | Short explainer page linked from Direct Connection | Clarify the Ally role |
| `groups.html` | Group support explainer page | Understand groups and choose that path |
| `groups-directory.html` | Printable group directory page | Give visitors the full group list |
| `whole-person.html` | NewForm / whole-person page with two videos and one image-led story section | Connect grief support with recovery context |
| `other-paths-to-recovery.html` | Text-forward recovery-path directory page | Explore fellowships and support models |
| `resources.html` | Bridge page | Route visitors into Other Paths to Recovery |
| `help-others.html` | Future-state public page | Signal a possible future volunteer path |
| `crisis-support.html` | Crisis route page | Route urgent visitors to immediate help |

## Homepage Pathways

Current homepage cards route to:

- `what-we-do.html`
- `connect.html`
- `groups.html`
- `whole-person.html`
- `https://sadod.org/home/recovery`
- `https://forms.gle/H2V17AgJfC9tmfpu8`

## Design And Layout Notes

- shared co-branded masthead with outbound partner-logo links
- shared footer with support links, social links, and PSCP attribution
- calm page transitions are handled globally in `assets/js/script.js` and `assets/css/styles.css`
- local Geneva font is loaded from `assets/fonts/GENEVA.TTF`
- body copy inside `main` is left-aligned by default

## Current Public Questions Visible In Source

- Leslie bio still contains `202x`
- `help-others.html` is intentionally unfinished as a public pathway
- TSWR TikTok should still be validated for final public use

## Deployment Inventory

- `scripts/build-publish.mjs`: regenerates `publish/`
- `publish/`: deploy-ready copy of the current site
