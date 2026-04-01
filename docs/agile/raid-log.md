# RAID Log

## Risks

| ID | Risk | Impact | Mitigation |
| --- | --- | --- | --- |
| R1 | Contact workflow is not finalized | Visitors may hit a dead end at the most important moment | Lock one primary contact path before launch |
| R2 | Placeholder content remains visible too long | Trust may drop and the site may feel unfinished | Track all placeholders in backlog and remove before launch |
| R3 | Final static host provider stays unresolved | Launch timing may slip late in the process | Decide host and DNS model during launch-readiness sprint |
| R4 | Sensitive audience may be affected by unclear language | Confusing or clinical wording could reduce engagement | Run final tone review with stakeholder approval |
| R5 | Git workflow remains lightweight and single-maintainer | Publish history or rollback discipline may be weaker than ideal if updates are rushed | Keep regular commits and follow the publish checklist before launch changes |

## Assumptions

| ID | Assumption | Validation Needed |
| --- | --- | --- |
| A1 | A static site is sufficient for the current program phase | Confirm no advanced workflow requires a backend |
| A2 | Squarespace can remain the registrar while the website is hosted as a custom static build | Validate once the final DNS records are configured |
| A3 | Final program content will be approved in manageable batches | Confirm approval owner and turnaround time |
| A4 | Current page structure does not need a major redesign | Validate after stakeholder walkthrough |

## Issues

| ID | Issue | Current Effect | Owner Needed |
| --- | --- | --- | --- |
| I1 | Direct contact details are missing | Core CTA is not yet launch-ready | Product/program owner |
| I2 | Team bios and real trust details are missing | About page feels unfinished | Content lead |
| I3 | Group schedule or registration path is missing | Group page lacks decisive next step | Program lead |
| I4 | Resource links are not finalized | Resource page is still partial | Content lead |
| I5 | Volunteer page intent is unresolved | Navigation may promise more than exists today | Product owner |

## Dependencies

| ID | Dependency | Why It Matters |
| --- | --- | --- |
| D1 | Approved contact details and response workflow | Needed to complete homepage, connect page, and footer |
| D2 | Approved bios, logos, and partner details | Needed to complete trust signals and about page |
| D3 | Approved resource list | Needed to complete resources page |
| D4 | Final static host selection and DNS access | Needed for deployment and final checklist |
| D5 | Final review on tone and language | Needed before publish for audience safety |

## PM Guidance

Review this log at least once per sprint. If any item changes scope, ownership, or urgency, update both this log and the product backlog.
