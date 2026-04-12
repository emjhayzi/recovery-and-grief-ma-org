# Product Backlog

Primary tracker: `docs/agile/single-source-of-truth.md`

Backlog audited against the website source on April 12, 2026.

Prioritization key:

- `P0`: public-facing gap or staging blocker
- `P1`: important refinement
- `P2`: can follow launch

## Epic 1: Public Content Cleanup

### `P0` Clear Leslie's remaining placeholder year

Current source truth:

- `who-we-are.html` still contains `202x` in Leslie's bio

Done when:

- the approved year replaces `202x`
- staging QA confirms the biography reads cleanly in context

## Epic 2: Support Route Clarity

### `P1` Decide whether support-request links should be unified

Current source truth:

- the global "Request Grief Support" links point to a Google Form
- `connect.html` separately links to `https://sadod.org/request-help`

Done when:

- the split is either intentionally documented or simplified to one route
- docs and staging behavior match the chosen approach

## Epic 3: Public Link Validation

### `P1` Validate TSWR social destinations

Current source truth:

- TSWR footer links are populated
- the current TikTok URL should be confirmed for final public use
- the YouTube footer link is still blank in source

Done when:

- the approved TSWR public URLs are confirmed in source
- footer behavior is consistent across the site

## Epic 4: Public Page Decisions

### `P1` Decide final role of `help-others.html`

Current source truth:

- the page is visible in navigation and intentionally framed as future content

Done when:

- the page is either finalized, hidden, or intentionally kept public
- navigation and docs reflect that decision

## Epic 5: Launch Readiness

### `P0` Run final QA on staging

Done when:

- all internal links work
- transitions feel clean on desktop and mobile
- reduced-motion behavior is confirmed
- mobile and desktop layouts are checked
- accessibility smoke checks are complete
- staging review passes

### `P0` Lock production deployment

Done when:

- Cloudflare Pages settings are verified
- production branch is confirmed
- DNS and maintainer access are confirmed

## Epic 6: Documentation Discipline

### `P1` Keep docs synced to implemented behavior

Done when:

- source changes and documentation changes ship in the same workstream
- docs continue to describe the current routes, support links, and open questions
