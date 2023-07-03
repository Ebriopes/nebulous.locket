<script setup lang="ts">
import { computed, onMounted, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

import MovieService from '@/services/MovieService';
import MovieDetail from '@/components/MovieDetail.vue';
import type { IMovie } from '@/helpers/models';

const store = useStore();
const route = useRoute();

const movie = computed<IMovie>(() => store.state.currentMovie);

watchEffect(() => {
  store.commit('setTitle', movie.value.title);
});

onMounted(() => {
  MovieService.getMovie(route.params.movieId as string);
});
</script>

<template>
  <div class="container my-4">
    <div class="row">
      <div class="col">
        <RouterLink to="/" class="my-5">Back to home</RouterLink>

        <MovieDetail v-if="movie" :movie="movie" />
      </div>
    </div>
  </div>
</template>
