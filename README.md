# Dr. Dhanshree's Dental Clinic

Premium dental clinic website built with Next.js, Tailwind CSS, Framer Motion, GSAP, Lenis, React Three Fiber, and Three.js.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run typecheck`

Generates Next.js route types, then runs TypeScript checks without emitting files.

### `npm run build`

Builds the static production site to the `out` folder for Netlify.

## Netlify Deployment

This repository includes `netlify.toml`.

- Build command: `npm run build`
- Publish directory: `out`
- Node version: `22`

No Netlify UI publish-directory change is required after this file is deployed.

## Vercel Deployment

This repository includes `vercel.json`.

- Framework preset: Next.js
- Build command: `npm run build`
- Install command: `npm install`
- Node version: `22`
