<template>
  <div>
    <header
      style="max-width: 560px; margin: 1.5rem auto 0; display: flex; gap: 1rem; align-items: center; font-family: system-ui, sans-serif;"
    >
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/dashboard">Dashboard</NuxtLink>
      <span style="margin-left: auto">
        <!-- Auto-registered by @atlasauth/nuxt (no import needed). -->
        <SignedOut><NuxtLink to="/sign-in">Sign in</NuxtLink></SignedOut>
        <SignedIn><UserButton /></SignedIn>
      </span>
    </header>
    <NuxtPage />
  </div>
</template>
