# Operations Runbook

## Purpose

This runbook explains how to work with the Recovery and Grief website from editing through testing, publishing, and ongoing maintenance.

## Project Model

- Static HTML, CSS, and JavaScript
- No build step
- No CMS in the project folder
- Best suited for static hosting
- Approved direction is a custom static site rather than a full Squarespace site build
- The domain may remain in Squarespace even if the website is hosted elsewhere
- Ongoing updates and publishing are handled directly by the website designer-developer

## Editing Workflow

1. Update the relevant page content or shared asset.
2. If the change affects layout or global styling, review `assets/css/styles.css`.
3. If the change affects navigation behavior, review `assets/js/script.js`.
4. Update the backlog, roadmap, or RAID log if the change affects scope, priority, or risk.

## Local Preview

### Option 1: Helper Scripts

- Run `Start Website Test.cmd`
- Review the site at `http://localhost:8000`
- Run `Stop Website Test.cmd` when finished
- Run `Start Design Lab.cmd` if you want the live CSS playground instead of the plain site preview

### Option 2: Manual Command

```powershell
cd "C:\Users\emjhayzi\Documents\Recovery & Grief Website"
python -m http.server 8000
```

Then open `http://localhost:8000`.

## QA Workflow

Before any publish or handoff:

1. Click every internal navigation link
2. Check homepage CTA flow
3. Review mobile width and desktop width
4. Confirm logos, images, and footer details render correctly
5. Review pages for placeholder language that should not remain public
6. Complete `docs/operations/qa-smoke-checklist.md`
7. Complete `docs/operations/publish-checklist.md`

## Design Lab Workflow

Use the design lab when you want to explore visual changes without directly editing the shared stylesheet first.

1. Run `Start Design Lab.cmd`
2. Open `http://localhost:8000/design-lab.html`
3. Adjust the hero/layout/tone controls
4. Copy the generated CSS when a direction is approved
5. Move approved values back into the real site files

The design lab is meant for internal design iteration and staging review, not as a final public page.

## Publishing Workflow

Recommended process:

1. Finalize approved content
2. Run local QA
3. Select the final static host
4. Upload or deploy the website files
5. Update DNS if using the Squarespace-managed domain
6. Test the live domain on desktop and mobile
7. Record any post-launch fixes in `docs/agile/product-backlog.md`

## Change Control

Use these documents as the operating system for project changes:

- backlog changes: `docs/agile/product-backlog.md`
- schedule changes: `docs/agile/release-roadmap.md`
- risk or blocker changes: `docs/agile/raid-log.md`
- status reporting: `docs/agile/project-status.md`

## Content Ownership Checklist

Before launch, confirm owners for:

- contact details
- group schedule or registration instructions
- bios and partner descriptions
- resource links
- hosting credentials and DNS access
- ongoing site publishing and post-launch updates

## Recommended Maintenance Rhythm

- Monthly: content accuracy check and link review
- Monthly: review contact workflow still routes correctly
- Quarterly: review copy, resources, and trust signals
- As needed: update backlog and RAID log when program offerings change

## Handoff Package

The minimum clean handoff should include:

- website files
- this runbook
- publish checklist
- hosting recommendation
- maintenance pricing research if support services are being proposed

## Operational Notes

- The site currently depends on Google Fonts loading successfully
- The workspace is tracked in Git and currently pushes to GitHub for Cloudflare Pages staging
- If you use `Prepare Cloudflare Publish.cmd`, it now includes the design lab page in the refreshed `publish/` folder
