<script setup lang="ts">
// useAuth() is auto-imported. Protect the route: wait for the session, then
// redirect a signed-out visitor to /sign-in.
const { isLoaded, isSignedIn, userId, orgId } = useAuth();

watchEffect(() => {
  if (import.meta.client && isLoaded.value && !isSignedIn.value) {
    void navigateTo('/sign-in');
  }
});
</script>

<template>
  <main style="max-width: 560px; margin: 3rem auto; font-family: system-ui, sans-serif;">
    <p v-if="!isLoaded">Loading…</p>
    <template v-else-if="isSignedIn">
      <h1>Dashboard</h1>
      <p>This page is only reachable when you are signed in.</p>
      <p>
        Your user id is <code>{{ userId }}</code
        ><template v-if="orgId"> (org <code>{{ orgId }}</code>)</template>.
      </p>
      <p>The server route <code>/api/me</code> verifies the same session on the server.</p>
    </template>
  </main>
</template>
