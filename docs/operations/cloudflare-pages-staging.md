# Cloudflare Pages Staging Plan

Primary tracker: `docs/agile/single-source-of-truth.md`

Audited against the website source on April 12, 2026.

## Current Deployment Truth

- root HTML files plus `assets/` are the source
- `publish/` is generated from that source by `node scripts/build-publish.mjs`
- Cloudflare Pages is the preferred staging and production platform

## Recommended Build Settings

- Framework preset: `None`
- Build command: `node scripts/build-publish.mjs`
- Build output directory: `publish`

## Working Rule

Do not hand-edit `publish/`.

If the root website files change:

1. regenerate `publish/`
2. push the approved commit
3. verify the staging build in Cloudflare Pages

## Review Flow

1. Push the approved source changes
2. Confirm Cloudflare Pages receives the new build
3. Review the staging URL first
4. Run the smoke checklist
5. Share staging for review
6. Repeat until approved
