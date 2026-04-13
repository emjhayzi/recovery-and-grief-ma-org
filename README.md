# Recovery and Grief Website

Audited against the website source on April 13, 2026.

This repository contains the current custom static website for Recovery and Grief, a Massachusetts peer grief support site for people in recovery grieving a death caused by alcohol or other drugs.

## Source Of Truth

Use this order when checking what is true:

1. Root website files such as `index.html`, the other public `.html` pages, `assets/css/styles.css`, and `assets/js/script.js`
2. `docs/agile/single-source-of-truth.md` for current project status, open questions, and operating guidance
3. The rest of the docs for product context, operations, and planning support

`publish/` is generated from the root source files. Do not hand-edit it.

## Current Site Map

- `index.html`: homepage with the "You Are Not Alone" hero and six pathway cards
- `about.html`: redirect to `what-we-do.html`
- `who-we-are.html`: team and lived-experience page
- `what-we-do.html`: peer grief support explanation page
- `connect.html`: direct connection page with email plus the shared grief-support Google Form
- `what-is-a-peer-grief-ally.html`: simple explainer page linked from `connect.html`
- `groups.html`: support groups page
- `groups-directory.html`: printable support-group directory page
- `whole-person.html`: Your Path / NewForm page with two YouTube embeds, path imagery, and a Tavyn title-slide image block
- `other-paths-to-recovery.html`: recovery-path directory page
- `resources.html`: short bridge page into Other Paths to Recovery
- `help-others.html`: public future-facing volunteer placeholder page
- `crisis-support.html`: crisis support page for urgent help guidance

## Shared Files

- `assets/css/styles.css`: shared design system, responsive layout, typography, motion, and component styling
- `assets/js/script.js`: mobile navigation, dropdown behavior, homepage motion, scroll-to-top button, and page-to-page transitions
- `assets/images/`: logos, hero photography, pathway cards, team photos, and editorial imagery
- `scripts/build-publish.mjs`: regenerates `publish/` from the root website files

## Current Website State

Implemented in source right now:

- shared co-branded masthead with outbound SADOD and TSWR logo links
- homepage hero with six clear pathway cards
- homepage partnership section beneath the hero
- shared footer with support links, social links, and PSCP attribution
- top-level primary navigation with `What We Do` first and `Who We Are` last
- top-level `More Resources` and `Help Others` links routed to approved external destinations
- page-to-page transitions via the shared JavaScript/CSS motion layer
- dedicated `crisis-support.html` route used by the global crisis links
- dedicated `what-is-a-peer-grief-ally.html` route linked from `connect.html`
- dedicated `groups-directory.html` route linked from `groups.html`
- whole-person page with two live YouTube embeds plus a Tavyn title-slide image block
- recovery directory page under `other-paths-to-recovery.html`
- unified Google Form support route used both globally and on `connect.html`
- generated `publish/` build for Cloudflare Pages

Still open in the source:

- Leslie's bio on `who-we-are.html` still contains `202x`
- `help-others.html` is still intentionally a public placeholder page
- the TSWR TikTok destination should still be validated for final public use

## Preview

Quick local preview:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

Helper scripts in the repo:

- `tools/Start Website Test.cmd`
- `tools/Start Website Test.command`
- `tools/Stop Website Test.cmd`
- `tools/Stop Website Test.command`
- `tools/Prepare Cloudflare Publish.cmd`

## Publish Workflow

Rebuild the deploy bundle from source with:

```powershell
node scripts/build-publish.mjs
```

That refreshes `publish/` from the current root HTML files plus `assets/`.

For the operational workflow, start with:

- `docs/getting-oriented.md`
- `docs/agile/single-source-of-truth.md`
- `docs/operations/runbook.md`
- `docs/operations/publish-checklist.md`
- `docs/operations/cloudflare-pages-staging.md`
