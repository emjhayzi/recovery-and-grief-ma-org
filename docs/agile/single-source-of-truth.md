# Single Source Of Truth

Implementation audit date: April 15, 2026

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
- `groups.html`: support groups page with three editorial content bands and a clay-highlighted opening band
- `groups-directory.html`: printable support-group directory page
- `whole-person.html`: NewForm / recovery page with two live video embeds and one Tavyn native video player block
- `other-paths-to-recovery.html`: text-forward recovery-path directory page
- `crisis-support.html`: crisis support route for urgent help guidance

Current shared behavior in source:

- site header transitions to the mobile, centered layout (with menu toggle) at the 980px breakpoint to match main content transitions
- branding text (Massachusetts, Recovery and Grief, subtitle) and menu button are explicitly centered on all mobile/tablet viewports
- mobile navigation uses a fixed, centered modal card over a blurred backdrop, with page-scroll locking
- crisis support page features full-width, elegantly spaced interactive cards on mobile
- crisis bar is fixed at the top of the viewport on mobile with centered, vertically balanced padding and horizontally centered links
- mobile header has no excess top spacing — body padding-top is set to clear the fixed crisis bar without creating a visible gap
- footer legal elements dynamically shift to the absolute bottom below the PSCP text on mobile viewports via robust Flexbox ordering with equalized spacing
- shared stylesheet and shared JavaScript file
- calm page-to-page transitions with reduced-motion support
- homepage hero headline reads "You Are Not Alone" on one line
- shared footer support links route to the unified Google Form and the crisis page
- local Geneva font is used through `assets/fonts/GENEVA.TTF`
- Tavyn title block on the Whole Person page utilizes a native HTML5 video player
- `publish/` is generated from source with `node scripts/build-publish.mjs`

## Open Items Confirmed In Source

- the TSWR TikTok destination has been verified (`@.thesunwillrise` with dot is correct)
- Leslie's bio year is confirmed as 2022
- `help-others.html` has been retired; the Help Others nav link and homepage card route to the external Google Form

## Status Summary

What is in good shape:

- site architecture and navigation
- homepage pathway-based entry points
- direct support, support-group, and crisis routes
- populated Who We Are page (Leslie's bio year confirmed as 2022)
- whole-person and recovery resource pathways
- calm shared motion system
- generated publish workflow
- supporting docs realigned to implemented behavior
- TSWR TikTok URL confirmed (`@.thesunwillrise`)
- Help Others decision made: retired `help-others.html`, routes to external form
- mobile header spacing resolved: no gap between fixed crisis bar and brand-shell
- mobile crisis bar height and centering refined

What is not final:

- final staging and production verification

## Working Priorities

1. run full staging QA after each significant website change
2. confirm production hosting and DNS settings

## Current Decisions

- the website remains a custom static build
- GitHub is the repository of record
- Cloudflare Pages is the preferred deployment path
- the primary nav exposes `What We Do` and `Who We Are` as separate top-level items
- the fuller recovery-path directory lives in `other-paths-to-recovery.html`
- help-others and resources temporary bridge routes have been retired from the source
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
