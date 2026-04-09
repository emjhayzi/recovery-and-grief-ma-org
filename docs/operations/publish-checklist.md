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
- Confirm the future live destination for the footer crisis CTA
- Confirm partner logos and partner framing are final across the public pages
- Confirm the masthead partner logos link to the correct external destinations
- Replace team placeholders in `who-we-are.html`
- Finalize any remaining public-facing program content in `what-we-do.html`
- Add final group schedule, directory, or registration instructions to `groups.html`
- Confirm `resources.html` still communicates the temporary bridge clearly
- Confirm final approved recovery-path links in `other-paths-to-recovery.html`
- Confirm `publish/other-paths-to-recovery.html` exists after the publish build
- Replace the placeholder Request Help form destination
- Confirm any remaining unresolved media links on `whole-person.html`
- Decide whether `help-others.html` stays public, becomes hidden, or becomes an interest form

## Accessibility

- Review color contrast with final logos and any new images
- Add alt text for all future images
- Confirm keyboard navigation after content is finalized
- Confirm page titles and hero banners remain fully visible beneath the masthead on desktop and mobile
- Confirm body copy remains consistently flush left unless a specific exception is intentionally designed
- Test mobile navigation on an actual phone

## SEO

- Confirm final domain before adding canonical URLs
- Add a real social share image for Open Graph
- Create a final `sitemap.xml` once the publish URL structure is locked
- Add Google Search Console and analytics only after launch decisions are final

## Publishing

- Confirm the documented Cloudflare Pages configuration and DNS plan still match the live project settings
- Confirm production domain
- Confirm maintainer access to hosting, DNS, and repository
- Confirm `publish/` was rebuilt from current source files
- Push the approved commit to GitHub
- Confirm the latest GitHub commit feeds the intended Cloudflare staging deployment
- Confirm the `sync-publish-bundle` workflow if the Pages project still relies on the committed `publish/` directory
- Review the staging build and test all internal links there first
- Test all external links and forms in production
- Run a final mobile and desktop review
- Decide whether `design-lab.html` should remain available after launch or be excluded from the final public build
