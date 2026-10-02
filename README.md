# CV Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/45aaefe6-1f12-41fd-a9f6-c8aaf14f18fc/deploy-status)](https://app.netlify.com/projects/tajindercv/deploys)

Personal CV website for Tajinder Singh, built with [Astro](https://astro.build/) and a single YAML content file. It is fully static: no server, database, analytics, or runtime API calls.

## Demo

- [tajinder.cv](https://tajinder.cv)

## Tech Stack

- **Framework:** Astro 7, TypeScript, CSS
- **Content:** `src/data/cv.yaml`
- **Fonts:** Lato and Source Sans 3, self-hosted via `@fontsource`
- **Hosting:** Netlify

## Project Structure

```text
.
├── astro.config.mjs               # Astro configuration (site URL, static output)
├── netlify.toml                   # Netlify build configuration
├── public/favicon.svg             # Static assets, copied as-is
└── src/
    ├── components/ExperienceEntry.astro
    ├── data/cv.yaml               # All CV content
    ├── pages/index.astro          # Page layout and meta tags
    ├── styles/global.css          # Responsive and print styles
    └── types.ts                   # Types for cv.yaml
```

## Local Development

Requires Node.js 22.12 or later.

```bash
npm ci
npm run dev
```

Open the local URL printed by Astro (default `http://localhost:4321`).

Production build:

```bash
npm run check     # type and template checks
npm run build     # output in dist/
npm run preview   # serve dist/ locally
```

## Updating the CV

Edit `src/data/cv.yaml`. It holds the biography, contact links, selected work, experience, skills, recognition, education, and languages. Layout changes go in `src/pages/index.astro` and styling in `src/styles/global.css`.

The canonical and Open Graph URLs are set to `https://tajinder.cv/` in `src/pages/index.astro`. Update them if the domain changes.

The "Print / save PDF" button opens the browser print dialog. The print styles in `global.css` control the PDF layout.

## Deployment

Netlify deploys automatically on every push to `master`. Pull requests get a deploy preview. Netlify will:

1. Use Node.js 22
2. Run `npm run build`
3. Publish the `dist/` directory

## Author

Tajinder Singh - [tajinder.cv](https://tajinder.cv/)
