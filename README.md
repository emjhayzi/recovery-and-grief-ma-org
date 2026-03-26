# Recovery & Grief Website

Static website draft for a Massachusetts peer grief support site focused on people in recovery grieving a death from alcohol or other drugs.

## Project Structure

- `index.html` and the other root `.html` files: site pages
- `assets/css/styles.css`: shared visual system and responsive styles
- `assets/js/script.js`: mobile navigation and current-page state
- `publish/`: deploy-ready website files for staging/hosting
- `CLAUDE-HANDOFF.md`: concise review context for a second-opinion pass
- `docs/README.md`: documentation hub for Agile, product, operations, and review docs
- `docs/agile/`: project charter, status, backlog, roadmap, and RAID log
- `docs/product/`: site brief and content inventory
- `docs/operations/`: runbook, publish checklist, hosting recommendation, and Cloudflare staging guide
- `docs/reviews/`: external review prompt
- `docs/research/`: supporting research
- `References/`: source planning documents and visual reference material

## Preview

For a quick file preview, open [index.html](C:\Users\emjhayzi\Documents\Recovery & Grief Website\index.html) in a browser.

For a more realistic local website preview:

```powershell
cd "C:\Users\emjhayzi\Documents\Recovery & Grief Website"
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

Press `Ctrl+C` in that terminal to stop the local server.

If you want clickable shortcuts instead of typing commands, use:

- [Start Website Test.cmd](C:\Users\emjhayzi\Documents\Recovery & Grief Website\Start Website Test.cmd)
- [Stop Website Test.cmd](C:\Users\emjhayzi\Documents\Recovery & Grief Website\Stop Website Test.cmd)
- [Prepare Cloudflare Publish.cmd](C:\Users\emjhayzi\Documents\Recovery & Grief Website\Prepare Cloudflare Publish.cmd)

## Current Status

The project has:

- a complete first-pass page structure
- a shared visual style
- basic accessibility support
- page-level SEO metadata
- a simple Python-based local testing workflow

The project still needs final contact details, partner logos, team bios, resource links, and live publishing details.

For the current PM-style status snapshot, start with:

- `docs/agile/project-status.md`
- `docs/agile/product-backlog.md`
- `docs/operations/runbook.md`
- `docs/operations/cloudflare-pages-staging.md`

## Second Opinion

If you want another model to review the project quickly, start with:

- [CLAUDE-HANDOFF.md](C:\Users\emjhayzi\Documents\Recovery & Grief Website\CLAUDE-HANDOFF.md)
- [docs/README.md](C:\Users\emjhayzi\Documents\Recovery & Grief Website\docs\README.md)
- [docs/reviews/claude-second-opinion-prompt.md](C:\Users\emjhayzi\Documents\Recovery & Grief Website\docs\reviews\claude-second-opinion-prompt.md)
