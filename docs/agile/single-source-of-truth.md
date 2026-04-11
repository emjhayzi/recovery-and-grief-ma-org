# Single Source Of Truth

Implementation audit date: April 11, 2026

This file is the master planning record for the Recovery and Grief website.

Important rule:

- the website source files are the source of truth for implemented behavior, copy, routes, and UI
- this file is the source of truth for project status, open issues, and next priorities

## Snapshot

- Project: Recovery and Grief website
- Delivery model: custom static multi-page site
- Repo: `emjhayzi/recovery-and-grief-ma-org`
- Deployment model: GitHub-backed Cloudflare Pages using generated `publish/`
- Current stage: source-verified refinement and launch-readiness cleanup

## Implementation Truth

Current public site structure in source:

- `index.html`: homepage with six pathway cards
- `about.html`: redirect page
- `who-we-are.html`: team/story page with five profiles
- `what-we-do.html`: peer grief support explanation page
- `connect.html`: direct connection page with email plus Request Help form
- `groups.html`: support groups page with directory button plus email route
- `whole-person.html`: New Form / recovery page with two live video embeds and one pending Tavyn placeholder
- `other-paths-to-recovery.html`: recovery-path directory
- `resources.html`: short bridge page to the recovery-path directory
- `help-others.html`: intentional placeholder page for a future volunteer path

Current shared behavior in source:

- co-branded masthead with clickable SADOD and TSWR logos
- shared stylesheet and shared JavaScript file
- homepage hero headline reads "You are not alone" on one line
- homepage partnership section is stacked vertically
- footer is styled as a structured four-part row
- local Geneva font is used through `assets/fonts/GENEVA.TTF`
- `publish/` is generated from source with `node scripts/build-publish.mjs`

## Open Items Confirmed In Source

- crisis CTA links still use `href="#"`
- TSWR social links in the footer still use `href="#"`
- Tavyn story video on `whole-person.html` still needs a real URL or embed
- Leslie bio in `who-we-are.html` still includes a `202x` placeholder year
- `help-others.html` is still intentionally a future-state placeholder
- `groups.html` still contains a source comment about a future Group Readings block

## Status Summary

What is in good shape:

- site architecture and navigation
- homepage pathway-based entry points
- direct support/contact route
- support-group directory route
- populated Who We Are page
- generated publish workflow
- baseline operations and planning docs

What is not final:

- crisis-routing destination
- TSWR social destinations
- final Tavyn media
- at least one remaining bio placeholder
- final decision on the public volunteer page
- final production launch/DNS lock

## Working Priorities

1. Replace all `href="#"` destinations that are meant to go live
2. Resolve the Tavyn story media block on `whole-person.html`
3. Clear the remaining `202x` placeholder and any similar public placeholders
4. Decide the final public role of `help-others.html`
5. Run final QA on mobile, desktop, accessibility, and staging
6. Confirm production hosting and DNS settings

## Current Decisions

- the website remains a custom static build
- GitHub is the repository of record
- Cloudflare Pages is the preferred deployment path
- About Us is split into Who We Are and What We Do
- the fuller recovery-path directory lives in `other-paths-to-recovery.html`
- `resources.html` remains public as a bridge route
- helper scripts and the Node publish build remain part of the workflow

## Supporting Docs That Must Stay In Sync

- `docs/agile/project-status.md`
- `docs/agile/product-backlog.md`
- `docs/agile/release-roadmap.md`
- `docs/agile/raid-log.md`
- `docs/product/site-brief.md`
- `docs/product/content-inventory.md`
- `docs/operations/runbook.md`
- `docs/operations/publish-checklist.md`
- `docs/operations/qa-smoke-checklist.md`
- `docs/getting-oriented.md`

## Operating Rule

When site behavior changes:

1. update the implemented source files first
2. update this file
3. update the supporting docs affected by that change
