// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ['@atlasauth/nuxt'],

  /**
   * Public values (publishableKey + frontendApi) are seeded here but are meant
   * to come from NUXT_PUBLIC_ATLAS_* env vars at runtime. The SERVER-only
   * verification secrets (jwksUrl / issuer) live under `runtimeConfig.atlas`
   * via NUXT_ATLAS_* and are never sent to the browser — see `.env.example`.
   */
  atlas: {},
});
