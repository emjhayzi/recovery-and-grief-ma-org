# Product Backlog

Primary tracker: `docs/agile/single-source-of-truth.md`

Backlog audited against the website source on April 15, 2026.

Prioritization key:

- `P0`: public-facing gap or staging blocker
- `P1`: important refinement
- `P2`: can follow launch

## Epic 1: Public Content Cleanup

### ~~`P0` Clear Leslie's remaining placeholder year~~ — DONE

- confirmed as 2022

## Epic 2: Support Route Consistency

### `P2` Preserve the unified support-request route

Current source truth:

- the global "Request Grief Support" links use the approved Google Form
- `connect.html` now uses the same Google Form through its brief and optional online form labels

Done when:

- future edits keep the support route unified
- docs and staging behavior continue to match the implemented route

## Epic 3: Public Link Validation

### ~~`P1` Validate TSWR social destinations~~ — DONE

- TSWR TikTok confirmed as `@.thesunwillrise`
- Facebook and Instagram previously confirmed

## Epic 4: Public Page Decisions

### ~~`P1` Decide final role of `help-others.html`~~ — DONE

- `help-others.html` retired; nav link and homepage card route to the external Google Form

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
