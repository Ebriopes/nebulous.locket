<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';
import MovieService from './services/MovieService';

onBeforeMount(() => {
  MovieService.authenticate();
});
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
