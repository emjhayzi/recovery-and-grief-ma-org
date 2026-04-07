# Cloudflare Pages Staging Plan

Primary tracker: `docs/agile/single-source-of-truth.md`

## Verification Note

This document reflects the intended Cloudflare Pages workflow for the project.

The live Cloudflare Pages settings should be verified directly before launch, including:

- connected GitHub repository
- production branch
- build command
- build output directory
- custom domains / DNS

If the live Pages settings differ from this document, update both this file and `docs/agile/single-source-of-truth.md`.

This is the current recommended Cloudflare staging workflow for this project.

## Best Path

Use **Cloudflare Pages with a Git repository**, not the browser uploader.

Why:

- the uploader complained because it detected JavaScript files
- this project is still a static site
- Cloudflare Pages works well with static sites through Git-based deployment
- this gives a cleaner long-term staging and production workflow

Official Cloudflare references:

- Deploy anything to Pages: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/
- Wrangler commands: https://developers.cloudflare.com/workers/wrangler/commands/

## Project Prep

This project includes a `publish/` folder containing only the deployable website files:

- HTML pages
- `assets/`
- `robots.txt`

If you change the main site files later, refresh the deploy folder by running:

- `Prepare Cloudflare Publish.cmd`
- or `node scripts/build-publish.mjs`

The Node build script copies all root-level `.html` files automatically, so newly added pages are included in staging without needing to update a hardcoded copy list.

`publish/` is generated from the root HTML pages plus `assets/`. It should not be hand-edited directly.

This repository also includes a GitHub Actions workflow that rebuilds and commits `publish/` after source changes. That workflow is a compatibility safeguard for Pages projects that are still deploying the committed `publish/` bundle.

## Recommended Workflow

### Option A: Best long-term setup

1. Push the latest approved changes to the existing GitHub repository.
2. In Cloudflare, open `Pages`.
3. Open the existing project, or create one if it is not already connected.
4. If needed, choose `Import an existing Git repository`.
5. Select the GitHub repo.
6. Use these build settings:

- Framework preset: `None`
- Build command: `node scripts/build-publish.mjs`
- Build output directory: `publish`

7. Deploy or save the updated project settings.
8. Cloudflare will provide a `*.pages.dev` URL for staging.
9. Every later push to the connected branch should trigger a fresh staging deploy automatically.

If the Pages project is still using the older `exit 0` plus `publish` configuration, the GitHub workflow will keep the committed `publish/` directory current so staging still receives the latest assets and pages.

### Option B: Cloudflare CLI path

If you do not want to use GitHub yet, deploy the `publish` folder with Wrangler.

Typical flow:

```powershell
npm.cmd install -D wrangler
npx wrangler login
npx wrangler pages deploy publish --project-name recoveryandgrief-ma-staging
```

Notes:

- deploy the `publish` folder, not the whole project root
- after deployment, Cloudflare will return a `*.pages.dev` URL

## What To Deploy

Use only the deploy-ready files in `publish/`.

The current refresh script also includes `design-lab.html` for internal staging review. Keep it in staging if the design team still needs it, but make an explicit call before production launch.

Do not deploy:

- `References/`
- `docs/`
- `README.md`
- local helper scripts

## Suggested Project Name

- `recoveryandgrief-ma-staging`

## Client Review Flow

1. Push the approved commit to GitHub.
2. Confirm Cloudflare Pages staging receives the updated build.
3. Open the `*.pages.dev` URL yourself first.
4. Complete the browser pass in `docs/operations/qa-smoke-checklist.md`.
5. Send the staging link to the client.
6. Collect one consolidated round of feedback.
7. Revise locally.
8. Refresh `publish/`.
9. Push again and recheck staging.

## After Approval

Once approved:

1. Keep the project in Cloudflare Pages.
2. In Squarespace Domains, update DNS to point `recoveryandgrief-ma.org` to Cloudflare.
3. Test the live domain.
4. Add final production polish such as a sitemap and final metadata.
