# Recovery and Grief Website

Static website draft for a Massachusetts peer grief support site focused on people in recovery grieving a death from alcohol or other drugs.

## Project Structure

- `index.html` and the other root `.html` files: 10 public pages plus the internal design lab
- `assets/css/styles.css`: shared visual system and responsive styles
- `assets/js/script.js`: mobile navigation and current-page state
- `publish/`: generated deploy-ready website files for staging/hosting
- `scripts/build-publish.mjs`: cross-platform publish build for Cloudflare Pages and local staging prep
- `CLAUDE-HANDOFF.md`: concise review context for a second-opinion pass
- `docs/README.md`: documentation hub for Agile, product, operations, and review docs
- `docs/agile/`: project charter, status, backlog, roadmap, and RAID log
- `docs/product/`: site brief and content inventory
- `docs/operations/`: runbook, publish checklist, hosting recommendation, and Cloudflare staging guide
- `docs/reviews/`: external review prompt
- `docs/research/`: supporting research
- `References/`: source planning documents, v3-0 copy decks, and visual reference material

## Preview

For a quick file preview, open [index.html](index.html) in a browser.

For a more realistic local website preview:

```powershell
cd "<project-root>"
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

Press `Ctrl+C` in that terminal to stop the local server.

If you want clickable shortcuts instead of typing commands, use:

- [Start Website Test.cmd](Start%20Website%20Test.cmd)
- [Start Design Lab.cmd](Start%20Design%20Lab.cmd)
- [Stop Website Test.cmd](Stop%20Website%20Test.cmd)
- [Prepare Cloudflare Publish.cmd](Prepare%20Cloudflare%20Publish.cmd)

To refresh the deploy-ready staging bundle directly from source files, you can also run:

```powershell
node scripts/build-publish.mjs
```

The `publish/` folder is generated from source. It should not be hand-edited directly.

## Design Lab

For visual tuning without editing the main CSS directly, open:

- [design-lab.html](design-lab.html)

For the best live-preview behavior, use:

- [Start Design Lab.cmd](Start%20Design%20Lab.cmd)

The Design Lab is intended as an internal staging/design tool, not a final public-facing page.

## Current Status

The project has:

- 10 public pages with a shared visual system
- per-page atmospheric hero backgrounds using real Unsplash photography
- an About Us section split into Who We Are and What We Do
- `other-paths-to-recovery.html` now holds the fuller recovery-path directory
- `resources.html` now acts as a temporary More Resources bridge page
- a rebuilt Direct Connections page with alternating image/text layout and a prominent email CTA
- clickable partner logos in the masthead across desktop and mobile
- a lighter non-sticky masthead that stays in normal document flow
- body copy normalized to flush-left alignment across `main`
- page transition animations and staggered reveal effects
- basic accessibility support and page-level SEO metadata
- a Cloudflare Pages staging pipeline

The project still needs final team bios, group schedules, resource links, some placeholder copy approvals, and production hosting/domain decisions.

## GitHub To Cloudflare Staging

The repo is set up so Cloudflare Pages can rebuild `publish/` from source on every Git push.

There is also a GitHub Actions fallback that rebuilds and commits the `publish/` bundle after source changes. This keeps staging assets current even if the connected Cloudflare Pages project is still deploying the committed `publish/` folder.

Recommended Cloudflare Pages settings:

- Framework preset: `None`
- Production branch: `main` or your chosen staging branch
- Build command: `node scripts/build-publish.mjs`
- Build output directory: `publish`

With the repo connected in Cloudflare Pages, each push to the configured branch will trigger a fresh staging deploy automatically.

For the current PM-style status snapshot, start with:

- `docs/agile/project-status.md`
- `docs/agile/product-backlog.md`
- `docs/operations/runbook.md`
- `docs/operations/cloudflare-pages-staging.md`
- `docs/operations/qa-smoke-checklist.md`

## Second Opinion

If you want another model to review the project quickly, start with:

- [CLAUDE-HANDOFF.md](CLAUDE-HANDOFF.md)
- [docs/README.md](docs/README.md)
- [docs/reviews/claude-second-opinion-prompt.md](docs/reviews/claude-second-opinion-prompt.md)
