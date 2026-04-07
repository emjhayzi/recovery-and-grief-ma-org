# Release Roadmap

Primary tracker: `docs/agile/single-source-of-truth.md`

## Planning Basis

This project is small in code footprint and moderate in launch coordination. The site already has:

- 9 public HTML pages (plus 1 internal design lab)
- 1 shared stylesheet (~2,240 lines)
- 1 shared JavaScript file
- a working local preview workflow
- a prepared `publish/` deployment copy
- launch, QA, and hosting documentation already in place
- Cloudflare Pages staging pipeline with GitHub Actions fallback

That means the remaining work is mostly content approval, trust-building detail, QA, and deployment operations rather than large-scale engineering. Because launch has now been pulled forward, the project is operating on a compressed 12-day launch program.

## Recommended Delivery Cadence

- Start date: April 2, 2026
- Target deployment date: April 14, 2026
- Working rhythm: daily check-in, rapid approval turnaround, and end-of-stage QA gate
- Delivery condition: this schedule assumes contact, group access, bios, and deployment decisions move without multi-day approval stalls

## Stage Program

### Stage 0: Foundation Complete

- Dates: March 25, 2026 to April 1, 2026
- Status: complete
- Goal: finish the first structured build and get the project into launch-prep shape

Delivered:

- multi-page static site structure
- shared design system and responsive behavior
- local preview workflow
- design-lab support tooling
- agile, product, and operations documentation

### Stage 1: Support Pathways Lock

- Dates: April 2, 2026 to April 7, 2026
- Goal: remove the main launch blockers tied to direct support access

Must finish in this phase:

- finalize the primary contact route in `connect.html` ✅ (email CTA implemented)
- define first-response expectations and intake language
- finalize group participation instructions in `groups.html`
- align homepage and footer CTAs with the same primary contact route where needed

Exit criteria:

- a visitor can clearly see how to reach a real person
- the one-on-one and group pathways no longer rely on unresolved next-step messaging

### Stage 2: Trust And Content Completion

- Dates: April 8, 2026 to April 10, 2026
- Goal: make the site feel real, safe, and complete enough for public launch

Must finish in this phase:

- replace placeholder team content in `who-we-are.html`
- add approved partner framing, logos, and trust details
- finalize curated resources in `resources.html`
- clarify the whole-person pathway in `whole-person.html`
- decide whether `help-others.html` launches now, is hidden, or is reframed

Exit criteria:

- placeholder language is removed from public pages
- trust-building content is consistent across the site

### Stage 3: Launch Readiness

- Dates: April 11, 2026 to April 12, 2026
- Goal: verify the final content and lock the publish path

Must finish in this phase:

- run full mobile and desktop smoke QA
- complete accessibility review on final content
- confirm final Cloudflare Pages configuration, DNS plan, and maintainer access
- decide whether `design-lab.html` is excluded from the production build
- test the `publish/` workflow end to end

Exit criteria:

- no launch-blocking QA issues remain open
- the production publishing path is documented, tested, and matches platform settings

### Stage 4: Staging, Approval, And Deployment

- Dates: April 13, 2026 to April 14, 2026
- Goal: launch safely and leave with a clean stabilization list

Must finish in this phase:

- deploy a staging or preview build for final review
- collect one consolidated approval pass
- deploy to the live domain
- verify all internal links, external links, and contact routing in production
- capture post-launch fixes and follow-up improvements

Exit criteria:

- live website is working on the approved production domain
- the maintainer can repeat the publish process without guesswork

## Delivery Windows

### Window 1: April 2 to April 7

- Lock contact workflow
- Lock group-access workflow
- Update CTA language on homepage, connect page, and footer

### Window 2: April 8 to April 10

- Approve bios and partner details
- Finalize resources and whole-person copy
- Make final decision on the volunteer page

### Window 3: April 11 to April 12

- Run QA on laptop and phone
- Complete accessibility checks
- Lock hosting, DNS, and publish workflow
- Verify Cloudflare Pages settings match the documented workflow

### Window 4: April 13 to April 14

- Stage the final build
- Get final stakeholder sign-off
- Deploy and run production smoke checks

## Visual Timeline

```mermaid
gantt
    title Recovery And Grief Website Launch Plan
    dateFormat  YYYY-MM-DD
    axisFormat  %b %d

    section Completed
    Foundation and first structured build         :done, foundation, 2026-03-25, 2026-04-01

    section Stage 1
    Finalize contact and intake workflow          :active, phase1a, 2026-04-02, 2026-04-05
    Finalize group access and CTA alignment       :phase1b, 2026-04-04, 2026-04-07

    section Stage 2
    Approve bios, trust signals, and resources    :phase2a, 2026-04-08, 2026-04-09
    Clarify whole-person and volunteer decisions  :phase2b, 2026-04-09, 2026-04-10

    section Stage 3
    Mobile, desktop, and accessibility QA         :phase3a, 2026-04-11, 2026-04-12
    Lock hosting, DNS, and publish workflow       :phase3b, 2026-04-11, 2026-04-12

    section Stage 4
    Staging deploy and final review               :phase4a, 2026-04-13, 2026-04-13
    Production deployment window                  :phase4b, 2026-04-14, 2026-04-14
    Go live                                       :milestone, launch, 2026-04-14, 0d
```

## Milestones

- April 7, 2026: Stage 1 support-pathway blockers resolved
- April 10, 2026: Stage 2 trust content approved
- April 12, 2026: Stage 3 launch-readiness checks complete
- April 14, 2026: production deployment target

## Schedule Risk Notes

- The largest schedule risks are delayed approval of contact details, missing bios or logos, and late hosting or DNS decisions.
- A platform-settings mismatch between GitHub, Cloudflare Pages, and the documented workflow can also delay launch.
- Under this accelerated schedule, even a 1 to 2 day approval slip can push launch beyond April 14, 2026.
- Because the codebase is simple, it is still better to protect review quality and content accuracy than to skip QA or operational checks.
