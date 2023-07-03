<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

import type { IMovie } from '@/helpers/models';
import MovieService from '@/services/MovieService';
import MovieCard from '@/components/MovieCard.vue';

const store = useStore();

onMounted(async () => {
  await MovieService.getDiscoverMovies();
});

const movies = computed<IMovie[]>(() => store.state.movies);
</script>

<template>
  <div class="container-fluid h-100 pt-4 movies-list">
    <div class="row row-cols-4 row-gap-4">
      <section v-for="movie in movies" :key="movie.id" class="col d-flex justify-content-center">
        <MovieCard :movie="movie" />
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.movies-list {
  // max-height: 50dvh;
  overflow: auto;
}
</style>
