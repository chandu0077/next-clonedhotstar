import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MovieContextInterface } from "@/interfaces/MovieContext";
import {
  slideshowMovies,
  trendingMovies,
  popularMovies,
  moreMovies,
  series,
  cartoons,
  tv,
  movieDetail,
} from "../../constants/movie";

import { useRef, useState } from "react";

import MovieContext from "../Movie-contest/index";
import Slider from "react-slick";

const MovieProvider = (props: any) => {
  const sliderRef = useRef<Slider | null>(null);
  const [selectedMovie, setSelectedMovie] = useState(0);

  const changeMovieHandler = (idx: any) => {
    setSelectedMovie(idx);
  };

  const previousSlide = () => {
    sliderRef?.current?.slickPrev();
  };
  const nextSlide = () => {
    console.log(sliderRef);
    sliderRef?.current?.slickNext();
  };

  const moviecontext: MovieContextInterface = {
    slideshowMovies: slideshowMovies,
    trendingMovies: trendingMovies,
    popularMovies: popularMovies,
    moreMovies: moreMovies,
    series: series,
    cartoons: cartoons,
    tv: tv,
    movieDetail: movieDetail,
    selectedMovie: selectedMovie,
    changeMovieHandler: changeMovieHandler,
    previousSlide: previousSlide,
    nextSlide: nextSlide,
  };
  console.log(";;;", moviecontext);
  return (
    <MovieContext.Provider value={moviecontext}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
