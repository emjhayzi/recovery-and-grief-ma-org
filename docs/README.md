# Documentation Hub

Audited against the website source files on April 11, 2026.

This folder supports the website source of truth. It should never override what is actually implemented in the root HTML/CSS/JS files.

## Read Order

1. Website source files in the project root and `assets/`
2. `docs/agile/single-source-of-truth.md`
3. `docs/getting-oriented.md`
4. The rest of the docs by topic

## Folder Map

### `docs/agile/`

Planning, status, priorities, and risk tracking.

- `single-source-of-truth.md`
- `project-charter.md`
- `project-status.md`
- `product-backlog.md`
- `release-roadmap.md`
- `github-project-setup.md`
- `raid-log.md`

### `docs/product/`

Audience, page intent, and inventory.

- `site-brief.md`
- `content-inventory.md`

### `docs/operations/`

Editing, QA, publishing, hosting, and launch workflow.

- `runbook.md`
- `cloudflare-pages-staging.md`
- `qa-smoke-checklist.md`
- `publish-checklist.md`
- `client-hosting-recommendation.md`
- `squarespace-vs-native-comparison.md`

### `docs/research/`

Supporting pricing/reference research.

- `maintenance-pricing-research.md`

### `docs/reviews/`

External review support.

- `claude-second-opinion-prompt.md`

## Working Rule

When the website changes:

1. update the implemented source files first
2. update `docs/agile/single-source-of-truth.md`
3. update any supporting docs that describe the changed behavior

## Fastest Useful Reading Path

1. `docs/getting-oriented.md`
2. `docs/agile/single-source-of-truth.md`
3. `docs/product/content-inventory.md`
4. `docs/operations/runbook.md`
5. `docs/operations/publish-checklist.md`
