# QA Smoke Checklist

Audited against the website source on April 11, 2026.

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
- Confirm no obvious broken images or layout artifacts
- Confirm all internal nav links work

## Homepage Checks

- Confirm the "You are not alone" headline stays balanced and readable
- Confirm all six pathway cards render and hover cleanly
- Confirm the "Explore More Resources" card goes to `resources.html`
- Confirm the partnership section reads cleanly in its stacked layout
- Confirm the footer still reads as one structured row

## Support Path Checks

- Confirm `connect.html` email and Request Help form links work
- Confirm `groups.html` directory button works
- Confirm `groups.html` email button works
- Confirm `resources.html` CTA leads into `other-paths-to-recovery.html`
- Confirm `whole-person.html` button to Other Paths works

## Placeholder And Trust Checks

- Confirm no unintended `href="#"` links remain for public-facing destinations
- Confirm the Tavyn media placeholder is still intentional if unresolved
- Confirm Leslie's bio no longer shows `202x` before launch
- Confirm `help-others.html` still matches the current product decision

## Responsive Checks

- Review desktop width
- Review tablet width
- Review narrow mobile width
- Confirm menu toggle works on mobile
- Confirm card labels, buttons, and footer content do not break awkwardly

## Accessibility Checks

- Tab through masthead, nav, buttons, and footer links
- Confirm visible focus states
- Confirm reduced-motion mode is not broken by transitions
