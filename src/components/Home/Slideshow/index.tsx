import React from "react";
import { Fragment } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import SlideShowThumb from "./slideshowThumb";
import { useContext } from "react";
import MovieContext from "@/store/Movie-contest";
import Link from "next/link";

const Slideshow = () => {
  const slideCtx = useContext(MovieContext);
  // console.log("///", slideCtx.slideshowMovies, slideCtx.selectedMovie);

  return (
    <Fragment>
      <Carousel
        infiniteLoop
        interval={5000}
        showArrows={false}
        showThumbs={false}
        selectedItem={slideCtx.selectedMovie}
      >
        {slideCtx.slideshowMovies.map((movie, idx) => (
          <div
            id="#Home"
            key={idx}
            className="w-100 h-[350px] xl:h-[600px]"
            style={{
              // backgroundImage: `url(${movie.img})`,
              backgroundImage: `url(${movie.img})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className="legend h-auto xl:h-5/6 flex flex-col top-0 gap-y-2 xl:gap-y-4 xl:justify-evenly"
              style={{
                bottom: "initial",
                backgroundColor: "transparent",
                opacity: 1,
                padding: 0,
              }}
            >
              <div className=" w-full xl:w-8/12 flex flex-col justify-center text-left">
                <div className="mt-4 xl:mt-0 mb-3">
                  <p className="text-white text-xs xl:text-2xl py-1 xl:py-3">
                    Rating:{movie.rating}
                  </p>
                  <p className="text-white text-xs xl:text-2xl py-1">
                    {movie.year}, {movie.genre}: Movies
                  </p>
                  <p className="text-bold text-white text-xl xl:text-5xl xl:py-4">
                    {movie.title}
                  </p>
                  <p className="text-white w-full xl:w-9/12 text-xs xl:text-xl py-1 xl:py-4">
                    {movie.description}
                  </p>
                </div>

                <div className="flex justify-between p-3">
                  <Link href="/movie-detail">
                    <div>
                      <button className="text-sm xl:text-xl p-1 xl:p-4 w-24 h-[30px] xl:w-36 xl:h-16 bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded-full">
                        Watch now
                      </button>
                    </div>
                  </Link>
                  <div>
                    <button className="text-sm xl:text-xl p-1 xl:p-4 w-24 h-[30px] xl:w-36 xl:h-16 bg-slate-800 hover:bg-blue-700 text-white  rounded-full">
                      Trailer
                    </button>
                  </div>
                  <div>
                    <button className="text-sm xl:text-xl p-1 xl:p-4 w-24 h-[30px] xl:w-36 xl:h-16 bg-slate-800 hover:bg-blue-700 text-white    rounded-full">
                      Add to list
                    </button>
                  </div>

                  <button></button>
                  <button></button>
                </div>
              </div>
              <div className="w-full h-auto m-0 xl:relative">
                <div className="flex justify-center  xl:absolute xl:right-0 gap-x-1">
                  <SlideShowThumb />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </Fragment>
  );
};
export default Slideshow;
