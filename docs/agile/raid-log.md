# RAID Log

Primary tracker: `docs/agile/single-source-of-truth.md`

Audited against the website source on April 11, 2026.

## Risks

| ID | Risk | Impact | Mitigation |
| --- | --- | --- | --- |
| R1 | Crisis CTA stays unresolved | Visitors may hit a dead end in a sensitive moment | Replace all crisis placeholder links with the approved destination before launch |
| R2 | TSWR social links remain placeholders | Footer trust may drop or feel unfinished | Add real destinations or remove the links intentionally |
| R3 | Public placeholders remain too long | Site can feel incomplete or less trustworthy | Clear the Tavyn media gap and the remaining bio placeholder before launch |
| R4 | Volunteer placeholder page causes confusion | Visitors may expect a workflow that does not exist yet | Make an explicit keep/hide/reframe decision for `help-others.html` |
| R5 | Docs drift away from implementation again | Team may make decisions from stale assumptions | Update docs immediately after source changes |

## Assumptions

| ID | Assumption | Validation Needed |
| --- | --- | --- |
| A1 | Static hosting remains the right platform | Confirm no late-stage feature requires a backend |
| A2 | `resources.html` should remain a bridge page for now | Validate after stakeholder review |
| A3 | `help-others.html` can remain visible until a final decision is made | Validate before launch |
| A4 | Cloudflare Pages remains the production path | Validate against live project settings before deployment |

## Issues

| ID | Issue | Current Effect | Owner Needed |
| --- | --- | --- | --- |
| I1 | Crisis CTA destination not implemented | Public support CTA is not live yet | Product/program owner |
| I2 | TSWR footer social links still use placeholders | Footer trust/social block is incomplete | Content/partner owner |
| I3 | Tavyn media destination still missing | Whole-person page contains a visible placeholder block | Content owner |
| I4 | Leslie bio still contains `202x` | Who We Are page still has a visible placeholder detail | Content owner |
| I5 | Volunteer page intent is still open | Navigation includes a future-state page | Product owner |
| I6 | Production deployment settings still need final verification | Launch path is documented but not yet locked | Maintainer |

## Dependencies

| ID | Dependency | Why It Matters |
| --- | --- | --- |
| D1 | Approved crisis-routing destination | Needed to replace the current placeholder CTA |
| D2 | Approved TSWR social destinations or removal decision | Needed to finalize footer trust links |
| D3 | Approved Tavyn media | Needed to complete `whole-person.html` |
| D4 | Final content approval pass | Needed to clear remaining public placeholders |
| D5 | Final Cloudflare/DNS access and configuration | Needed for production deployment |
