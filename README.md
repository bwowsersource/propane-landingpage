# Propane — landing pages

Static marketing site for Propane, deployed to **getpropane.app** (see `CNAME`)
via GitHub Pages.

## Pages

| File | Product |
|------|---------|
| `index.html` | Home — the runtime and the whole product family |
| `desktop.html` | Propane Desktop — the app |
| `voice.html` | Propane Voice — B2B voice-automation service (service · SDK · implementations) |
| `minion.html` | Minion — the open-source model runtime |

Every page links to the others from the top nav and the footer. The pricing
page was removed from the public site while the model below is still being
decided.

## Proposed pricing model (not published)

> The pricing page and all prices were **removed from the public pages** while
the numbers are still being decided. This is the working model.

### Tiers

| Tier | Price | For |
|------|-------|-----|
| Community | $0 | Up to three computers and five devices, with a monthly hosted-token budget |
| Pro | $15/mo | One person who wants Propane everywhere |
| Studio | $29/user/mo | Teams that build tools together |
| Enterprise | Custom | Organisations that run Propane themselves |

### Feature breakdown

**Community — $0**

- 3 computers
- Unlimited local tool decks
- Local models via Minion
- Mobile remote access, 5 devices
- 2M hosted tokens / month *(placeholder)*
- Bonus tokens when you share compute
- Community data helps train the models

**Pro — $15/mo**

- Unlimited computers
- 10M hosted tokens / month *(placeholder)*
- Your data is never used for training
- Priority email support
- Mobile remote access, all devices
- Cloud sync of tool decks

**Studio — $29/user/mo**

- Everything in Pro, plus:
- Pooled team token budget
- Shared workspaces
- Team tool-deck library
- SSO & audit log

**Enterprise — Custom**

- Everything in Studio, plus:
- Self-hosted runtime
- Private model gateway
- SAML / SCIM & SLA

### Comparison

| Feature | Community | Pro | Studio | Enterprise |
|---------|-----------|-----|--------|------------|
| Computers | 3 | Unlimited | Unlimited | Unlimited |
| Local tool decks | Unlimited | Unlimited | Unlimited | Unlimited |
| Mobile remote access | 5 devices | All devices | All devices | All devices |
| Hosted token budget | 2M / mo | 10M / mo | Pooled for the team | Custom |
| Share compute, earn bonus tokens | Opt-in | Opt-in | Opt-in | Opt-in |
| Data used to train models | Yes | No | No | No |
| Cloud sync | — | Included | Included | Included |
| Shared workspaces & team library | — | — | Included | Included |
| SSO & audit log | — | — | Included | Included |
| Self-hosted runtime | — | — | — | Included |
| Support | Community | Email | Priority | Dedicated |

### Community compute pool

Every Community account includes a monthly budget of hosted tokens for models
too large to run locally. The pool is refilled by volunteers — customers who
opt in to share their computer's idle time and earn bonus tokens in return.
Sharing is always pausable and never runs while the machine is in use.
Community usage also helps train the models, which is part of what keeps it
free; Pro and above never train on customer data.

### Separate pricing

Propane Voice is priced separately as a B2B service (the service, the Voice SDK
and implementations). Minion stays open source.

### Open questions / placeholders

- Token budgets (2M Community / 10M Pro) and the sharing bonus rate are placeholders.
- Whether Community training is automatic or opt-in is undecided.
- Studio's pooled token figure is unspecified.

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
