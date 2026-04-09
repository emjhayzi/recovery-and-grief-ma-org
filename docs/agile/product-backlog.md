# Product Backlog

Primary tracker: `docs/agile/single-source-of-truth.md`

Prioritization key:

- `P0`: launch-blocking
- `P1`: high-value next
- `P2`: important but can follow launch

## Epic 1: Direct Support Access

### `P0` Finalize contact pathway

User story:
As a grieving visitor, I want one clear way to reach a real person so that I do not feel lost or delayed.

Acceptance criteria:

- `connect.html` contains a prominent email CTA to `connect@recoveryandgrief-MA.org` ✅
- connect.html presents Get Help Soon and Get Ongoing Help program options ✅
- first-response expectation is described clearly
- CTA language is low-pressure and human ✅
- homepage and footer surface the same primary route consistently
- Request Help form destination is linked (currently placeholder)
- crisis CTA destination is approved before the footer button becomes live

### `P0` Define one-on-one support intake

User story:
As a visitor exploring ongoing support, I want to know what happens after I reach out so that I can decide whether it feels safe to continue.

Acceptance criteria:

- the one-on-one section explains the process plainly
- matching or referral expectations are defined
- any intake limitations are described without sounding clinical
- the live support path still feels human rather than institutional

## Epic 2: Trust, Credibility, And Safety

### `P0` Replace placeholder team content

User story:
As a visitor, I want to see who is behind the program so that the site feels real and trustworthy.

Acceptance criteria:

- `who-we-are.html` includes approved names, roles, short bios, and optional images
- partner relationship is clearly explained
- placeholder copy is removed from public view

### `P1` Strengthen trust signals site-wide

User story:
As a visitor in distress, I want the site to feel credible right away so that I feel safer taking the next step.

Acceptance criteria:

- footer includes final contact and partner details
- footer crisis CTA and partner/logo columns reflect approved final destinations and organization details
- approved external links are added where relevant
- copy is reviewed for warmth, clarity, and non-judgmental tone
- placeholder trust language is removed from public-facing pages

## Epic 3: Support Group Experience

### `P0` Finalize group access details

User story:
As a visitor considering a group, I want to know how to join and what to expect so that I can decide without uncertainty.

Acceptance criteria:

- `groups.html` includes final directory, schedule, interest form, or registration instructions
- virtual or in-person format is stated if known
- recurring questions are answered in plain language

### `P1` Add group reassurance content

User story:
As a first-time attendee, I want to know what group participation feels like so that anxiety is reduced.

Acceptance criteria:

- page addresses common fears or hesitations
- privacy and participation expectations are explained appropriately

## Epic 4: Resource And Program Pathways

### `P1` Finalize resource curation

User story:
As a visitor, I want a curated set of relevant recovery pathways and resources so that I am not overwhelmed.

Acceptance criteria:

- `other-paths-to-recovery.html` contains approved links and descriptions
- resources are curated, not bloated
- link purpose is obvious before clicking
- `resources.html` clearly redirects visitors to the right section during the transition

### `P1` Clarify whole-person pathway

User story:
As a visitor, I want to understand how grief support connects with recovery support so that the broader program makes sense.

Acceptance criteria:

- `whole-person.html` explains the pathway without jargon
- approved embedded/video references are present where assets exist
- any unresolved media destination is tracked explicitly instead of guessed
- next steps connect logically to support options already on the site

### `P1` Decide the role of volunteer page

User story:
As a stakeholder, I want the volunteer page to either support a real workflow or stay out of the way so that it does not create confusion.

Acceptance criteria:

- `help-others.html` is either finalized, hidden, or reframed as future interest only
- navigation reflects the decision consistently

## Epic 5: Launch Readiness

### `P0` Complete pre-launch QA

User story:
As the website owner, I want confidence in the site before publishing so that visitors do not encounter broken or confusing experiences.

Acceptance criteria:

- all internal links work
- masthead partner logos route correctly on desktop and mobile
- page titles remain visible below the masthead at all target breakpoints
- body-copy alignment is reviewed for consistency after the flush-left pass
- mobile and desktop layouts are reviewed
- content placeholders intended for removal are gone
- accessibility checks are completed on final content
- production smoke test is completed after deployment

### `P0` Finalize hosting and deployment

User story:
As the website owner and maintainer, I want the final Cloudflare Pages production configuration and DNS plan locked so that launch is predictable and maintainable.

Acceptance criteria:

- approved GitHub-backed Cloudflare Pages direction is documented
- final production deployment configuration is selected
- domain/DNS plan is confirmed
- publish workflow is documented
- Cloudflare Pages settings are verified against the documented workflow
- a GitHub push is confirmed to feed the intended Cloudflare staging path end to end

## Epic 6: Governance And Handoff

### `P1` Document maintenance ownership

User story:
As the maintainer, I want the update and publishing workflow documented so that the site can be sustained after launch.

Acceptance criteria:

- maintenance workflow is documented
- website maintainer is clearly identified
- ownership for content approvals is identified
- owner-managed maintenance expectations are documented

### `P2` Add measurement and iteration plan

User story:
As the program owner, I want a simple way to learn from website use so that future improvements are guided by real signals.

Acceptance criteria:

- analytics/search-console decision is documented
- post-launch review cadence is defined

## Suggested Sprint Ordering

### Sprint 1

- finalize contact workflow
- finalize group access information
- replace high-visibility placeholders

### Sprint 2

- complete bios, resources, and footer trust signals
- finalize volunteer-page decision
- complete mobile and accessibility review

### Sprint 3

- verify Cloudflare Pages production settings
- deploy staging and production
- complete handoff and maintenance setup
