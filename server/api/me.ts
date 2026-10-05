// A protected Nitro route. `getAtlasAuth(event)` is auto-imported by
// @atlasauth/nuxt; it reads the auth state the server middleware verified
// locally and stashed on the request. A signed-out caller gets a 401.
export default defineEventHandler(async (event) => {
  const { userId, orgId, isSignedIn } = await getAtlasAuth(event);
  if (!isSignedIn) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' });
  }
  return { userId, orgId };
});
