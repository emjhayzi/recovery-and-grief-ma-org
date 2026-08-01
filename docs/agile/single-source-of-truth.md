# Single Source Of Truth

Implementation audit date: July 13, 2026

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
- `who-we-are.html`: team and lived-experience page with four profiles (Tavyn, Melissa, Olivia, Franklin; Leslie and David removed August 2026)
- `what-we-do.html`: peer grief support explanation page
- `connect.html`: direct connection page with email plus the shared grief-support Google Form
- `what-is-a-peer-grief-ally.html`: explainer page linked from `connect.html`
- `groups.html`: support groups page with three editorial content bands and a clay-highlighted opening band
- `groups-directory.html`: native flyer-style directory page mirroring the printed PDF on a white document card (co-branded header, group photo, intro, In-Person and Virtual group listings, QR code, PDF download)
- `whole-person.html`: NewForm / recovery page with two live video embeds and one Tavyn native video player block
- `other-paths-to-recovery.html`: text-forward recovery-path directory page
- `crisis-support.html`: crisis support route for urgent help guidance

Current shared behavior in source:

- site header transitions to the mobile, centered layout (with menu toggle) at the 980px breakpoint to match main content transitions
- branding text (Massachusetts, Recovery and Grief, subtitle) and menu button are explicitly centered on all mobile/tablet viewports
- mobile navigation uses a fixed, centered modal card over a blurred backdrop, with page-scroll locking
- crisis support page features full-width, elegantly spaced interactive cards on mobile
- crisis bar explicitly keeps crisis action links cleanly constrained to a single line on mobile viewports
- footer legal elements dynamically shift to the absolute bottom below the PSCP text on mobile viewports via robust Flexbox ordering with equalized spacing
- shared stylesheet and shared JavaScript file
- calm page-to-page transitions with reduced-motion support
- homepage hero headline reads "You Are Not Alone" on one line
- shared footer support links route to the unified Google Form and the crisis page
- local Geneva font is used through `assets/fonts/GENEVA.TTF`
- Tavyn title block on the Whole Person page utilizes a native HTML5 video player
- `publish/` is generated from source with `node scripts/build-publish.mjs`
- masthead is co-branded PSCP (left) and SADOD (right); the PSCP logo is scaled up ~15% so both read evenly. TSWR appears in the footer only.

## Phase One Update — June 2026 Doc (Completed July 13, 2026)

Applied from `RG-Website - Update - June 2026.docx`:

- Masthead logos: replaced TSWR with PSCP and swapped sides to PSCP (left) / SADOD (right) across all pages; TSWR retained in the footer.
- Group directory rebuilt from a flat image into a native HTML flyer page that mirrors the PDF on a white document card; new `assets/docs/groups-directory.pdf` wired to the download button.
- Homepage: deleted the "A Grassroots Partnership" subhead and content; "Services in Massachusetts and Beyond" now stands alone as a centered band at the bottom of the page.
- Homepage hero card captions renamed (five of six): Direct Connection to "Connect With a Peer Grief Helper", Support Groups to "Attend a Peer Grief Support Group", Your Path to "Find Your Recovery Path", More Resources to "Explore More Resources", Help Others to "Volunteer to Help Others"; "Learn About Peer Grief Support" unchanged.
- "MASSACHUSETTS" eyebrow set to 14pt, regular weight, colored to match the nav labels.
- Added a third quick-support link beneath the nav: "Grief Support Groups HERE" pointing to `groups.html`, placed between the two existing links.
- New assets: `assets/images/pscp-logo-square.png`, `assets/images/directory-photo.png`, `assets/images/directory-qr.png`.
- Cache-bust version advanced to `v=20260713i`.

## Who We Are Page Update — August 2026

Removed Leslie Lagos and David Swindell profile blocks from `who-we-are.html` per Phase Two direction in the June 2026 update doc. Remaining four profiles (Tavyn, Melissa, Olivia, Franklin) keep their original order and alternating left/right photo layout without further CSS changes. Committed on branch `who-we-are-remove-leslie-david`, merged and pushed to `main`.

## Open Items Confirmed In Source

- the TSWR TikTok destination has been verified
- directory facilitator emails use the `peersupportcommunitypartners.com` domain (differs from the source PDF's `peercommunitysupportpartners.com`; confirm before production)

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

- final staging and production verification

## Working Priorities

1. QA pass across all pages for the masthead logo swap and the new quick-support link
2. commit Phase One and push so Cloudflare builds a staging version for review
3. run full staging QA after each significant website change
4. confirm production hosting and DNS settings
5. Phase Two (June 2026 doc): MA-vs-virtual wording, strengthen "Path" content and NF app QR, Connect page fixes

## Current Decisions

- the website remains a custom static build
- GitHub is the repository of record
- Cloudflare Pages is the preferred deployment path
- the primary nav exposes `What We Do` and `Who We Are` as separate top-level items
- the fuller recovery-path directory lives in `other-paths-to-recovery.html`
- help-others and resources temporary bridge routes have been retired from the source
- helper scripts and the Node publish build remain part of the workflow
- the active local working copy lives at `~/Projects/Recovery & Grief Website` (moved out of OneDrive to avoid sync conflicts that split edits into device-named copies)

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
