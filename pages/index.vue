<script setup lang="ts">
// useUser() is auto-imported by @atlasauth/nuxt.
const { user } = useUser();
</script>

<template>
  <main style="max-width: 560px; margin: 3rem auto; font-family: system-ui, sans-serif;">
    <h1>atlas-nuxt-quickstart</h1>
    <p>A starter Nuxt app wired up with Atlas auth.</p>

    <SignedOut>
      <p>You are signed out. <NuxtLink to="/sign-in">Sign in</NuxtLink> to continue.</p>
    </SignedOut>

    <SignedIn>
      <p>Signed in as {{ user?.first_name ?? user?.id }}.</p>
      <p><NuxtLink to="/dashboard">Go to your dashboard</NuxtLink></p>
    </SignedIn>
  </main>
</template>
