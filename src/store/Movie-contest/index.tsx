import React from "react";
import { MovieContextInterface } from "@/interfaces/MovieContext";
import { movieDetail } from "@/interfaces/MovieContext";
const MovieContext = React.createContext<MovieContextInterface>({
  slideshowMovies: [],
  trendingMovies: [],
  popularMovies: [],
  moreMovies: [],
  series: [],
  cartoons: [],
  tv: [],
  movieDetail: {
    movieTitle: "",
    movieBanner: "",
    description: "",
    cardBanner: "",
    videoUrl: "",
    imdbRating: "",
    metaScoreRating: "",
    saiScoreRating: "",
    stills: [],
    movieDirector: "",
    Stars: "",
    Genres: "",
    Language: "",
    Company: "",
    Writers: "",
    Tagline: "",
    Country: "",
    Year: "",
    Runtime: "",
  },
  selectedMovie: 0,
  changeMovieHandler: (idx: any) => {},
  previousSlide: () => {},
  nextSlide: () => {},
});
export default MovieContext;
