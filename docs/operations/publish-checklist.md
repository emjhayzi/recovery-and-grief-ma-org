# Publish Checklist

Primary tracker: `docs/agile/single-source-of-truth.md`

Audited against the website source on April 11, 2026.

## Local Testing

- Start a local preview
- Review the site at `http://localhost:8000`
- Complete `docs/operations/qa-smoke-checklist.md`

## Content And Routing

- Confirm homepage "Explore More Resources" card routes to `resources.html`
- Confirm `resources.html` still routes visitors into `other-paths-to-recovery.html`
- Confirm `connect.html` still links to both email and the Request Help form
- Confirm `groups.html` still links to both the Support Group Directory and group-support email
- Replace all intended public `href="#"` destinations before launch
- Resolve the Tavyn media placeholder or intentionally reframe it
- Replace Leslie's `202x` placeholder
- Decide the final public role of `help-others.html`

## Footer And Trust Signals

- Confirm SADOD and TSWR masthead logos point to the correct sites
- Confirm footer partner/social links are either real or intentionally removed
- Confirm PSCP contact text remains accurate

## Accessibility And Responsive Review

- Check desktop, tablet, and mobile widths
- Confirm keyboard navigation and visible focus states
- Confirm no buttons or card labels overflow awkwardly
- Confirm page titles and hero sections remain readable at all breakpoints

## Build And Deployment

- Run `node scripts/build-publish.mjs`
- Confirm `publish/` rebuilt from current source files
- Push the approved commit
- Verify the Cloudflare Pages staging deployment
- Recheck internal links on staging
- Confirm production branch, DNS, and maintainer access before launch
