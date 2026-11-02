# Beau

A beauty and wellness marketplace proposal and product requirements website, prepared for **EBUBE ELLA** by **Ezeocha Obioma - KARMA Groups**.

## Overview

This repository contains the standalone, zero-dependency static website for the Beau proposal and interactive Product Requirements Document (PRD).

- **`index.html`**: The complete website featuring the project proposal, interactive PRD with live search, section filters, category breakdowns, and embedded Markdown export.
- **`styles.css`**: Complete styling implementing Beau's rosewater, berry, and sage design system, daylight/after-hours themes, responsive layout, and print formatting.
- **`app.js`**: Client-side logic for instant document navigation, live requirements filtering, search, theme switching, and motion controls.

## Hosting & Running

### Deploy on Vercel
This repository is configured as a pure static website. Push to GitHub and import into Vercel with zero extra build steps or configuration needed.

### Run Locally
Open `index.html` directly in any web browser, or serve it using any local static server:

```sh
# Using Python
python -m http.server 4173

# Or using npx
npx serve .
```

Visit `http://localhost:4173`.
