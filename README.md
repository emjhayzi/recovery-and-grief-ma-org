# Recovery and Grief Website

Audited against the website source files on April 11, 2026.

This repository contains the current custom static website for Recovery and Grief, a Massachusetts peer grief support site for people in recovery grieving a death caused by alcohol or other drugs.

## Source Of Truth

Use this order when checking what is true:

1. Root website files such as `index.html`, the other public `.html` pages, `assets/css/styles.css`, and `assets/js/script.js`
2. `docs/agile/single-source-of-truth.md` for current project status and open items
3. The rest of the docs for operations, product context, and planning

`publish/` is generated from the root source files. Do not hand-edit it.

## Current Site Map

- `index.html`: homepage with a one-line "You are not alone" hero and six pathway cards
- `about.html`: legacy redirect to `who-we-are.html`
- `who-we-are.html`: team/story page with five profile sections
- `what-we-do.html`: peer grief support explanation and welcome/ready CTA block
- `connect.html`: direct connection page with email plus Request Help form links
- `groups.html`: support group page with directory link plus email help route
- `whole-person.html`: New Form / whole-person recovery page with two live video embeds and one pending Tavyn video placeholder
- `other-paths-to-recovery.html`: recovery-path directory under Your Path
- `resources.html`: short More Resources bridge page that routes visitors into Other Paths to Recovery
- `help-others.html`: intentionally visible placeholder page for a future volunteer path
- `design-lab.html`: internal design tool

## Shared Files

- `assets/css/styles.css`: shared design system, layout, motion, responsive rules, and page styling
- `assets/js/script.js`: mobile navigation, page transitions, and homepage motion behavior
- `assets/images/`: logos, hero photography, pathway cards, team images, and support imagery
- `scripts/build-publish.mjs`: regenerates `publish/` from the root website files

## Preview

Quick local preview:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

Helper scripts in the repo:

- `Start Website Test.cmd`
- `Start Website Test.command`
- `Stop Website Test.cmd`
- `Stop Website Test.command`
- `Start Design Lab.cmd`
- `Prepare Cloudflare Publish.cmd`

## Current Website State

Implemented in source right now:

- shared co-branded masthead with clickable SADOD and TSWR logos
- homepage hero rebuilt around six pathway cards
- homepage partnership section stacked vertically
- four-part footer layout styled as one structured row
- direct connection page with live `connect@recoveryandgrief-MA.org` mailto and `https://sadod.org/request-help`
- support group directory button plus `groups@recoveryandgrief-MA.org` route
- resources bridge page pointing to `other-paths-to-recovery.html`
- two live New Form / recovery video embeds on `whole-person.html`
- generated `publish/` build for Cloudflare Pages

Still unresolved in the source:

- crisis CTA links still use `href="#"`
- TSWR social links in the footer still use `href="#"`
- Tavyn video block on `whole-person.html` still needs a real destination
- `who-we-are.html` still contains a `202x` year placeholder in Leslie's bio
- `help-others.html` is still a deliberate placeholder page
- `groups.html` still carries a commented note for a future Group Readings block

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

## Review Context

For a second-opinion pass, use:

- `CLAUDE-HANDOFF.md`
- `docs/README.md`
- `docs/reviews/claude-second-opinion-prompt.md`
