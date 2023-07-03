<script setup lang="ts">
import { ref } from 'vue';
import type { IMovie } from '@/helpers/models/movies';
import { RouterLink } from 'vue-router';

const props = defineProps<{ movie: IMovie }>();

const showMore = ref(false);
const date = ref(new Date(props.movie.release_date).toLocaleDateString());
</script>

<template>
  <div class="movie-card card shadow-sm">
    <RouterLink :to="'/movieDetail/' + movie.id">
      <img :src="movie.imageUrl" class="card-img-top" alt="movie poster" loading="lazy" />
    </RouterLink>

    <div class="card-body">
      <RouterLink :to="'/movieDetail/' + movie.id">
        <h5 class="card-title">{{ movie.title }}</h5>
      </RouterLink>

      <div class="overview" :class="showMore && 'show'">
        <p class="card-text">
          {{ movie.overview }}
        </p>
      </div>

      <div class="overview-see-more">
        <button @click="showMore = !showMore">Show {{ showMore ? 'less' : 'full' }}</button>
      </div>
    </div>

    <div class="card-footer">
      <small class="text-body-secondary float-end">{{ date }}</small>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.movie-card {
  min-width: 10rem;
  height: fit-content;
}

.overview {
  position: relative;
  overflow: auto;
  max-height: 7rem;
  padding-inline: 0.5rem;
  transition: all 500ms ease;
  border-radius: 3px;
  background-image: linear-gradient(to top, #d5d5d5, transparent 20%);

  &.show {
    max-height: 25rem;
    background-image: none;
  }
}

.overview-see-more {
  display: flex;
  justify-content: flex-end;

  > button {
    width: 5rem;
    padding: 0;
    margin: 0;
    border: none;
    background-color: transparent;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
