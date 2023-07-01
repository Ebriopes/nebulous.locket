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
    <div class="test"></div>
  </main>
</template>

<style lang="scss" scoped>
$navbar-height: 58px;

#header {
  width: 100%;
}

.content {
  overflow: auto;
  min-height: calc(100dvh - $navbar-height);
  max-height: calc(100dvh - $navbar-height);
}
</style>
