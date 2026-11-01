# Beau proposal and product requirements

Open `index.html` directly, or run `npm start` and visit http://127.0.0.1:4173.

The website is static and works without an account, server-side database or network dependencies. Proposal and PRD views, document search, section filters, downloads, themes and printing run in the browser. With JavaScript disabled, both documents remain readable.

`../Beau_Proposal.html` is the single-file distribution with styles, scripts, logo and downloadable PRD embedded. It can be shared independently.

Edit `styles.css` and `app.js` for presentation and interaction. `build.mjs` regenerates the website and single-file distribution from `source/proposal.html` and `../Beau_PRD_v2.md`, falling back to the included Markdown asset when that parent file is absent. Run `npm install` once to install the development-only Markdown parser before rebuilding. Normal viewing and serving need no dependencies.

Beau's rosewater, berry and sage visual direction is a proposed product identity, not a replacement for KARMA Groups' corporate identity. The KARMA symbol is retained in the partner section without alteration.
