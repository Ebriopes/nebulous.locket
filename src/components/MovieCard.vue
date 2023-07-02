<template>
  <div class="movie-card card shadow">
    <img :src="movie.backdrop_path" class="card-img-top" alt="movie poster" />

    <div class="card-body">
      <h5 class="card-title">{{ movie.title }}</h5>

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

<script setup lang="ts">
import type { IMovie } from 'src/helpers/models/movies';
import { computed, ref } from 'vue';

const props = defineProps<{ movie: IMovie }>();

const date = computed(() => {
  const dateObj = new Date(props.movie.release_date);

  return dateObj.toLocaleDateString();
});

const showMore = ref(false);
</script>

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
