# Single Source Of Truth

Implementation audit date: April 13, 2026

This file is the master planning record for the Recovery and Grief website.

Important rule:

- the website source files are the source of truth for implemented behavior, copy, routes, and UI
- this file is the source of truth for current project status, open questions, and next priorities

## Snapshot

- Project: Recovery and Grief website
- Delivery model: custom static multi-page site
- Repo: `emjhayzi/recovery-and-grief-ma-org`
- Deployment model: GitHub-backed Cloudflare Pages using generated `publish/`
- Current stage: source-aligned refinement with staging-ready publishing workflow

## Implementation Truth

Current public site structure in source:

- `index.html`: homepage with six pathway cards
- `about.html`: redirect page
- `who-we-are.html`: team and lived-experience page with six profiles
- `what-we-do.html`: peer grief support explanation page
- `connect.html`: direct connection page with email plus the shared grief-support Google Form
- `what-is-a-peer-grief-ally.html`: explainer page linked from `connect.html`
- `groups.html`: support groups page with three editorial content bands and a featured `GROUP DIRECTORY` CTA
- `groups-directory.html`: printable support-group directory page
- `whole-person.html`: NewForm / recovery page with two live video embeds and one Tavyn title-slide image block
- `other-paths-to-recovery.html`: text-forward recovery-path directory page
- `resources.html`: short bridge page into Other Paths to Recovery
- `help-others.html`: intentional public future-state volunteer page
- `crisis-support.html`: crisis support route for urgent help guidance

Current shared behavior in source:

- co-branded masthead with clickable SADOD and TSWR logos
- primary nav exposes `What We Do` first and `Who We Are` last as top-level links
- primary `More Resources` and `Help Others` links route to approved external destinations
- shared stylesheet and shared JavaScript file
- calm page-to-page transitions with reduced-motion support
- homepage hero headline reads "You Are Not Alone" on one line
- shared footer support links route to the unified Google Form and the crisis page
- local Geneva font is used through `assets/fonts/GENEVA.TTF`
- `publish/` is generated from source with `node scripts/build-publish.mjs`

## Open Items Confirmed In Source

- Leslie's bio in `who-we-are.html` still includes `202x`
- `help-others.html` is still intentionally a public placeholder-style page
- the TSWR TikTok destination should still be verified for final public use

## Status Summary

What is in good shape:

- site architecture and navigation
- homepage pathway-based entry points
- direct support, support-group, and crisis routes
- populated Who We Are page
- whole-person and recovery resource pathways
- calm shared motion system
- generated publish workflow
- supporting docs realigned to implemented behavior

What is not final:

- one visible `202x` content placeholder
- final product decision on the public volunteer page
- validation of the TSWR TikTok destination
- final staging and production verification

## Working Priorities

1. clear the remaining `202x` placeholder in Leslie's bio when the approved year is known
2. decide whether `help-others.html` stays public, is hidden, or is fully built out
3. validate the TSWR TikTok URL
4. run full staging QA after each significant website change
5. confirm production hosting and DNS settings

## Current Decisions

- the website remains a custom static build
- GitHub is the repository of record
- Cloudflare Pages is the preferred deployment path
- the primary nav exposes `What We Do` and `Who We Are` as separate top-level items
- the fuller recovery-path directory lives in `other-paths-to-recovery.html`
- `resources.html` remains public as a bridge route
- `help-others.html` remains public as a companion page while top-level `Help Others` routes to the approved external form
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
