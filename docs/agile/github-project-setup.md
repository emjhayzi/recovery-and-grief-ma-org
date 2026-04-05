# GitHub Project Setup

This project already exists on GitHub as `emjhayzi/recovery-and-grief-ma-org`.

For this website, the best lightweight planner is a single GitHub Project tied to repository issues and pull requests.

## Recommended Project

- Project name: `Recovery & Grief Launch`
- Project type: board first, with roadmap and table views added after setup
- Scope: one project for launch work, content approvals, QA, and deployment

## Recommended Fields

Create these custom fields in GitHub Projects:

- `Phase`
  - Phase 1
  - Phase 2
  - Phase 3
  - Phase 4
- `Area`
  - Content
  - Design
  - QA
  - Accessibility
  - Hosting
  - SEO
  - Operations
- `Target Date`
  - date field
- `Launch Blocker`
  - Yes
  - No
- `Approval Needed`
  - Yes
  - No

Use the built-in `Status`, `Assignees`, and `Labels` fields as well.

## Recommended Views

### 1. Launch Board

Board grouped by `Status`.

Suggested columns:

- Inbox
- Ready
- In Progress
- In Review
- Blocked
- Done

### 2. This Week

Table filtered to:

- `Status` is not `Done`
- `Target Date` is this week or overdue

### 3. Content Approvals

Table filtered to:

- `Approval Needed` is `Yes`

Sort by `Target Date`.

### 4. Launch Roadmap

Roadmap grouped by `Phase`.

This view should mirror the dated roadmap in `docs/agile/release-roadmap.md`.

## Suggested Labels

Start with these labels:

- `launch`
- `approval-needed`
- `content`
- `design`
- `qa`
- `accessibility`
- `hosting`
- `seo`
- `operations`
- `blocked`

## First Issues To Create

Create these issues first so the board matches the current launch plan:

1. Finalize primary contact route and response expectations
2. Clarify one-on-one support intake language
3. Finalize group participation instructions and schedule
4. Align homepage and footer CTA language
5. Replace placeholder team bios and partner details
6. Finalize approved resource links and descriptions
7. Clarify whole-person pathway copy
8. Decide whether `help-others.html` launches, hides, or reframes
9. Complete mobile, desktop, and accessibility QA
10. Confirm hosting, DNS, and maintainer access
11. Test `publish/` workflow end to end
12. Run staging review and production smoke checks

## Suggested Target Dates

Use these dates when creating the first issues:

- April 8, 2026 for Phase 1 tasks
- April 15, 2026 for Phase 2 tasks
- April 22, 2026 for Phase 3 tasks
- April 30, 2026 for Phase 4 tasks

## How To Use The Templates In This Repo

Once these files are pushed to GitHub:

- `.github/ISSUE_TEMPLATE/launch-task.md` can be used for delivery work
- `.github/ISSUE_TEMPLATE/content-approval.md` can be used for stakeholder approvals
- `.github/PULL_REQUEST_TEMPLATE.md` will standardize review and QA notes on each PR

## Recommended Weekly Rhythm

- Monday: review board and move tasks into `In Progress`
- Midweek: clear blockers and approvals
- Friday: QA review and move completed work to `Done`

## Best Fit For This Website

GitHub Projects is the best fit here because the work is small enough for one board, but important enough that phases, approvals, and deployment blockers should stay visible in the same place as the code.
