import type { AxiosRequestConfig } from 'axios';
import type { IMovie, IMovieList } from '@/helpers/models';
import { createAPIConnection } from '@/services/HttpService';
import store from '@/store';

interface ITheMovieDBResponse {
  success: boolean;
  guest_session_id?: string;
  expires_at?: Date;
}

interface IMovieDBConfig {
  images: {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: string[];
    logo_sizes: string[];
    poster_sizes: string[];
    profile_sizes: string[];
    still_sizes: string[];
  };
  change_keys: string[];
}

/**
 * Services to get Movies.
 */
class MovieService {
  private sessionId?: string;
  private configuration?: IMovieDBConfig;

  /** @constructor */
  constructor() {}

  ////////////////
  //    AUTH
  ////////////////
  /**
   * Get authentication from TheMovieDB
   * @param { Object } credentials data form
   * @returns { Promise }
   */
  authenticate(credentials?: AxiosRequestConfig) {
    return createAPIConnection.get('/authentication', credentials).then(async (res) => {
      await this.getConfiguration();

      return res;
    });
  }

  guessAuthenticate(credentials?: AxiosRequestConfig) {
    return createAPIConnection
      .get('/authentication/guest_session/new', credentials)
      .then(async (res) => {
        this.sessionId = (res.data as ITheMovieDBResponse).guest_session_id;

        return res;
      });
  }

  ///////////////////
  // ENDPOINTS
  ///////////////////

  getMovie(movieId: string, credentials?: AxiosRequestConfig) {
    return createAPIConnection.get('/movie/' + movieId, credentials).then(async (res) => {
      if (!this.configuration) {
        await this.getConfiguration();
      }

      const movie = res.data as IMovie;

      movie.imageUrl = this.getUrlImage(movie.backdrop_path);

      store.commit('setCurrentMovie', movie);
    });
  }

  getGenres() {
    return createAPIConnection.get('/genre/movie/list').then((res) => {
      store.commit('setGenres', res.data.genres);
    });
  }

  getDiscoverMovies(credentials?: AxiosRequestConfig) {
    return createAPIConnection.get('/discover/movie', credentials).then(async (res) => {
      if (!this.configuration) {
        await this.getConfiguration();
      }

      const { results, page, total_pages } = res.data as IMovieList;

      const moviesWithImage = results.map((movie: IMovie) => ({
        ...movie,
        imageUrl: this.getUrlImage(movie.poster_path, false),
      }));

      store.commit('setMovies', moviesWithImage);
      store.commit('setPagination', { page, total_pages });

      return res;
    });
  }

  private getConfiguration(credentials?: AxiosRequestConfig) {
    return createAPIConnection.get('/configuration', credentials).then((res) => {
      this.configuration = res.data;

      this.getGenres();

      return res;
    });
  }

  private getUrlImage(path: string, useBackdrop = true) {
    const { base_url, backdrop_sizes, poster_sizes } = this.configuration!.images;

    const size = useBackdrop ? backdrop_sizes[2] : poster_sizes[3];

    return base_url + size + path;
  }
}

export default new MovieService();
