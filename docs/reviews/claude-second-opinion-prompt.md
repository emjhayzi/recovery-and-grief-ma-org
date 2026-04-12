# Second Opinion Prompt

You can paste the following into Claude after opening this project folder:

```text
Please review this static website project as a second opinion.

Start with:
- README.md
- CLAUDE-HANDOFF.md
- docs/README.md
- docs/agile/single-source-of-truth.md
- docs/agile/project-status.md
- docs/product/content-inventory.md

Then inspect the website files:
- index.html
- about.html
- who-we-are.html
- what-we-do.html
- connect.html
- what-is-a-peer-grief-ally.html
- groups.html
- groups-directory.html
- whole-person.html
- other-paths-to-recovery.html
- resources.html
- help-others.html
- crisis-support.html
- assets/css/styles.css
- assets/js/script.js

Please focus on:
- information architecture
- mobile layout risks
- accessibility issues
- trust and safety issues for a grieving audience
- transition polish and reduced-motion behavior
- footer and contact-route consistency
- anything that should be fixed before launch

Important context:
- The root website files are the implementation source of truth.
- `resources.html` is intentionally a bridge page that routes into `other-paths-to-recovery.html`.
- `help-others.html` is intentionally still a future-state public page.
- The global support links currently use a Google Form, while `connect.html` also links to the SADOD Request Help form.
- Leslie's bio still contains `202x`.

Please prioritize findings, risks, and practical recommendations over compliments.
```
