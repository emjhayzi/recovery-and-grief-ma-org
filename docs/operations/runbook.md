# Operations Runbook

Primary tracker: `docs/agile/single-source-of-truth.md`

Audited against the website source on April 11, 2026.

## Purpose

This runbook explains how to edit, preview, QA, publish, and maintain the website.

## Core Rule

The root website files are the implementation truth:

- root `.html` pages
- `assets/css/styles.css`
- `assets/js/script.js`

Update docs after the source changes, not before.

## Project Model

- static HTML, CSS, and JavaScript
- 10 public pages plus `design-lab.html`
- local Geneva font asset instead of a required Google Fonts dependency
- Node script used to regenerate `publish/`
- Git/GitHub-backed deployment path

## Editing Workflow

1. Edit the relevant page or shared asset.
2. If the change affects site-wide layout or styling, update `assets/css/styles.css`.
3. If the change affects navigation or transitions, update `assets/js/script.js`.
4. If the change affects project state, update `docs/agile/single-source-of-truth.md`.
5. Sync any affected supporting docs in the same workstream.

## Local Preview

Manual:

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

## QA Workflow

Before publishing:

1. click all internal links
2. test the homepage pathway cards
3. test the Request Help and support-group routes
4. review mobile and desktop layouts
5. check current public placeholder/destination gaps
6. complete `docs/operations/qa-smoke-checklist.md`
7. complete `docs/operations/publish-checklist.md`

## Publish Workflow

1. finalize the source changes
2. run local QA
3. regenerate `publish/` with `node scripts/build-publish.mjs`
4. commit and push the approved changes
5. verify the connected Cloudflare Pages build
6. review staging before any production move

## Current Watch Items

- crisis CTA placeholders
- TSWR social placeholders
- Tavyn video placeholder
- Leslie `202x` placeholder
- final decision on `help-others.html`

## Handoff Minimum

- website source files
- this runbook
- publish checklist
- QA checklist
- single-source-of-truth tracker
