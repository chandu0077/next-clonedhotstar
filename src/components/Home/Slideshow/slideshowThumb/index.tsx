import { useContext } from "react";
import MovieContext from "@/store/Movie-contest";
const SlideShowThumb = () => {
  // const { movies, changeMovieHandler } = props;

  const slideshowCtx = useContext(MovieContext);
  return (
    <>
      {slideshowCtx.slideshowMovies.map((movie, idx) => {
        return (
          <div
            key={idx}
            className="relative bg-no-repeat bg-cover bg-center w-[150px] xl:w-[200px] h-[70px] xl:h-[150px]"
            style={{
              backgroundImage: `url(${movie.backgroundImg})`,
            }}
            onClick={() => slideshowCtx.changeMovieHandler(idx)}
          >
            <div className="absolute bottom-0 left-0 px-3 py-3 w-full cursor-pointer">
              <div className="flex justify-between">
                <p className="text-white text-xs xl:text-xl">{movie.year}</p>
                <div className="rounded-3xl bg-sky-500 flex justify-center items-center w-8 h-5">
                  <p className="text-white">{movie.rating}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default SlideShowThumb;
