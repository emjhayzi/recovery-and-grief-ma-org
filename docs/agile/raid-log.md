# RAID Log

Primary tracker: `docs/agile/single-source-of-truth.md`

Audited against the website source on April 13, 2026.

## Risks

| ID | Risk | Impact | Mitigation |
| --- | --- | --- | --- |
| R1 | The remaining `202x` stays public too long | The team page can feel unfinished | Replace it once the approved year is known |
| R2 | Support-route consistency could drift again in future edits | Visitors and maintainers could see mixed calls to action if forms diverge again | Keep docs and QA aligned to the current unified Google Form route |
| R3 | TSWR TikTok URL is not fully validated | Footer trust may be weakened if a partner destination is wrong | Validate the TikTok URL before production |
| R4 | `help-others.html` stays in limbo | Visitors may expect a workflow that does not exist yet | Make an explicit keep, hide, or build-out decision |
| R5 | Docs drift away from implementation again | Team decisions may be based on stale assumptions | Update docs immediately after source changes |

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
| I1 | Leslie bio still contains `202x` | One public section still reads as incomplete | Content owner |
| I2 | TSWR TikTok URL still needs confirmation | Footer social block still needs final partner validation | Content/partner owner |
| I3 | Volunteer page intent is still open | A future-state page remains publicly reachable | Product owner |
| I4 | Production deployment settings still need final verification | Launch path is documented but not yet locked | Maintainer |

## Dependencies

| ID | Dependency | Why It Matters |
| --- | --- | --- |
| D1 | Approved year for Leslie's bio | Needed to clear the visible placeholder |
| D2 | Confirmed TSWR TikTok URL | Needed to finalize footer trust links |
| D3 | Product decision on `help-others.html` | Needed to finalize page intent |
| D4 | Final Cloudflare and DNS access/configuration | Needed for production deployment |
