# Project Status

## Snapshot

- Date: April 5, 2026
- Stage: Stage 1 / accelerated launch prep
- Delivery state: structurally strong first build, approved custom-site direction, compressed launch schedule targeting April 14, 2026

## Current Build Summary

The project is a static multi-page website with:

- 9 public HTML pages (plus 1 internal design lab)
- 1 shared stylesheet (~2,240 lines)
- 1 shared JavaScript file
- 15 image assets (13 hero/card images + 2 partner logos)
- local preview scripts for simple browser testing
- supporting docs for launch, hosting, and review
- Cloudflare Pages staging pipeline with GitHub Actions fallback

## Recent Design And Content Updates

The current pass focused on page implementation from the v3-0 copy deck series and visual system refinement:

- the About Us page was split into Who We Are (`who-we-are.html`) and What We Do (`what-we-do.html`), accessible through a navigation dropdown
- the Direct Connections page (`connect.html`) was rebuilt from the v3-0 copy deck with alternating image/text bands, a prominent email CTA to `connect@recoveryandgrief-MA.org`, program teaser blocks (Get Help Soon / Get Ongoing Help), and lower explanatory content
- per-page atmospheric hero backgrounds use real Unsplash photography with CSS gradient fade overlays
- the header was restructured as a three-column CSS grid with SADOD and TSWR logos flanking centered brand content
- navigation was redesigned to pipe-separated links on a single nowrap row
- the SADOD logo was pixel-edited to recolor inscription text and clean compression artifacts
- page transition animations, staggered IntersectionObserver reveals, and button shimmer effects are in place
- the homepage hero was reworked as six pathway cards integrated directly into the hero stage

## Recent Engineering Cleanup

The latest engineering pass focused on maintainability and repeatable review:

- removed dead CSS branches from older homepage-hero experiments that were no longer used by the live markup
- simplified page-to-page transition logic to reduce flicker while preserving a softer internal fade
- added an internal design-lab page and helper launcher for controlled visual tuning during staging review
- refreshed the Cloudflare publish helper so staging exports include the current internal design tools
- added QA documentation so future browser review can follow the same smoke-check process

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

- Clear multi-page information architecture with About Us dropdown split
- Consistent design language with per-page hero atmospheres
- Direct Connections page rebuilt from approved copy deck with clear contact pathway
- Page-to-page transitions and staggered section reveal animations
- Basic accessibility support such as skip link and menu toggle semantics
- Shared front-end files make the site easy to maintain
- Strong documentation foundation across Agile, product, and operations
- Cloudflare Pages staging pipeline with automated publish bundle

## What Is Not Finished Yet

- Final team bios, photos, and trust-building details
- Final group schedule or sign-up flow
- Approved external resources and partner links
- Request Help form destination (linked from connect.html)
- Video embeds for whole-person page
- Some placeholder copy in teaser sections pending client approval
- Final static host selection and deployment workflow
- Mobile view audit and responsive refinements
- Final production launch verification

## Current Completion View

### Completed Or Mostly Complete

- site structure (9 public pages)
- visual system with per-page hero atmospheres
- responsive navigation with About Us dropdown
- Direct Connections page rebuilt from copy deck
- page-level SEO titles and descriptions
- page transitions and reveal animations
- local testing workflow
- Cloudflare Pages staging pipeline
- project management documentation baseline

### Partially Complete

- content polish
- trust signals
- calls to action
- footer completeness
- operational handoff

### Not Yet Complete

- production deployment
- live form/contact flow
- analytics/search-console setup
- final external link review

## Recently Resolved Decisions

- The client approved the custom static-site direction rather than keeping the full website build inside Squarespace
- Ongoing website care will be handled directly by the website designer-developer
- The About Us section was split into Who We Are and What We Do with a dropdown
- The Direct Connections page layout was implemented as alternating image/text bands from the v3-0 copy deck
- The primary contact email is `connect@recoveryandgrief-MA.org`
- Site typography was switched to Geneva per client direction

## Open Decisions

- Which direct contact channel is primary: phone, text, form, scheduler, or hybrid
- Whether `help-others.html` stays public before a real volunteer workflow exists
- Which static host will be used for the approved custom site

## Accelerated Launch Dates

- Stage 1 target: April 7, 2026
- Stage 2 target: April 10, 2026
- Stage 3 target: April 12, 2026
- Production launch target: April 14, 2026

## Recommended Next Sprint Focus

1. Finalize direct contact workflow and exact CTA language
2. Finalize group participation instructions and exact pathway messaging
3. Replace placeholders with approved bios, logos, and resources on the compressed timeline
4. Confirm final hosting, DNS, and publish-readiness decisions before Stage 3

## PM Note

This project is still in a healthy place structurally, but the timeline is now materially tighter. The main risk is no longer lack of structure. The main risk is compressed approval and publishing time between April 5 and April 14, 2026.
