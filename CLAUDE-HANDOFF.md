# Claude Handoff

Audited against the website source files on April 11, 2026.

Use this file as the fastest orientation pass before reviewing the project.

## Project Goal

Maintain and refine a calm, trustworthy static website for people in recovery grieving a substance-use-related death.

## What The Website Currently Is

- Custom static multi-page site
- Plain HTML, CSS, and a small amount of JavaScript
- 10 public HTML pages plus `design-lab.html`
- Shared co-branded masthead and shared footer styling
- Git-tracked source with a generated `publish/` bundle

## Public Pages

- `index.html`
- `about.html` redirect
- `who-we-are.html`
- `what-we-do.html`
- `connect.html`
- `groups.html`
- `whole-person.html`
- `other-paths-to-recovery.html`
- `resources.html`
- `help-others.html`

## Current Source Truth Highlights

- homepage hero uses a one-line "You are not alone" heading and six pathway cards
- homepage partnership section is stacked, not side-by-side
- homepage footer is structured as four columns with centered column content
- `connect.html` offers both `connect@recoveryandgrief-MA.org` and the live SADOD Request Help form
- `groups.html` offers both a live Support Group Directory link and `groups@recoveryandgrief-MA.org`
- `what-we-do.html` ends with a combined welcome / ready CTA block
- `who-we-are.html` includes five team/profile sections with real images and long-form copy
- `whole-person.html` contains two live YouTube embeds plus one preserved Tavyn placeholder block
- `resources.html` is intentionally a short bridge page into `other-paths-to-recovery.html`
- `help-others.html` is intentionally still a placeholder/future-state page

## Known Gaps In The Source

- crisis CTA links still point to `#`
- TSWR social links in the footer still point to `#`
- Tavyn story video destination is still missing on `whole-person.html`
- Leslie's bio still includes a `202x` placeholder year on `who-we-are.html`
- `help-others.html` still needs a final publish/hide/reframe decision
- `groups.html` still contains a comment about a future Group Readings block

## Main Files

- `assets/css/styles.css`
- `assets/js/script.js`
- `scripts/build-publish.mjs`
- `docs/agile/single-source-of-truth.md`
- `docs/operations/runbook.md`
- `docs/product/content-inventory.md`

## How To Preview

```powershell
python -m http.server 8000
```

Open `http://localhost:8000`.

Helper scripts also exist for quick start/stop.

## What To Review

Please prioritize:

- broken or misleading information architecture
- mobile layout issues
- accessibility risks
- trust/safety issues for a grieving audience
- placeholder content that should not remain public
- footer / CTA / contact-route inconsistencies
- copy that feels generic, clinical, or unclear

## Best Context Docs

- `README.md`
- `docs/README.md`
- `docs/agile/single-source-of-truth.md`
- `docs/agile/project-status.md`
- `docs/product/site-brief.md`
- `docs/operations/publish-checklist.md`
- `docs/operations/qa-smoke-checklist.md`
