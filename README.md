# Beau

A beauty and wellness marketplace proposal and product requirements workspace, prepared for **EBUBE ELLA** by **Ezeocha Obioma - KARMA Groups**.

## View the proposal

- Open [Beau_Proposal.html](Beau_Proposal.html) in a browser for the complete, self-contained website. Download the raw file to view it locally.
- Alternatively, open [Beau_Website/index.html](Beau_Website/index.html), keeping the website folder together.
- Read the source [Product Requirements Document](Beau_PRD_v2.md).

The website includes the proposal, team responsibilities, commercial terms, the full searchable PRD, section filters, Markdown downloads, Daylight and After hours themes, reduced-motion support and print styles. It works locally without accounts or external runtime dependencies.

## Run locally

With Node.js installed:

```sh
cd Beau_Website
npm start
```

Open http://127.0.0.1:4173. A server is optional; the HTML files can also be opened directly.

## Edit and rebuild

```sh
cd Beau_Website
npm ci
npm run build
```

- `styles.css` defines Beau's rosewater, berry and sage design system and responsive/print layouts.
- `app.js` implements document navigation, PRD search and filters, themes, downloads and motion.
- `source/proposal.html` retains the source proposal content used by the builder.
- The root `Beau_PRD_v2.md` supplies the PRD; the included Markdown asset is a fallback when using the website folder independently.
- `build.mjs` regenerates the website and the root self-contained distribution.

Only rebuilding needs the development dependency `marked`. Runtime viewing and serving do not require installed packages.

## Documents and commercial context

Version 2 records the agreed service-marketplace direction; it is not the implemented Beau marketplace application. The original Word discovery document is preserved locally and is not included in this repository.

The proposal states $1,400 development plus a $200 infrastructure allowance, one month of free maintenance after launch/handover, and subsequent maintenance at $140 per month. Currency confirmation, infrastructure billing, payment milestones, delivery dates and other pending terms remain subject to agreement as described in the proposal.

Internal review screenshots, browser automation outputs, local caches and environment files are excluded from this repository.
