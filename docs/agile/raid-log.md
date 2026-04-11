# RAID Log

Primary tracker: `docs/agile/single-source-of-truth.md`

Audited against the website source on April 12, 2026.

## Risks

| ID | Risk | Impact | Mitigation |
| --- | --- | --- | --- |
| R1 | The remaining `202x` stays public too long | The team page can feel unfinished | Replace it once the approved year is known |
| R2 | The split between the Google document support route and the SADOD form confuses maintainers or visitors | Future edits may create inconsistent calls to action | Decide whether the split is intentional and document or unify it |
| R3 | TSWR social URLs are not the intended public destinations | Footer trust may be weakened or links may go to the wrong place | Validate the current TikTok and LinkedIn URLs before production |
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
| I2 | Support-request routes are split | Global support links and `connect.html` do not point to the same destination | Product/content owner |
| I3 | TSWR TikTok and LinkedIn URLs need confirmation | Footer social block may not be finalized for production use | Content/partner owner |
| I4 | Volunteer page intent is still open | Navigation includes a future-state page | Product owner |
| I5 | Production deployment settings still need final verification | Launch path is documented but not yet locked | Maintainer |

## Dependencies

| ID | Dependency | Why It Matters |
| --- | --- | --- |
| D1 | Approved year for Leslie's bio | Needed to clear the visible placeholder |
| D2 | Decision on support-request route strategy | Needed to keep CTAs consistent |
| D3 | Confirmed TSWR public social URLs | Needed to finalize footer trust links |
| D4 | Product decision on `help-others.html` | Needed to finalize navigation and page intent |
| D5 | Final Cloudflare and DNS access/configuration | Needed for production deployment |
