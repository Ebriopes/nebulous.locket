<script setup lang="ts">
import { onMounted } from 'vue';
import { useStore } from 'vuex';

import FilterBar from '@/components/FilterBar.vue';
import MoviesList from '@/components/MoviesList.vue';

const store = useStore();

onMounted(() => {
  store.commit('setTitle', 'HOME');
});
</script>

<template>
  <div class="container card shadow-lg my-3">
    <div class="row row-gap-3 card-body">
      <section class="col col-12 filter-container card">
        <div class="card-body">
          <FilterBar />
        </div>
      </section>

      <section class="col col-12 filter-container card">
        <div class="card-body">
          <div class="card-title"><h5 class="text-center fw-bolder fs-1">Popular Movies</h5></div>
          <MoviesList />
        </div>
      </section>
    </div>
  </div>
</template>
