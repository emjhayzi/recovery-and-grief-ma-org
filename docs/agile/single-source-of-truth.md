# Single Source Of Truth

This file is the master project tracker for the Recovery and Grief website.

Use this document as the first place to check project status, decisions, platform state, launch blockers, and next actions.

All other Agile and operations docs should support this file, not compete with it.

## Snapshot

- Date: April 8, 2026
- Project: Recovery and Grief website
- Delivery stage: accelerated launch prep
- Primary repo: `emjhayzi/recovery-and-grief-ma-org`
- Working model: static multi-page website with GitHub-backed Cloudflare Pages staging

## Tracking Rule

- Local repo file is the working source of truth
- GitHub should mirror this exact file at the same path
- Cloudflare is a deployment platform, not a planning board
- Cloudflare should mirror deployment state from GitHub, not carry separate project-management records

## Platform Truth

### Local File

- Location: `docs/agile/single-source-of-truth.md`
- Role: primary planning and status record
- Owner: website designer-developer / maintainer
- Use for: current status, launch blockers, decisions, next steps, platform sync notes

### GitHub

- Repo: `emjhayzi/recovery-and-grief-ma-org`
- Mirror target: `docs/agile/single-source-of-truth.md`
- Role: shared remote copy of the same planning truth
- Use for: collaboration, version history, branch/PR review, and Cloudflare-connected deployment source

### Cloudflare

- Applicability: yes for deployment status, no for project-tracking boards
- Platform role: staging and production hosting through Cloudflare Pages
- Recommended truth source: GitHub repo contents and Cloudflare Pages project settings
- Rule: do not create a separate Cloudflare-only planning document unless Cloudflare-specific operational settings change

## Current Site State

- 10 public HTML pages plus 1 internal design lab
- Shared CSS and shared JavaScript architecture
- About Us content split into:
  - `who-we-are.html`
  - `what-we-do.html`
- `about.html` retained as a legacy routing page
- `connect.html` rebuilt from the v3-0 copy deck
- `groups.html` updated with Group Directory guidance and email route
- `other-paths-to-recovery.html` now holds the recovery-path resource cards under Your Path
- `resources.html` converted into a transition page for the More Resources route
- `whole-person.html` rebuilt as an editorial sequence with inline embeds for approved videos
- homepage partnership band now uses inline source links instead of separate pill buttons
- crisis CTA is currently presented as a compact masthead button plus a dedicated footer CTA slot
- masthead partner logos now link to the SADOD and The Sun Will Rise websites across desktop and mobile
- masthead is visually lighter and remains in normal document flow rather than sticking over page titles
- body copy inside `main` is currently normalized to flush-left alignment for consistency review
- `publish/` is generated from source and used for staging/deployment
- GitHub Actions workflows exist for publish-bundle validation and sync

## Confirmed Implemented Changes

- homepage hero reworked into integrated pathway cards
- page-to-page transitions softened and stabilized
- staggered reveal effects added
- header rebuilt as a three-column co-branded layout
- About Us split into Who We Are and What We Do
- Direct Connection page rebuilt into alternating image/text bands
- primary email CTA added to `connect.html`
- groups contact email added to `groups.html`
- homepage partnership block simplified and linked inline
- masthead crisis CTA compacted under the SADOD logo
- masthead partner logos made clickable across the site
- masthead transparency/lightness refined without covering hero/page-title content
- `what-we-do.html` closing section consolidated into a shared welcome / ready block
- body typography normalized to flush-left alignment across the main content areas
- Cloudflare Pages staging workflow documented
- Node-based publish build added through `scripts/build-publish.mjs`
- GitHub Actions workflows added for publish verification and publish sync
- documentation hub and orientation docs expanded

## Current Launch Blockers

### Content And Trust

- final team bios, names, and optional photos are not complete
- some trust-building details still need approval
- some teaser/program copy remains in placeholder or draft-approved state
- final outbound resource approval still needs confirmation

### Support Workflow

- direct contact flow still needs final policy clarity beyond the email CTA
- first-response expectations still need to be stated clearly
- Request Help form destination is still placeholder
- one-on-one intake expectations need tighter explanation
- crisis CTA destination is still unresolved

### Group Workflow

- final group joining process still needs to be locked
- schedule, registration, or exact participation path still needs final confirmation

### Launch Operations

- current Cloudflare Pages project settings still need to be confirmed against the documented GitHub-connected workflow
- DNS plan needs confirmation
- mobile audit and final responsive QA still need completion
- final production smoke test is still pending

## Current Decisions Already Made

- the project will remain a custom static site rather than moving back into a full Squarespace site build
- GitHub is the repository of record for the codebase
- Cloudflare Pages is the preferred staging/deployment path
- the About Us section is now a dropdown with two sub-pages
- the recovery-path directory now lives under Your Path, while More Resources remains public as a transition route
- Geneva is the preferred typography direction
- the maintainer is handling ongoing site publishing directly

## Current Open Decisions

- is the primary support path email only, or email plus form/text/phone
- what exact destination should power the crisis CTA once it is made live
- does `help-others.html` stay public before a real volunteer workflow exists
- should `design-lab.html` remain available in staging only or also be excluded from production
- what exact production branch / Cloudflare Pages configuration should be treated as final

## Working Priorities

1. finalize contact workflow language and response expectations
2. finalize group participation instructions
3. replace placeholder bios and trust content
4. confirm final resources and partner details
5. complete mobile, accessibility, and launch QA
6. lock hosting and DNS details
7. deploy staging, review, then launch

## Supporting Docs

These remain useful, but they should be treated as supporting views:

- `docs/agile/project-status.md`: narrative status snapshot
- `docs/agile/product-backlog.md`: backlog and acceptance criteria
- `docs/agile/release-roadmap.md`: timing and delivery windows
- `docs/agile/raid-log.md`: risks, assumptions, issues, dependencies
- `docs/operations/runbook.md`: workflow
- `docs/operations/publish-checklist.md`: release checklist
- `docs/product/content-inventory.md`: page and asset inventory

## Documents That Need To Stay In Sync With This File

- `docs/agile/project-status.md`
- `docs/agile/product-backlog.md`
- `docs/agile/release-roadmap.md`
- `docs/agile/raid-log.md`
- `docs/operations/publish-checklist.md`
- `docs/operations/runbook.md`
- `docs/product/content-inventory.md`
- `docs/getting-oriented.md`

## GitHub And Cloudflare Sync Notes

### GitHub

- This file should live in the repo and be committed like any other source document
- A push to the connected staging branch should feed Cloudflare Pages automatically
- GitHub Actions already rebuild the `publish/` directory after source changes when that compatibility path is needed

### Cloudflare

- Cloudflare Pages should continue reading from GitHub
- Cloudflare does not need a duplicate planning board
- The Cloudflare-side operational truth should be limited to:
  - connected repository
  - production branch
  - build command
  - build output directory
  - domains / DNS

## Recommended Operating Rule Going Forward

When project management changes happen:

1. update this file first
2. update any supporting board that is affected
3. commit and push the change to GitHub
4. verify the Cloudflare staging project receives the updated repo state through the normal deployment flow
