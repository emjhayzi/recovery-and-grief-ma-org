# QA Smoke Checklist

## Purpose

Use this checklist for repeatable browser QA before staging review, client handoff, or publishing.

## Recommended Environments

- Local preview at `http://localhost:8000`
- Design lab at `http://localhost:8000/design-lab.html` for visual experimentation only
- Cloudflare Pages staging URL after every Git-based deployment

## Core Smoke Pass

- Open every public page:
  - `index.html`
  - `about.html`
  - `connect.html`
  - `groups.html`
  - `whole-person.html`
  - `resources.html`
  - `help-others.html`
- Confirm header logos load correctly
- Confirm footer logos load correctly
- Confirm all internal nav links work
- Confirm no page shows broken images or obvious placeholder layout artifacts

## Homepage Checks

- Review the homepage hero on desktop and mobile
- Confirm the hero headline, body copy, and CTA buttons feel balanced and readable
- Confirm the right companion panel does not feel cut off, overly tall, or visually detached
- Confirm the six pathway cards still hover and reveal cleanly
- Confirm homepage section fades feel soft and do not drift or wobble

## Transition Checks

- Click between pages using the header nav
- Click between pages using CTA buttons and internal pathway links
- Confirm page switches feel like a soft fade, not a flash or hard cut
- Confirm the header stays visually stable during page switches
- Confirm there is no visible flicker on staging

## Responsive Checks

- Review at desktop width
- Review around tablet width
- Review around narrow mobile width
- Confirm the menu toggle works on mobile
- Confirm buttons do not overflow or wrap awkwardly
- Confirm the hero stack collapses cleanly on smaller screens

## Content And Trust Checks

- Review each page for placeholder copy that should not go public
- Confirm partner references and branding remain accurate
- Confirm trust signals still read as human and non-clinical
- Confirm contact language and next-step language remain clear

## Accessibility Checks

- Tab through header, nav, CTAs, and footer links
- Confirm focus states are visible
- Confirm color contrast still feels readable after visual changes
- Confirm reduced-motion mode is not broken by new transitions

## Staging Sign-Off Notes

Record the following after each staging review:

- Date tested
- Environment tested
- Pages reviewed
- Bugs or regressions found
- Approved for next round: yes/no
