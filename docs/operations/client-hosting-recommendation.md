# Website Platform Recommendation

Audited against the current repository state on April 12, 2026.

## Recommendation

Keep the website on the current custom static-site path rather than moving it back into a full Squarespace website workflow.

## Why This Fits The Actual Project

The source-of-truth website in this repo is already:

- a custom static multi-page build
- visually more tailored than a template-led brochure site
- lightweight to deploy
- easy to regenerate for staging through `publish/`

That matches the current project needs better than re-platforming the build into a more constrained page-builder workflow.

## Recommended Platform Split

- keep domain ownership wherever the client prefers
- keep the website source in GitHub
- deploy through Cloudflare Pages

## Why This Direction Still Makes Sense

- the website does not need an application backend
- the project benefits from custom layout, tone, and motion control
- staging and deployment are already documented around the static workflow
- the current repo structure is maintainable for a small site
