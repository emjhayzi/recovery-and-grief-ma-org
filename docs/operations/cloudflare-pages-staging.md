# Cloudflare Pages Staging Plan

This is the recommended Cloudflare staging workflow for this project.

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

## Recommended Workflow

### Option A: Best long-term setup

1. Put this project in a GitHub repository.
2. In Cloudflare, open `Pages`.
3. Click `Create project`.
4. Choose `Import an existing Git repository`.
5. Select the GitHub repo.
6. Use these build settings:

- Framework preset: `None`
- Build command: `exit 0`
- Build output directory: `publish`

7. Deploy.
8. Cloudflare will provide a `*.pages.dev` URL for staging.

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

Do not deploy:

- `References/`
- `docs/`
- `README.md`
- local helper scripts

## Suggested Project Name

- `recoveryandgrief-ma-staging`

## Client Review Flow

1. Deploy to Cloudflare Pages staging.
2. Open the `*.pages.dev` URL yourself first.
3. Test navigation, logos, mobile layout, and key calls to action.
4. Send the staging link to the client.
5. Collect one consolidated round of feedback.
6. Revise locally.
7. Refresh `publish/`.
8. Redeploy staging.

## After Approval

Once approved:

1. Keep the project in Cloudflare Pages.
2. In Squarespace Domains, update DNS to point `recoveryandgrief-ma.org` to Cloudflare.
3. Test the live domain.
4. Add final production polish such as a sitemap and final metadata.
