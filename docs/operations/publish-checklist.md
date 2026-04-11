# Publish Checklist

Primary tracker: `docs/agile/single-source-of-truth.md`

Audited against the website source on April 12, 2026.

## Local Testing

- Start a local preview
- Review the site at `http://localhost:8000`
- Complete `docs/operations/qa-smoke-checklist.md`

## Content And Routing

- Confirm homepage "Explore More Resources" still routes to `resources.html`
- Confirm `resources.html` still routes visitors into `other-paths-to-recovery.html`
- Confirm `connect.html` still links to both email and the SADOD Request Help form
- Confirm the global "Request Grief Support" links still point where intended
- Confirm `groups.html` still presents the support-group pathway clearly
- Confirm `crisis-support.html` still routes urgent visitors to 911 or 988 guidance
- Replace Leslie's `202x` before production if approved copy is available
- Confirm `help-others.html` still matches the current product decision

## Footer And Trust Signals

- Confirm SADOD and TSWR masthead logos point to the correct sites
- Confirm TSWR social links use the intended public destinations
- Confirm PSCP contact text remains accurate

## Accessibility And Responsive Review

- Check desktop, tablet, and mobile widths
- Confirm keyboard navigation and visible focus states
- Confirm transitions feel calm and do not break reduced-motion mode
- Confirm page titles and hero sections remain readable at all breakpoints

## Build And Deployment

- Run `node scripts/build-publish.mjs`
- Confirm `publish/` rebuilt from current source files
- Push the approved commit
- Verify the Cloudflare Pages staging deployment
- Recheck internal links on staging
- Confirm production branch, DNS, and maintainer access before launch
