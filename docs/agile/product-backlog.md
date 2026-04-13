# Product Backlog

Primary tracker: `docs/agile/single-source-of-truth.md`

Backlog audited against the website source on April 13, 2026.

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

## Epic 2: Support Route Consistency

### `P2` Preserve the unified support-request route

Current source truth:

- the global "Request Grief Support" links use the approved Google Form
- `connect.html` now uses the same Google Form through its brief and optional online form labels

Done when:

- future edits keep the support route unified
- docs and staging behavior continue to match the implemented route

## Epic 3: Public Link Validation

### `P1` Validate TSWR social destinations

Current source truth:

- TSWR footer links are populated for Facebook, Instagram, and TikTok
- the current TikTok URL should be confirmed for final public use
- the TSWR YouTube icon has been removed from the footer

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
