export interface MovieContextInterface {
  slideshowMovies: Movie[];
  trendingMovies: Movie[];
  popularMovies: Movie[];
  moreMovies: Movie[];
  series: Movie[];
  cartoons: Movie[];
  tv: Movie[];
  movieDetail: movieDetail;
  selectedMovie: number;
  changeMovieHandler: (idx: any) => void;
  previousSlide: () => void;
  nextSlide: () => void;
}
export interface Movie {
  backgroundImg: string;
  description?: string;
  img?: string;
  title: string;
  year: string;
  genre: string;
  views?: string;
  rating?: string;
}
export interface movieDetail {
  movieTitle: string;
  movieBanner: string;
  description: string;
  cardBanner: string;
  videoUrl: string;
  imdbRating: string;
  metaScoreRating: string;
  saiScoreRating: string;
  stills: string[];
  movieDirector: string;
  Stars: string;
  Genres: string;
  Language: string;
  Company: string;
  Writers: string;
  Tagline: string;
  Country: string;
  Year: string;
  Runtime: string;
}
