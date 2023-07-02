import { createStore } from 'vuex';
import type { IMovie } from '@/helpers/models';

export default createStore({
  state: {
    movies: [],
    currentMovie: {},
  },
  mutations: {
    setMovies(state: any, value: IMovie[]) {
      state.movies = value;
    },
  },
  actions: {},
  modules: {},
});
