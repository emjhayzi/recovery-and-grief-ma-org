# Getting Oriented

Primary tracker: `docs/agile/single-source-of-truth.md`

This file is the fastest way to re-learn how the Recovery and Grief website is set up and how to keep building it.

## What This Project Is

- A static multi-page website
- Built with plain HTML, CSS, and a small amount of JavaScript
- No React, no Next.js, no npm, no build step, and no CMS in this folder
- Intended for static hosting such as Cloudflare Pages

The project goal is a calm, trustworthy website for Massachusetts peer grief support for people in recovery grieving a death from alcohol or other drugs.

## The Main Files

### Public Pages

- `index.html`: homepage and main entry point
- `about.html`: legacy about page (retained for routing)
- `who-we-are.html`: team, mission, and peer grief support model
- `what-we-do.html`: programs, RIVER model, and support options
- `connect.html`: direct connection with alternating image/text layout and email CTA
- `groups.html`: group support overview and joining guidance
- `whole-person.html`: whole-person recovery framing
- `resources.html`: curated resources and follow-up materials
- `help-others.html`: future volunteer path

### Shared Front-End Files

- `assets/css/styles.css`: shared design system, layout, motion, responsive behavior, page hero styles (~2,240 lines)
- `assets/js/script.js`: mobile nav toggle, active nav highlighting, page transitions, homepage motion behavior
- `assets/images/`: 13 hero/card background images + 2 partner logos

### Internal Tooling

- `design-lab.html`: internal visual tuning page
- `assets/css/design-lab.css`: design lab styling
- `assets/js/design-lab.js`: design lab interactions

### Deployment Copy

- `publish/`: deploy-ready copy of the site for Cloudflare Pages staging

This folder is refreshed from the main site files by running:

- `Prepare Cloudflare Publish.cmd`

## How The Site Is Structured

Each page is a standalone HTML file. The pages all share:

- the same header
- the same footer
- the same stylesheet
- the same JavaScript file

The body on each page has a `data-page` attribute such as:

- `data-page="home"`
- `data-page="about"`
- `data-page="who-we-are"`
- `data-page="what-we-do"`
- `data-page="connect"`

That value is used by the shared JavaScript and CSS to:

- highlight the current navigation item
- apply page-specific hero imagery and atmosphere
- enable homepage-only motion behavior

The navigation includes an "About Us" dropdown that groups the Who We Are and What We Do sub-pages.

## How To Preview The Site

### Fastest Option

Use:

- `Start Website Test.cmd`

Then open:

- `http://localhost:8000`

When finished, use:

- `Stop Website Test.cmd`

### Manual Option

Run this from the project root:

```powershell
python -m http.server 8000
```

Then open:

- `http://localhost:8000`

## How To Make Changes Safely

### If You Are Changing Copy

Edit the relevant page directly:

- homepage copy: `index.html`
- about page copy: `about.html`
- who we are copy: `who-we-are.html`
- what we do copy: `what-we-do.html`
- contact/support flow copy: `connect.html`
- group flow copy: `groups.html`
- recovery framing copy: `whole-person.html`
- resources copy: `resources.html`
- volunteer copy: `help-others.html`

### If You Are Changing Global Layout Or Visual Style

Edit:

- `assets/css/styles.css`

This file controls:

- colors
- spacing
- header and footer layout
- responsive rules
- cards
- buttons
- hero sections
- motion and transitions

### If You Are Changing Navigation Or Shared Interaction

Edit:

- `assets/js/script.js`

This file controls:

- mobile menu open/close behavior
- `aria-current` nav state
- internal page fade transitions
- homepage section reveal behavior

### If You Want To Experiment Before Touching The Main CSS

Use:

- `design-lab.html`

The design lab is for internal testing and visual exploration, not final public content.

## What Is Already In Good Shape

- 9-page site structure with About Us dropdown split
- consistent shared styling with per-page hero atmospheres
- Direct Connections page rebuilt from v3-0 copy deck
- mobile navigation
- page-level SEO title and description tags
- basic accessibility support like skip link and menu semantics
- page-to-page transitions and reveal animations
- organized project docs for product, operations, and launch planning
- Cloudflare Pages staging pipeline

## What Is Still Not Final

- final team bios and photos
- final group schedule or sign-up process
- final partner/resource links
- Request Help form destination
- video embeds for whole-person page
- some placeholder copy in teaser sections pending client approval
- production hosting and DNS decisions
- mobile view audit and responsive refinements
- final decision on whether `help-others.html` should stay public before a real workflow exists

## Recommended Build Order From Here

If you want to move the project forward in a stable way, this is the best order:

1. Lock the direct support/contact workflow
2. Replace placeholder copy with approved real content
3. Finalize group participation instructions
4. Review the site on mobile and desktop
5. Refresh `publish/`
6. Deploy staging on Cloudflare Pages
7. Collect one consolidated review round
8. Polish and prepare production launch

## Publish Workflow

1. Make your approved edits in the main project files
2. Preview locally
3. Run QA using `docs/operations/qa-smoke-checklist.md`
4. Run `Prepare Cloudflare Publish.cmd`
5. Deploy the `publish/` folder through Cloudflare Pages

For staging details, use:

- `docs/operations/cloudflare-pages-staging.md`

## Best Docs To Read Next

If you want the shortest useful reading path:

1. `docs/getting-oriented.md`
2. `docs/agile/project-status.md`
3. `docs/operations/runbook.md`
4. `docs/product/content-inventory.md`
5. `docs/operations/cloudflare-pages-staging.md`

## Practical Working Rule

Treat the root HTML files and `assets/` as the real source of truth for the website.

Treat `publish/` as the deployment copy that gets regenerated when you are ready to stage or ship.
