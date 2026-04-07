# Publish Checklist

Primary tracker: `docs/agile/single-source-of-truth.md`

## Local Testing

- Start a local preview with `python -m http.server 8000` from the project folder
- Review the site at `http://localhost:8000`
- Use `http://localhost:8000/design-lab.html` if you need to sanity-check visual tuning controls before handoff
- Click every internal navigation link
- Resize the browser for mobile-width testing before publishing
- Complete `docs/operations/qa-smoke-checklist.md`

## Content

- Confirm direct contact language in `connect.html` is final and consistent with homepage/footer
- Confirm first-response expectations are stated clearly
- Confirm partner logos and partner framing are final across the public pages
- Replace team placeholders in `who-we-are.html`
- Finalize any remaining public-facing program content in `what-we-do.html`
- Add final group schedule, directory, or registration instructions to `groups.html`
- Confirm final approved resources in `resources.html`
- Replace the placeholder Request Help form destination
- Decide whether `help-others.html` stays public, becomes hidden, or becomes an interest form

## Accessibility

- Review color contrast with final logos and any new images
- Add alt text for all future images
- Confirm keyboard navigation after content is finalized
- Test mobile navigation on an actual phone

## SEO

- Confirm final domain before adding canonical URLs
- Add a real social share image for Open Graph
- Create a final `sitemap.xml` once the publish URL structure is locked
- Add Google Search Console and analytics only after launch decisions are final

## Publishing

- Confirm the final Cloudflare Pages configuration and DNS plan
- Confirm production domain
- Confirm maintainer access to hosting, DNS, and repository
- Confirm `publish/` was rebuilt from current source files
- Deploy the current build and test all internal links
- Test all external links and forms in production
- Run a final mobile and desktop review
- Decide whether `design-lab.html` should remain available after launch or be excluded from the final public build
