# Ezon Digital

Premium digital subscription storefront.

**Live:** https://enzo-digtal.vercel.app

## Local development

```bash
npm install
npm run dev
```

The site is served at `http://localhost:3000`.

## Production build

```bash
npm run build
npm run preview
```

The build output is written to `dist/`.

## Deployment

Vercel deploys the `main` branch automatically:

- **Framework:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`

`index.html` is the standalone storefront that Vercel builds. Images referenced from
`src/assets` are hashed and copied into `dist/assets` automatically.

`deploy/` contains the static copy used by the separate `enzo-digtal-deploy` Vercel
project. Keep it in sync with the root `index.html` when changing the storefront.

> **Important:** `.vercelignore` must not exclude `package.json`,
> `package-lock.json`, `vite.config.ts`, `tsconfig.json`, or `src/`. If it does,
> Vercel cannot install dependencies and the build fails with
> `vite: command not found`.

## Telegram

Clicking a price plan opens an order sheet. Confirming an order opens a pre-filled
Telegram message to `@enzostoreowner`. To change the destination, edit
`submitOrder()` in `index.html` (and in `deploy/index.html`).

The footer links to the order bot (`@Ezonstorebot`) and support (`@enzostoreowner`).
