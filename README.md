# Propane — landing pages

Static marketing site for Propane, deployed to **getpropane.app** (see `CNAME`)
via GitHub Pages.

## Pages

| File | Product |
|------|---------|
| `index.html` | Home — the runtime and the whole product family |
| `desktop.html` | Propane Desktop — the app |
<!-- | `voice.html` | Propane Voice — B2B voice-automation service (service · SDK · implementations) | -->
| `opensource.html` | Open source — the projects behind Propane; Minion is the first (a collection of open-source inference engines with custom logic) |

Every page links to the others from the top nav and the footer. The pricing
page was removed from the public site while the model below is still being
decided.

## Suggested pricing model (not published)

> **Suggested.** The tiers below are an inferred working model, not a final
> price list. The pricing page and all prices were **removed from the public
> pages** while the numbers are still being decided.

### Tiers

| Tier | Price | For |
|------|-------|-----|
| Free | $0 | Personal use |
| Pro | $30/mo | One person who wants to publish and ship apps |
| Studio | $255/mo · 25 users ($10/user) | Teams that build apps together |
| Enterprise | $55/user/mo | Organisations that need their own cloud |

### Feature breakdown

**Free — $0**

- Free for personal use
- Unlimited local tool decks
- Local models via Minion
- Mobile remote access

**Pro — $30/mo**

- 300 million token credits
- Private knowledge-base (kbase) registry
- Publish apps
- Export signed builds

**Studio — $255/mo**

- Everything in Pro, for 25 users
- Additional users at $10/user
- Shared workspaces
- Team tool-deck library
- SSO & audit log

**Enterprise — $55/user/mo**

- Everything in Studio, plus:
- Includes own cloud license
- Self-hosted runtime
- Private model gateway
- SAML / SCIM & SLA

### Comparison

| Feature | Free | Pro | Studio | Enterprise |
|---------|------|-----|--------|------------|
| Seats | 1 | 1 | 25 included ($10/user after) | Per user ($55/user/mo) |
| Local tool decks | Unlimited | Unlimited | Unlimited | Unlimited |
| Local models via Minion | Included | Included | Included | Included |
| Hosted token credits | — | 300M | Pooled for the team (TBD) | Custom |
| Private kbase registry | — | Included | Included | Included |
| Publish apps | — | Included | Included | Included |
| Export signed builds | — | Included | Included | Included |
| Shared workspaces & team library | — | — | Included | Included |
| SSO & audit log | — | — | Included | Included |
| Own cloud license | — | — | — | Included |
| Self-hosted runtime | — | — | — | Included |
| Support | Community | Email | Priority | Dedicated |

### Token credits

Paid plans include hosted token credits for models too large to run locally —
Pro includes **300 million**. Free is local-first and has no hosted credit
budget in this model. Credits and any compute-sharing arrangement on top of
them are still open questions (see below).

### Separate pricing

<!-- Propane Voice is priced separately as a B2B service (the service, the Voice SDK
and implementations). Minion stays open source. -->

### Open questions / placeholders

- Whether Free includes any hosted token credits, or is local-only.
- Studio's pooled token figure, and whether the $10/user rate applies only to
  seats beyond the 25 included.
- Enterprise's minimum seat count and whether the own-cloud license is per
  organisation or per user.
- Whether the compute-sharing bonus still exists on top of token credits.
- Whether any tier's data is used to train models (the old model said Free was,
  Pro and above were not).

## How it is built

Pages are exported **Design Components** rendered by the runtime in
`support.js` + `vendor/react*.js`:

- `<x-dc>` holds the template markup.
- `<helmet>` holds the fonts and `site.css`.
- `<script type="text/x-dc" data-dc-script data-props="…">` holds a small
  `class Component extends DCLogic` with a `renderVals()` method. The only
  prop is `accent` (default `#ff7f5f`, options `#f2b45c`, `#e8879c`), used
  for the primary button, eyebrow labels and highlight strokes.

Shared styling lives in `site.css`. The design tokens match the original
mockup:

- background `#1c0a10`, panel `#2b1019`, panel-2 `#3a1422`, border `#3a1a26`
- text `#f7ebee`, muted `#cdaeb7`, faint `#9c7480`, accent `#ff7f5f`
- Bricolage Grotesque (headings) + Instrument Sans (body)

`logo.svg`, `assets/` and `vendor/` are unchanged from the design export.

## Viewing locally

Serve the folder and open a page — some browsers block the scripts over
`file://`:

```
python3 -m http.server 8000
# then open http://localhost:8000/
```

## Editing the site

The site is built with [Eleventy](https://www.11ty.dev/). Edit the sources in `src/`:

```sh
npm install
npm start        # dev server with live reload
npm run build    # writes the site to docs/
```

- `src/*.html` — the pages. Shared chrome is pulled in with the `include` tag (`header.njk`, `footer.njk`).
- `src/_includes/` — the shared header and footer (including the unlisted Voice link).
- `eleventy.config.js` — config, plus the static files copied through (`site.css`, `support.js`, `logo.svg`, `vendor/`, `assets/`, `CNAME`, `.nojekyll`). Add new static files there.
- Nunjucks variables use `[[ ]]`, not `{{ }}`, because the pages use `{{accent}}` for their own runtime.

`docs/` is the generated site and **is committed**. GitHub Pages serves it directly, with no Actions: in the repo's Pages settings, set the source to *Deploy from a branch*, branch `base`, folder `/docs`. Run `npm run build` and commit `docs/` along with your changes.
