<script setup lang="ts">
import { computed, reactive } from 'vue';
import { useStore } from 'vuex';
import type { IGenre } from '@/helpers/models/genres';
import MovieService from '@/services/MovieService';

interface IFilter {
  [key: string]: any;
  include_adult: boolean;
  primary_release_year?: number;
  with_genres?: number;
}

const store = useStore();

const genres = computed<IGenre[]>(() => store.state.genres);

const years = new Array(50).fill(new Date().getFullYear()).map((year, index) => year - index);

const filters = reactive<IFilter>({
  primary_release_year: undefined,
  include_adult: false,
  with_genres: undefined,
});

const buttonTrigger = () => {
  const searchAdultContent = !filters.include_adult;

  filters.include_adult = searchAdultContent;

  MovieService.getDiscoverMovies({ params: { ...filters } });
};

const getMovies = (e: Event, filterName: string) => {
  filters[filterName] = +(e.target as HTMLSelectElement).value;

  MovieService.getDiscoverMovies({ params: { ...filters } });
};
</script>

<template>
  <h4 class="fs-2">Filter Section</h4>
  <div class="d-flex justify-content-between gap-5">
    <div class="input-group flex-grow-1">
      <label class="input-group-text" id="filter-year">Year</label>
      <select
        class="form-select"
        aria-describedby="filter-year"
        @change="getMovies($event, 'primary_release_year')"
      >
        <!-- <select class="form-select" aria-describedby="filter-year" @change="console.log"> -->
        <option selected hidden>Select a year</option>
        <option v-for="year in years" :value="year" :key="year">{{ year }}</option>
      </select>
    </div>

    <div class="input-group flex-grow-1">
      <label class="input-group-text" id="filter-genre">genre</label>
      <select
        class="form-select"
        aria-describedby="filter-genre"
        @change="getMovies($event, 'with_genres')"
      >
        <option selected hidden>Select a genre</option>
        <option v-for="genre in genres" :value="genre.id" :key="genre.id">{{ genre.name }}</option>
      </select>
    </div>

    <button
      :class="filters.include_adult ? 'btn-danger' : ''"
      class="btn btn-primary flex-shrink-0"
      @click="buttonTrigger"
    >
      Adult content
    </button>
  </div>
</template>
