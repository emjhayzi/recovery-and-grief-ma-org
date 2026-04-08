# Project Status

Primary tracker: `docs/agile/single-source-of-truth.md`

## Snapshot

- Date: April 7, 2026
- Stage: accelerated launch prep
- Delivery state: structurally strong build with the main architecture in place, but still carrying launch-blocking content and operations decisions

## Current Build Summary

The project is a static multi-page website with:

- 9 public HTML pages (plus 1 internal design lab)
- 1 shared stylesheet
- 1 shared JavaScript file
- a shared image library for hero, card, and partner artwork
- a generated `publish/` bundle for deployment
- local preview scripts for browser testing
- supporting docs for launch, hosting, QA, and review
- GitHub as the repository of record
- Cloudflare Pages as the preferred staging and deployment path

## Confirmed Implemented Changes

- homepage hero reworked into integrated pathway cards
- page transitions softened and stabilized
- staggered reveal effects added
- About Us split into `who-we-are.html` and `what-we-do.html`
- `about.html` retained as a legacy routing page
- `connect.html` rebuilt from the v3-0 copy deck with a live email CTA
- `groups.html` updated with Group Directory guidance and email support route
- `whole-person.html` rebuilt with approved inline playable video embeds where links are available
- `resources.html` populated with recovery resource cards
- homepage partnership copy simplified with inline partner/directory links
- crisis CTA presentation refined in both the masthead and footer
- `publish/` generated from source files
- GitHub Actions workflows added for publish bundle validation and sync

## Current Site Map

- `index.html`: homepage and primary pathway selection
- `about.html`: legacy about page (retained for routing)
- `who-we-are.html`: who we are — team, mission, peer grief support model
- `what-we-do.html`: what we do — programs, RIVER model, support options
- `connect.html`: direct connection with alternating image/text layout and email CTA
- `groups.html`: support group overview and joining guidance
- `whole-person.html`: whole-person recovery support framing
- `resources.html`: curated resource path
- `help-others.html`: future volunteer pathway

## What Is Working Well

- clear multi-page information architecture
- consistent design language and shared front-end architecture
- direct support path now has a live email CTA
- support groups page has a clearer next-step route
- basic accessibility support such as skip link and menu semantics
- strong documentation foundation across Agile, product, and operations
- GitHub-backed deployment model is defined

## What Is Not Finished Yet

- final team bios, names, and optional photos
- final trust-building details and partner framing
- first-response expectations for direct contact
- Request Help form destination
- crisis CTA destination
- final group joining process and exact participation path
- final outbound resource approval
- approved Tavyn media link or asset for `whole-person.html`
- final production hosting and DNS confirmation
- mobile audit, accessibility QA, and production smoke test

## Current Completion View

### Completed Or Mostly Complete

- site structure
- shared design system
- About Us split
- direct connection page rebuild
- resources page population
- local preview workflow
- generated publish bundle
- baseline project documentation

### Partially Complete

- trust signals
- contact workflow
- group workflow
- launch operations
- handoff and maintenance clarity

### Not Yet Complete

- production deployment
- final contact/form workflow
- final DNS and production validation
- analytics/search-console decision
- final external link verification

## Recently Resolved Decisions

- custom static-site direction is approved
- GitHub is the repository of record
- Cloudflare Pages is the preferred staging and deployment path
- About Us is split into Who We Are and What We Do
- the primary direct-contact email on the site is `connect@recoveryandgrief-MA.org`
- Geneva is the preferred typography direction
- ongoing website care is handled directly by the maintainer

## Open Decisions

- whether the support path remains email-only or expands to form, text, or phone
- what exact destination should power the crisis CTA once it goes live
- whether `help-others.html` remains public before a real volunteer workflow exists
- whether `design-lab.html` remains staging-only or is excluded from production
- exact production branch and final Cloudflare Pages configuration to treat as locked

## Recommended Next Focus

1. Finalize direct contact workflow language and response expectations
2. Finalize group participation instructions
3. Replace placeholder bios and trust content
4. Confirm final resources and partner details
5. Complete mobile, accessibility, and launch QA
6. Lock hosting and DNS details

## PM Note

The project is healthy structurally. The main risk is not architecture anymore; it is allowing unresolved content and deployment decisions to stay split across too many documents or too close to launch.
