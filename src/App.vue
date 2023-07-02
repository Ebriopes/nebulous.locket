<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
</script>

<template>
  <header id="header">
    <NavBar />
  </header>

  <main class="content">
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
$navbar-height: 58px;
$content-height: calc(100dvh - $navbar-height);

#header {
  width: 100%;
}

.content {
  overflow: auto;
  min-height: $content-height;
  height: $content-height;
  max-height: $content-height;
}
</style>
