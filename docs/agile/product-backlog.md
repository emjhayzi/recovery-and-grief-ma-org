# Product Backlog

Primary tracker: `docs/agile/single-source-of-truth.md`

Backlog audited against the website source on April 11, 2026.

Prioritization key:

- `P0`: public-facing gap or launch blocker
- `P1`: important next refinement
- `P2`: can follow launch

## Epic 1: Live Destinations

### `P0` Replace crisis CTA placeholders

Current source truth:

- masthead crisis links still use `href="#"`
- footer crisis links still use `href="#"`

Done when:

- the approved crisis destination replaces every placeholder crisis link
- the destination is consistent across pages
- QA confirms it works on desktop and mobile

### `P0` Replace TSWR social placeholders

Current source truth:

- TSWR Facebook, YouTube, Instagram, and X links in the footer still use `href="#"`

Done when:

- each TSWR social link has a real approved destination or is intentionally removed
- footer behavior is consistent across the site

## Epic 2: Clear Remaining Public Placeholders

### `P0` Resolve whole-person Tavyn media gap

Current source truth:

- `whole-person.html` contains a preserved Tavyn story block with a TODO comment and placeholder state

Done when:

- a real Tavyn URL or embed is added
- or the block is intentionally reframed without pretending the media exists

### `P0` Clear remaining bio placeholder text

Current source truth:

- Leslie's bio on `who-we-are.html` still includes `202x`

Done when:

- all visible placeholder years/text are removed from public pages

## Epic 3: Public Page Decisions

### `P1` Decide final role of `help-others.html`

Current source truth:

- the page is visible in navigation and intentionally framed as future content

Done when:

- the page is either finalized, hidden, or intentionally kept as a public future-state page
- navigation and docs reflect that decision

### `P1` Decide whether the Group Readings note becomes real content

Current source truth:

- `groups.html` still contains a source comment about a future Group Readings block

Done when:

- approved content is added
- or the note is removed as out of scope

## Epic 4: Pathway Clarity

### `P1` Keep More Resources routing intentional

Current source truth:

- homepage "Explore More Resources" card points to `resources.html`
- `resources.html` bridges visitors into `other-paths-to-recovery.html`

Done when:

- homepage, bridge page, and Your Path routes remain logically aligned
- QA confirms visitors can reach the recovery-path directory without confusion

### `P1` Keep support routes consistent

Current source truth:

- `connect.html` uses email plus Request Help form
- `groups.html` uses directory plus email

Done when:

- homepage, What We Do, Connect, Groups, and footer messaging stay consistent about where visitors should go next

## Epic 5: Launch Readiness

### `P0` Run final QA

Done when:

- all internal links work
- placeholder destinations are gone or intentionally documented
- mobile and desktop layouts are checked
- accessibility smoke checks are complete
- staging review passes

### `P0` Lock production deployment

Done when:

- Cloudflare Pages settings are verified
- production branch is confirmed
- DNS/domain plan is confirmed
- maintainer access is confirmed

## Epic 6: Documentation Discipline

### `P1` Keep docs synced to implemented behavior

Done when:

- website source changes are reflected in the supporting docs in the same workstream
- docs no longer describe removed homepage layouts, outdated contact assumptions, or old dependencies
