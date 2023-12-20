import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useContext } from "react";

import MovieContext from "@/store/Movie-contest";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import Link from "next/link";

const Trending = () => {
  const trendingCtx = useContext(MovieContext);

  const sliderRef = useRef<Slider | null>(null);
  console.log("TRNDG", trendingCtx);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    slidesPerRow: 1,
    nextArrow: <></>,
    prevArrow: <></>,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="py-3">
      <div className="flex justify-between">
        <div className="flex">
          <h2 className="text-white text-lg xl:text-4xl p-3">Trending Now</h2>
        </div>
        <div className="hidden xl:flex none ">
          <div className="" style={{ textAlign: "center" }}>
            <button
              onClick={trendingCtx.previousSlide}
              className="text-xl text-gray-400 p-5 hover:text-sky-700"
            >
              <i className="fa fa-angle-left fa-lg"></i>
            </button>
            <button
              onClick={trendingCtx.nextSlide}
              className=" text-xl text-gray-400 hover:text-sky-700 p-5"
            >
              <i className="fa fa-angle-right fa-lg "></i>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full xl:h-72" id="trendingMovies">
        <div className="h-40 xl:h-auto">
          <Slider {...settings} ref={sliderRef}>
            {trendingCtx.trendingMovies.map((trendingMovie, id) => (
              <div
                key={id}
                className="relative p-2 h-32 xl:h-auto bg-no-repeat bg-cover bg-top rounded-lg"
              >
                <Link href="/movie-detail">
                  <div
                    className="relative h-32 xl:h-72 w-auto xl:w-full opacity-80 cursor-pointer"
                    // onClick={() => navigate("/movie-detail")}
                    style={{
                      backgroundImage: `url(${trendingMovie.backgroundImg})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="absolute top-2 left-2 rounded w-[78px] xl:w-[92px] h-6 xl:h-10 bg-red-600 p-1 m-0">
                      <span className="flex items-center gap-x-1 xl:gap-x-3">
                        <i
                          className="fa fa-wifi xl:my-2 text-xs xl:text-md"
                          style={{ color: "#fff" }}
                        ></i>
                        <p className="text-xs text-white xl:text-md">ON AIR</p>
                      </span>
                    </div>
                    <div
                      className="absolute w-full bottom-0 left-0 p-5"
                      style={{
                        backgroundImage:
                          "linear-gradient(to bottom,rgba(0,0,0,0),#101010)",
                      }}
                    >
                      <h2 className="text-white text-md xl:text-2xl">
                        {trendingMovie.title}
                      </h2>
                      <div className="flex text-white text-base gap-x-1.5 my-3">
                        <p className="text-slate-400 text-xs xl:text-lg ">
                          {trendingMovie.year} • {trendingMovie.genre} •
                          {trendingMovie.views} VIEWS
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default Trending;
