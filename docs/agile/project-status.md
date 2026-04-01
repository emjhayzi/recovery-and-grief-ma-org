# Project Status

## Snapshot

- Date: March 30, 2026
- Phase: Alpha draft / pre-launch planning
- Delivery state: structurally strong first build, approved custom-site direction, active launch-prep phase

## Current Build Summary

The project is a static multi-page website with:

- 7 public HTML pages
- 1 shared stylesheet
- 1 shared JavaScript file
- 2 active partner logo assets
- local preview scripts for simple browser testing
- supporting docs for launch, hosting, and review

## Recent Design Update

The current pass focused on homepage feel and visual interaction polish. Recent implemented changes include:

- homepage hero panes were resized and inset so the outer hero surfaces act as visible framing layers
- homepage hero scroll drift was removed so the hero now stays static while scrolling
- homepage section transitions were softened to use fade-based reveal behavior rather than stronger motion
- pathway-card hover behavior was restored and refined so the six support pathways feel responsive again
- page-to-page transition behavior was softened and limited to main content and footer, while the header stays visually stable
- the full-site background was updated to blend SADOD-inspired cool tones on the left with TSWRF-inspired warm sunrise tones on the right
- the header was intentionally simplified again after testing a stronger branded gradient treatment
- CTA and menu-button hover states were improved with more intentional interaction choreography

## Recent Engineering Cleanup

The latest engineering pass focused on maintainability and repeatable review:

- removed dead CSS branches from older homepage-hero experiments that were no longer used by the live markup
- simplified page-to-page transition logic to reduce flicker while preserving a softer internal fade
- added an internal design-lab page and helper launcher for controlled visual tuning during staging review
- refreshed the Cloudflare publish helper so staging exports include the current internal design tools
- added QA documentation so future browser review can follow the same smoke-check process

## Current Site Map

- `index.html`: homepage and primary pathway selection
- `about.html`: what peer grief support is and who it is for
- `connect.html`: direct connection and one-on-one support path
- `groups.html`: support group overview and joining guidance
- `whole-person.html`: whole-person recovery support framing
- `resources.html`: curated resource path
- `help-others.html`: future volunteer pathway

## What Is Working Well

- Clear multi-page information architecture
- Consistent design language across pages
- Basic accessibility support such as skip link and menu toggle semantics
- Shared front-end files make the site easy to maintain
- Strong documentation foundation already existed and has now been expanded
- Homepage interaction feel is being actively tuned instead of left at a static first-draft state

## What Is Not Finished Yet

- Direct contact details and response workflow
- Final team bios, photos, and trust-building details
- Final group schedule or sign-up flow
- Approved external resources and partner links
- Final static host selection and deployment workflow

## Current Completion View

### Completed Or Mostly Complete

- site structure
- visual system
- responsive navigation behavior
- page-level SEO titles and descriptions
- local testing workflow
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

## Open Decisions

- Which direct contact channel is primary: phone, text, form, scheduler, or hybrid
- Whether `help-others.html` stays public before a real volunteer workflow exists
- Which static host will be used for the approved custom site

## Recommended Next Sprint Focus

1. Finalize direct contact workflow and exact CTA language
2. Validate the revised homepage visual language in-browser on desktop and mobile
3. Replace placeholders with approved bios, logos, and resources
4. Confirm group participation instructions and lock the final static host and DNS setup

## PM Note

This project is in a healthy place for a first structured draft. The main risk is no longer lack of structure. The main risk is carrying placeholder content too far into launch prep without locking ownership, approvals, and operational details.
