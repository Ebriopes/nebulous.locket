export interface IMovie {
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  imageUrl?: string;
  adult?: boolean;
  budget?: number;
  imdb_id?: string;
  homepage?: string;
  revenue?: number;
  runtime?: number;
  status?: string;
  genres?: {
    id: number;
    name: string;
  }[];
  belongs_to_collection?: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  // spoken_languages?: {
  //   english_name: string;
  //   iso_number_number: string;
  //   name: string;
  // }[];
  // production_companies?: [{
  //   id: number;
  //   logo_path: string;
  //   name: string;
  //   origin_country: string;
  // }];
  // production_countries?: {
  //   iso_number_number: string;
  //   name: string;
  // }[];
  tagline?: string;
}

export interface IMovieList {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}
