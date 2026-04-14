# Publish Checklist

Primary tracker: `docs/agile/single-source-of-truth.md`

Audited against the website source on April 13, 2026.

## Local Testing

- Start a local preview
- Review the site at `http://localhost:8000`
- Complete `docs/operations/qa-smoke-checklist.md`

## Content And Routing

- Confirm homepage "Explore More Resources" routes to `https://sadod.org/home/recovery`
- Confirm homepage "Volunteer to Help Others" routes to `https://forms.gle/H2V17AgJfC9tmfpu8`
- Confirm `connect.html` still links to both email and the unified Google Form
- Confirm `connect.html` still links to `what-is-a-peer-grief-ally.html`
- Confirm the global "Request Grief Support" links still match the `connect.html` Google Form route
- Confirm `groups.html` still presents the support-group pathway clearly
- Confirm `groups.html` still links to `groups-directory.html`
- Confirm the opening Support Groups band stands out clearly and still fits the site palette
- Confirm `groups-directory.html` prints in portrait as intended
- Confirm `crisis-support.html` still routes urgent visitors to 911 or 988 guidance
- Confirm the primary nav still shows `What We Do` first and `Who We Are` last

## Footer And Trust Signals

- Confirm SADOD and TSWR masthead logos point to the correct sites
- Confirm TSWR social links use the intended public destinations
- Confirm the missing TSWR YouTube icon is still intentional
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
