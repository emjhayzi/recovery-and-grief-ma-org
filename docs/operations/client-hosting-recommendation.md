# Website Platform Recommendation

## Purpose of This Recommendation

This document explains the current website setup, why the existing Squarespace approach may limit the final result, and why an alternative hosting path may be a better long-term fit for this project.

The goal is not to criticize Squarespace. Squarespace is a strong platform for many websites. The goal is simply to choose the platform that best supports the kind of site this project is becoming.

## Current Situation

Right now, the domain `recoveryandgrief-ma.org` is already registered through Squarespace.

That means Squarespace is currently handling the domain registration, but that does **not** mean the website itself has to be built and hosted entirely inside Squarespace.

At the moment, the site is being developed in Squarespace, but we are running into an important limitation:

- Squarespace is fast for standard layouts and content editing
- but it can become restrictive when a site needs more original visual design, more layout freedom, and more custom front-end control

For this project specifically, the design needs to feel:

- calm
- trustworthy
- emotionally safe
- clearly branded
- non-clinical
- highly intentional rather than template-driven

Those goals are possible in Squarespace up to a point, but the platform naturally pulls the site toward predefined structures and patterns. That can make it harder to achieve a more distinctive and carefully tailored experience.

## What Is Being Recommended Instead

The recommended path is:

- keep the domain with Squarespace
- build the website as a custom static site
- host the website on a modern static hosting platform
- connect the Squarespace-managed domain to that host through DNS

In simple terms:

- Squarespace continues to hold the website address
- the actual website files live somewhere better suited to custom design work

This approach allows the project to keep the domain ownership exactly where it is now while moving the website itself to a more flexible environment.

## Why This Is Beneficial

### 1. More Creative Freedom

A custom static site gives much more control over layout, typography, spacing, branding, interaction, responsiveness, and overall visual tone.

This matters because the site needs to communicate care and trust through design, not just through words.

### 2. Better Fit for the Current Website Type

This website is currently a content-focused informational site. It does not need a heavy backend or a large application framework.

That makes it a strong fit for static hosting, which is ideal for:

- informational websites
- branded landing pages
- content-rich but lightweight websites
- fast-loading public-facing sites

### 3. Lower Long-Term Technical Weight

A static site is simpler under the hood than a more complex platform-dependent site. That often means:

- faster performance
- fewer moving parts
- easier debugging
- easier portability later

### 4. Easier to Grow Without Rebuilding Again

If the project grows later, a custom site gives more room to expand without hitting the same template limitations again.

That means future updates can remain intentional rather than constantly working around platform constraints.

### 5. The Client Keeps Ownership of the Domain

This recommendation does **not** require transferring domain ownership away from the client.

Best practice is:

- the client keeps ownership of the domain
- the website is hosted where it works best
- access and documentation are handed back cleanly after launch

## What Would Stay the Same

If this route is chosen, the following can stay the same:

- the current domain name
- the client's ownership of the domain
- the overall website goals
- the planned site structure
- the content strategy

So this is not a restart of the whole project. It is a better publishing path for the site we are already shaping.

## What Would Change

The main change is where the live website is hosted.

Instead of relying fully on Squarespace for the website build and hosting, we would:

- complete the site as a custom front-end build
- publish it to a static hosting provider
- point the existing domain to that live website

Forms and other features that need submission storage can still be handled cleanly using external tools or integrations, without requiring a full custom backend.

## Cost Considerations

Cost should be part of the decision, but it helps to separate three different categories:

- domain cost
- website hosting/platform cost
- optional add-on service cost, such as forms with submission storage

### 1. Domain Cost

The domain is already owned and registered through Squarespace.

Based on the current account view, the domain renewal is shown as:

- `$20 per year`

That cost can remain the same whether the website stays fully on Squarespace or the site is hosted elsewhere and the domain continues to be managed through Squarespace.

### 2. Squarespace Website Cost

If the site remains fully in Squarespace, there will be a separate website subscription cost in addition to the domain renewal.

Squarespace is currently rolling out different plan structures to different accounts, so the exact plan names and prices shown inside the client's account may vary. Squarespace's official help documentation says the pricing shown in the account is the current source of truth for that user.

For reference, Squarespace's publicly visible legacy-style pricing page shows examples such as:

- Personal: `$8/month billed annually` or `$12/month month-to-month`
- Business: `$18/month billed annually` or `$26/month month-to-month`
- Commerce: `$26/month billed annually` or `$36/month month-to-month`

For this project, the most relevant point is not the exact tier name but the fact that a full Squarespace build usually means:

- annual domain renewal
- plus an ongoing website subscription

### 3. Static Hosting Cost

If the website is built as a custom static site and hosted outside Squarespace, hosting can be very low-cost or free.

Examples:

- Cloudflare Pages: static asset requests are free and unlimited on both free and paid plans
- Netlify: free plan available, with usage-based limits
- GitHub Pages: free for a simple repository-based static site

This means the most likely cost profile for a custom static site is:

- domain renewal remains with Squarespace
- hosting may be `$0/month`

### 4. Forms / Submission Storage Cost

If the site needs contact or intake forms that store submissions, that can be handled separately from the website hosting.

Examples:

- Formspree free tier starts at `50 submissions per month`
- Netlify forms consume usage credits if used on Netlify
- other providers such as Jotform or Tally can be added depending on needs

So forms are not a reason by themselves to keep the entire website on Squarespace. They can be treated as an optional add-on service.

### 5. Optional Website Maintenance Services

The client can also choose whether ongoing website maintenance is included after launch.

Based on current public market pricing, common maintenance ranges look like this:

- basic maintenance: about `$75 to $150/month`
- ongoing support: about `$150 to $300/month`
- higher-touch retainer: about `$300/month` and up

This is useful because it separates:

- platform cost
- domain cost
- optional professional support

That makes the decision clearer. The client can evaluate the website platform separately from the cost of keeping a professional involved after launch.

## Decision Matrix

### Option A: Stay Fully on Squarespace

Estimated recurring cost:

- domain renewal: about `$20/year`
- plus Squarespace website subscription
- likely total: `domain + monthly or annual Squarespace site plan`

Benefits:

- all-in-one platform
- easier visual editing inside one dashboard
- simpler for basic ongoing content edits

Tradeoffs:

- more design limitations
- more template-driven outcomes
- less front-end flexibility
- ongoing platform subscription even for a relatively simple informational site

### Option B: Keep Domain in Squarespace, Host Custom Static Site Elsewhere

Estimated recurring cost:

- domain renewal: about `$20/year`
- hosting: often `$0/month`
- optional forms: free tier or paid add-on depending on volume and privacy needs

Likely total:

- `lowest recurring cost` for the website itself
- optional add-on only if advanced form handling is needed

Benefits:

- strongest design flexibility
- faster and lighter site performance
- low or no hosting cost
- client still keeps domain ownership in Squarespace

Tradeoffs:

- not edited through a standard page builder
- requires a clearer update/deployment workflow
- forms may use an external service instead of being all-in-one

### Option C: Keep Domain in Squarespace, Host Custom Site on a Paid Static Host Plan

Estimated recurring cost:

- domain renewal: about `$20/year`
- hosting: often `$0/month` to about `$9/month` depending on platform and support needs
- optional forms: separate if needed

Benefits:

- still much more flexible than full Squarespace
- can add support, analytics, or team features if the project grows

Tradeoffs:

- more moving parts than a single all-in-one platform
- may cost slightly more than the free static-hosting route if premium features are chosen

## Cost Summary in Plain Language

If the project stays fully inside Squarespace, the client is paying for:

- the domain
- the website subscription

If the project keeps the domain in Squarespace but hosts the site elsewhere, the client is often paying for:

- the domain
- little or nothing for hosting
- optional form software only if needed

In many cases, the custom static route is not only more flexible creatively, but also lower in recurring platform cost.

## Forms and Submission Handling

If the website needs contact or intake forms, those do not need to force the entire site into Squarespace.

A custom static site can still support forms by using a form-handling service. That keeps the site flexible while still allowing:

- form submissions
- email notifications
- spreadsheet or dashboard storage
- future automation if needed

This means the design freedom of a custom site does not come at the cost of losing form functionality.

## Tradeoffs to Be Aware Of

This route does have tradeoffs, and they should be acknowledged clearly.

### Potential Tradeoffs

- Squarespace's visual editor is easier for some non-technical edits
- a custom site requires a clearer update workflow
- publishing changes may involve uploading or redeploying site files rather than editing directly on a page builder

These tradeoffs can be managed well if the project includes:

- clean file organization
- documentation
- a simple publishing workflow
- clear handoff instructions

## Recommended Hosting Model

The simplest recommended model is:

- Domain registration remains with Squarespace
- Website hosting moves to a static hosting provider
- DNS is updated in Squarespace to point the domain to the new host

This is a common and stable setup.

## Proposed Process

If this route is approved, the process would look like this:

1. Finalize the website content and design in the custom build
2. Test the site across desktop and mobile
3. Choose the final hosting provider
4. Deploy the website to that host
5. Update the Squarespace domain DNS settings to point to the live site
6. Test the live domain carefully
7. Provide documentation and handoff materials

## Why This Recommendation Makes Sense for This Project

This project is not just a generic brochure website. It serves a sensitive audience and needs a visual and emotional tone that feels deeply considered.

Because of that, the website benefits from:

- stronger custom design control
- more flexibility in layout and presentation
- a cleaner long-term technical foundation

Squarespace remains useful in one important way here: it can continue to hold the domain. But using Squarespace as the entire website platform may not be the best fit if the goal is a more original, carefully designed final result.

## Recommendation Summary

Recommended path:

- keep the domain in Squarespace
- host the actual website elsewhere as a custom static site
- use external form handling if forms require storage

This gives the project:

- more design freedom
- more flexibility
- potentially lower recurring platform cost
- better alignment with the site goals
- continued client ownership of the domain

## Suggested Client Decision

There are two valid options:

### Option A: Continue fully in Squarespace

Best if the top priority is keeping everything in one familiar all-in-one system, even if the design becomes more constrained.

### Option B: Keep the domain in Squarespace but host the website elsewhere

Best if the top priority is creating the strongest custom website experience while still preserving client ownership and keeping the technical setup manageable.

## Bottom Line

Squarespace is not the problem. It is simply not the best tool for every kind of website.

For this project, a custom static site with the domain still managed through Squarespace offers a stronger balance of:

- creative flexibility
- performance
- ownership
- maintainability
- future growth
