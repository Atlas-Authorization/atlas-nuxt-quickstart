# atlas-nuxt-quickstart

A minimal Nuxt 3 app pre-wired with [Atlas](https://atlasauth.net) auth, using
the `@atlasauth/nuxt` module.

The module does the wiring for you: it installs the `@atlasauth/vue` client
app-wide, **auto-imports** the composables (`useUser`, `useAuth`, …) and
**auto-registers** the components (`<SignedIn>`, `<SignedOut>`, `<SignIn>`,
`<UserButton>`, …), and runs a Nitro middleware that verifies the `__session`
JWT locally and exposes `getAtlasAuth(event)` to server routes.

## What it shows

- `nuxt.config.ts` — registers `@atlasauth/nuxt`.
- `app.vue` — header gated with `<SignedOut>` / `<SignedIn>` + `<UserButton>`.
- `pages/index.vue` — a public home page using `useUser()`.
- `pages/sign-in.vue` — the `<SignIn>` flow.
- `pages/dashboard.vue` — a protected page gated with `useAuth()`.
- `server/api/me.ts` — a protected server route using `getAtlasAuth(event)`.

## Run it

1. `npm install`
2. `cp .env.example .env`, then set `NUXT_PUBLIC_ATLAS_PUBLISHABLE_KEY`,
   `NUXT_PUBLIC_ATLAS_FRONTEND_API`, `NUXT_ATLAS_JWKS_URL`, and
   `NUXT_ATLAS_ISSUER` to the values from [atlasauth.net](https://atlasauth.net).
3. `npm run dev`

Open http://localhost:3000. Visit `/dashboard`; call `/api/me` to see server
verification.
