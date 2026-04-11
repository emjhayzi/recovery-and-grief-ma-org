# QA Smoke Checklist

Audited against the website source on April 12, 2026.

## Core Pass

- Open every public page:
  - `index.html`
  - `about.html`
  - `who-we-are.html`
  - `what-we-do.html`
  - `connect.html`
  - `groups.html`
  - `whole-person.html`
  - `other-paths-to-recovery.html`
  - `resources.html`
  - `help-others.html`
  - `crisis-support.html`
- Confirm no obvious broken images or layout artifacts
- Confirm all internal nav links work

## Homepage Checks

- Confirm the "You Are Not Alone" headline stays balanced and readable
- Confirm all six pathway cards render and hover cleanly
- Confirm the "Explore More Resources" card goes to `resources.html`
- Confirm the partnership section reads cleanly
- Confirm the footer still reads as one structured row

## Support Path Checks

- Confirm `connect.html` email and SADOD Request Help form links work
- Confirm the global "Request Grief Support" links work as currently intended
- Confirm `groups.html` reads clearly and loads all three editorial image bands
- Confirm `resources.html` CTA leads into `other-paths-to-recovery.html`
- Confirm `whole-person.html` links to Other Paths to Recovery correctly
- Confirm `crisis-support.html` 988 links work

## Content And Trust Checks

- Confirm Leslie's bio still matches the approved source text
- Confirm `help-others.html` still matches the current product decision
- Confirm TSWR social links use the intended public URLs
- Confirm footer support and partner text still feels accurate and trustworthy

## Motion Checks

- Review page-to-page transitions on desktop
- Review page-to-page transitions on mobile
- Confirm the navbar remains stable during navigation
- Confirm reduced-motion mode disables unnecessary transition effects

## Responsive Checks

- Review desktop width
- Review tablet width
- Review narrow mobile width
- Confirm menu toggle works on mobile
- Confirm card labels, buttons, and footer content do not break awkwardly

## Accessibility Checks

- Tab through masthead, nav, buttons, and footer links
- Confirm visible focus states
- Confirm no essential action relies on motion
