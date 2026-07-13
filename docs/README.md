# Documentation Hub

Audited against the website source on April 13, 2026.

This folder supports the website source of truth. It should never override what is actually implemented in the root HTML, CSS, and JavaScript files.

## Read Order

1. Website source files in the project root and `assets/`
2. `docs/agile/single-source-of-truth.md`
3. `docs/getting-oriented.md`
4. Topic-specific docs as needed

## Folder Map

### `docs/agile/`

Project status, priorities, risk tracking, and workflow alignment.

### `docs/product/`

Audience, page intent, and content inventory.

### `docs/operations/`

Editing, QA, publishing, staging, and hosting guidance.

### `docs/research/`

Supporting business and maintenance research.

### `docs/reviews/`

External review support prompts.

## Working Rule

When the website changes:

1. update the implemented source files first
2. update `docs/agile/single-source-of-truth.md`
3. update any supporting docs that describe the changed behavior
