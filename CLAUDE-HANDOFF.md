# Claude Handoff

Audited against the website source on April 12, 2026.

Use this file as the fastest orientation pass before reviewing or editing the project.

## Project Goal

Maintain and refine a calm, trustworthy static website for people in recovery grieving a substance-use-related death.

## What The Website Currently Is

- custom static multi-page site
- plain HTML, CSS, and a small amount of JavaScript
- 11 public HTML pages plus `design-lab.html`
- shared co-branded masthead and shared footer patterns
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
- `crisis-support.html`

## Current Source Truth Highlights

- homepage hero uses a one-line "You Are Not Alone" heading and six pathway cards
- the global support links include a Google document request route plus a dedicated crisis page
- `connect.html` offers both `connect@recoveryandgrief-MA.org` and the live SADOD Request Help form
- `groups.html` explains the support-group experience with three editorial bands
- `what-we-do.html` is now a two-band explanation page with editorial imagery
- `who-we-are.html` includes five team/profile sections with real images and long-form copy
- `whole-person.html` contains two live YouTube embeds plus a Tavyn story image block
- `resources.html` is intentionally a short bridge page into `other-paths-to-recovery.html`
- `help-others.html` is intentionally still a visible future-state page
- `assets/js/script.js` now handles site navigation plus calm page transitions

## Current Open Questions In The Source

- Leslie's bio still includes a `202x` placeholder year on `who-we-are.html`
- `help-others.html` still needs a keep/hide/finalize decision
- the global request route and the `connect.html` request route are not the same URL
- TSWR TikTok and LinkedIn URLs should be confirmed before a production push

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

## What To Review

Please prioritize:

- broken or misleading information architecture
- mobile layout issues
- accessibility risks
- trust and safety issues for a grieving audience
- transition polish and reduced-motion behavior
- support-route consistency
- any content that still reads as unfinished in public
