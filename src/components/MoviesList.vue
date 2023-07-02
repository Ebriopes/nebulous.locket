<script setup lang="ts">
import { reactive } from 'vue';

import MovieCard from '@/components/MovieCard.vue';
import { MOVIES_LIST } from '@/helpers/mocks/movies';
import type { IMovie } from '@/helpers/models/movies';

const state: IMovie[] = reactive(MOVIES_LIST.results);
</script>

<template>
  <div class="container-fluid h-100 pt-4 movies-list">
    <div class="row row-cols-4 row-gap-4">
      <section v-for="movie in state" :key="movie.id" class="col d-flex justify-content-center">
        <MovieCard :movie="movie" />
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.movies-list {
  max-height: 50dvh;
  overflow: auto;
}
</style>
