<script setup lang="ts">
import { computed, ref } from 'vue';
import type { IMovie } from '@/helpers/models';

const props = defineProps<{ movie: IMovie }>();

const date = computed(() => new Date(props.movie.release_date).toLocaleDateString());

const budget = computed(() =>
  (props.movie.budget || 0)
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ','),
);

const revenue = computed(() =>
  (props.movie.revenue || 0)
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ','),
);
</script>

<template>
  <div class="card shadow">
    <img class="card-img-top cover" :src="props.movie.imageUrl" alt="Movie poster" />
    <div class="card-body px-5">
      <h2 class="card-title fw-bolder">{{ props.movie.title }}</h2>
      <p class="card-subtitle ps-1">{{ props.movie.tagline }}</p>

      <article class="card-text my-5 px-5">
        <span>{{ props.movie.overview }}</span>
      </article>

      <article class="d-flex justify-content-around">
        <div>
          <h5>Production Companies</h5>
          <ul>
            <li v-for="production in props.movie.production_companies" :key="production.id">
              {{ production.name }}
            </li>
          </ul>
        </div>

        <div>
          <h5>Genres</h5>
          <ul>
            <li v-for="genre in props.movie.genres" :key="genre.id">{{ genre.name }}</li>
          </ul>
        </div>
      </article>

      <div class="d-flex justify-content-between align-items-end">
        <a v-if="props.movie.homepage" :href="props.movie.homepage" target="_blank">
          Visit the home page
        </a>

        <div>
          <p>Budget: ${{ budget }}</p>
          <p>Revenue: ${{ revenue }}</p>
        </div>
      </div>
    </div>

    <div class="card-footer">
      <span>Runtime: {{ props.movie.runtime }} minutes </span>
      <small class="text-body-secondary float-end">Release: {{ date }}</small>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cover {
  object-fit: cover;
  max-height: 15rem;
}
</style>
