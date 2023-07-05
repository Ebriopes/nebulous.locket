<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

import FilterBar from '@/components/FilterBar.vue';
import MoviesList from '@/components/MoviesList.vue';
import MovieService from '@/services/MovieService';

const store = useStore();

const page = computed<number>(() => store.state.pagination.page);
const total_pages = computed<number>(() => store.state.pagination.total_pages);

const indexesAround = computed(() => {
  const amountAround = 2;
  const indexes = [];

  if (page.value) {
    for (let index = 0; indexes.length <= amountAround * 2; index++) {
      const aroundPage = page.value - amountAround + index;

      if (aroundPage > 0) indexes.push(aroundPage);
    }
  }

  return indexes;
});

const getPage = (newPage: number) => {
  MovieService.getDiscoverMovies({ params: { page: newPage } });
};

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
          <div class="card-title mb-4">
            <h5 class="text-center fw-bolder fs-1">Popular Movies</h5>
          </div>

          <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center">
              <li class="page-item" :class="page === 1 ? 'disabled' : ''">
                <button class="page-link" @click="getPage(page - 1)">Previous</button>
              </li>

              <li
                v-for="indexPage in indexesAround"
                class="page-item"
                :class="page === indexPage ? 'disabled' : ''"
                :key="indexPage"
              >
                <button class="page-link" @click="getPage(indexPage)">{{ indexPage }}</button>
              </li>

              <li class="page-item" :class="page === total_pages ? 'disabled' : ''">
                <button class="page-link" @click="getPage(page + 1)">Next</button>
              </li>
            </ul>
          </nav>

          <MoviesList />
        </div>
      </section>
    </div>
  </div>
</template>
