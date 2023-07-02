<script setup lang="ts">
import MoviesList from '@/components/MoviesList.vue';
</script>

<template>
  <div class="container card my-5">
    <div class="row row-gap-4 card-body">
      <section class="col col-12 filter-container card">
        <div class="card-body"></div>
      </section>

      <section class="col col-12 filter-container card">
        <MoviesList class="card-body" />
      </section>
    </div>
  </div>
</template>
