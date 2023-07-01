export interface IMovie {
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  genres: [
    {
      id: number;
      name: string;
    },
    {
      id: number;
      name: string;
    },
    {
      id: number;
      name: string;
    },
  ];
  homepage: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [
    {
      english_name: string;
      iso_number_number: string;
      name: string;
    },
    {
      english_name: string;
      iso_number_number: string;
      name: string;
    },
    {
      english_name: string;
      iso_number_number: string;
      name: string;
    },
  ];
  status: string;
  title: string;
  video: string;
  vote_average: number;
  vote_count: number;
  adult?: string;
  budget?: number;
  imdb_id?: string;
  production_companies?: [
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    },
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    },
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    },
    {
      id: number;
      logo_path: null;
      name: string;
      origin_country: string;
    },
  ];
  production_countries?: [
    {
      iso_number_number: string;
      name: string;
    },
  ];
  tagline?: string;
}

export interface IMovieList {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}
