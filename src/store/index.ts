import { createStore } from 'vuex';
import type { IMovie } from '@/helpers/models';
import type { IGenre } from '@/helpers/models/genres';

export default createStore({
  state: {
    pageTitle: '',
    movies: [],
    currentMovie: {},
    genres: [],
  },
  mutations: {
    setMovies(state: any, value: IMovie[]) {
      state.movies = value;
    },
    setGenres(state: any, value: IGenre[]) {
      state.genres = value;
    },
    setTitle(state: any, value: string) {
      state.title = value;
    },
  },
  actions: {},
  modules: {},
});
