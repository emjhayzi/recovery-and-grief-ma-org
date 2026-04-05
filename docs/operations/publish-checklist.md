# Publish Checklist

## Local Testing

- Start a local preview with `python -m http.server 8000` from the project folder
- Review the site at `http://localhost:8000`
- Use `http://localhost:8000/design-lab.html` if you need to sanity-check visual tuning controls before handoff
- Click every internal navigation link
- Resize the browser for mobile-width testing before publishing
- Complete `docs/operations/qa-smoke-checklist.md`

## Content

- Add final direct contact details to `connect.html`
- Add partner logos and approved external links to all pages
- Replace team placeholders in `who-we-are.html`
- Finalize program content in `what-we-do.html`
- Add live group schedule or registration instructions to `groups.html`
- Add final resources to `resources.html`
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

- Choose the final static host and confirm the DNS plan
- Confirm production domain
- Confirm maintainer access to hosting, DNS, and repository
- Upload files and test all internal links
- Test all external links and forms in production
- Run a final mobile and desktop review
- Decide whether `design-lab.html` should remain available after launch or be excluded from the final public build
