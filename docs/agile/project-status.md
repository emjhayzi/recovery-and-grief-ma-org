# Project Status

## Snapshot

- Date: April 5, 2026
- Stage: Stage 1 / accelerated launch prep
- Delivery state: strong static-site foundation with active design and content refinement, but the workspace is currently carrying a homepage source-of-truth mismatch that should be resolved before more homepage work continues
- GitHub tracking state: repository exists on GitHub as `emjhayzi/recovery-and-grief-ma-org`, but no open issues or pull requests were visible during this status refresh

## Current Build Summary

The project is a static multi-page website with:

- 9 public HTML pages (plus 1 internal design lab)
- 1 shared stylesheet (~2,240 lines)
- 1 shared JavaScript file
- 15 image assets (13 hero/card images + 2 partner logos)
- local preview scripts for browser testing
- supporting Agile, product, and operations documentation
- Cloudflare Pages staging pipeline with GitHub Actions fallback

## Current Workspace Signal

The local workspace now shows a mix of planned work, active refinements, and one important recovery item:

- `publish/index.html` contains the newer "You Are Not Alone" homepage variant with the six pathway cards integrated into the hero stage
- root `index.html` was accidentally blanked locally on April 5, 2026 and then restored from git `HEAD` so work could continue safely
- because of that recovery step, the root homepage source and the `publish/` homepage are currently out of sync and need reconciliation
- inner pages have strong structure, but launch-readiness gaps remain visible in team placeholders, volunteer-page intent, whole-person content completion, and direct-action pathways
- typography and visual atmosphere have been pushed forward significantly in the current pass, but CTA clarity and public-facing completeness still need attention

## Recent Design And Content Updates

The most meaningful recent work reflected in the docs and workspace is:

- the About Us section was split into Who We Are (`who-we-are.html`) and What We Do (`what-we-do.html`) under a navigation dropdown
- `connect.html` was rebuilt around a clearer direct-support story and the primary email route `connect@recoveryandgrief-MA.org`
- per-page atmospheric hero backgrounds now use real photography with gradient fade overlays
- the shared header/footer system now presents the SADOD and TSWR brands as a co-branded program rather than a generic site shell
- the homepage design direction evolved toward a stronger pathway-led experience, with card imagery and a simplified primary message
- page transitions, reveal effects, and general front-end cleanup improved the perceived polish of the site

## Recent Engineering And Process Updates

- helper scripts and the `publish/` workflow were improved so staging can be refreshed more reliably
- a design-lab page was added to support controlled visual iteration without rewriting the live stylesheet first
- documentation coverage is now solid across status, backlog, roadmap, runbook, QA, and launch planning
- the repo is on GitHub and configured for Cloudflare Pages staging, but GitHub issue/project tracking has not yet been populated

## Current Site Map

- `index.html`: homepage and primary entry point
- `about.html`: legacy about page retained for routing
- `who-we-are.html`: mission, peer grief support framing, and team placeholder area
- `what-we-do.html`: programs, RIVER model, and support options
- `connect.html`: direct connection and one-on-one support framing
- `groups.html`: group support overview and joining guidance
- `whole-person.html`: broader recovery-path framing and video content
- `resources.html`: curated recovery/resource path
- `help-others.html`: future volunteer pathway

## What Is Working Well

- Clear multi-page information architecture with an About Us split that makes the site easier to scan
- Stronger-than-average visual direction for a static nonprofit-style site
- Consistent shared CSS/JS architecture that keeps maintenance simple
- Direct support, group support, recovery pathway, and resources each have their own page instead of being collapsed into one long landing page
- Basic accessibility support such as skip link, menu semantics, focus styles, and reduced-motion handling
- Strong documentation foundation across Agile, product, and operations
- Cloudflare Pages staging path is documented and technically viable

## What Is Not Finished Yet

- Canonical homepage source is not settled between root `index.html` and `publish/index.html`
- Final team bios, partner details, and trust-building content are still missing
- Final group schedule, sign-up flow, or directory handoff is still missing
- High-intent CTA paths are still too passive in several places and need clearer clickable next steps
- Whole-person page still has partial/placeholder content
- `help-others.html` still needs a product decision before launch
- Final approved external resources and outbound links are still incomplete
- Mobile audit, accessibility pass on final content, and launch QA are still pending
- Final static host, DNS, and production deployment workflow are not yet locked

## Current Completion View

### Completed Or Mostly Complete

- site structure (9 public pages plus design lab)
- shared visual system and page-specific hero treatment
- navigation redesign including About Us dropdown
- connect page rebuild around the primary email route
- page-level SEO title/description coverage
- transition and reveal interactions
- local preview and publish workflow docs
- baseline Agile and operations documentation

### Partially Complete

- homepage refinement
- trust signals
- CTA clarity and contact flow
- resource curation
- footer completeness
- GitHub delivery tracking

### Not Yet Complete

- production deployment
- live form/contact workflow beyond email
- full launch QA pass
- analytics/search-console decision
- final external-link review

## Recently Resolved Decisions

- the client approved the custom static-site direction rather than a full Squarespace build
- ongoing care is expected to be handled directly by the website designer-developer
- the About Us section was split into Who We Are and What We Do
- the primary direct-contact email is `connect@recoveryandgrief-MA.org`
- site typography was switched to Geneva per client direction

## Open Decisions

- Which direct contact channel is primary beyond the current email route: phone, text, form, scheduler, or hybrid
- Which homepage variant becomes the canonical source going forward: restored root `index.html` or the newer `publish/index.html` version
- Whether `help-others.html` stays public before a real volunteer workflow exists
- Which static host and DNS path will be used for production
- Whether launch tracking should stay doc-based or move into a populated GitHub Project / issue workflow immediately

## Accelerated Launch Dates

- Stage 1 target: April 7, 2026
- Stage 2 target: April 10, 2026
- Stage 3 target: April 12, 2026
- Production launch target: April 14, 2026

## Recommended Next 48 Hours

1. Reconcile root `index.html` and `publish/index.html` so homepage work has one clear source of truth
2. Lock the direct contact workflow and make the primary CTA path explicit across homepage, connect, groups, and footer
3. Replace or hide the highest-visibility placeholders, especially team and volunteer-path content
4. Finalize group-participation instructions and the resource handoff path
5. Put launch tracking somewhere operational on GitHub, even if that starts as a docs-only PR and a first issue set

## PM Note

This project is still structurally healthy. The main risk is now coordination drift: compressed approvals, unresolved public placeholders, and the temporary mismatch between the recovered root homepage and the newer publish homepage variant. The codebase is not the limiting factor; clarity of source, approvals, and launch operations is.
