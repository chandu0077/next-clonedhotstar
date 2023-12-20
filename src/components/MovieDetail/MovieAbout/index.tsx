// import Navbar from "../Common/navbar";
// import Sidebar from "../Common/sidebar";
// import Contactus from "../Common/contactUs";
// import { CircularProgressbar } from "react-circular-progressbar";
// import MovieStills from "./movieStills";
import { useContext } from "react";
import MovieContext from "@/store/Movie-contest";
// import { movieDetail } from "../Common/constants";
const MovieAbout = () => {
  // const { movieDetail } = props;
  const aboutCtx = useContext(MovieContext);

  return (
    <div className="w-5/5 xl:w-4/5 xl:w-5/5 h-[500px] text-white p-2">
      <h2 className="text-xl xl:text-4xl">{aboutCtx.movieDetail.movieTitle}</h2>
      <div className="flex justify-between pt-2">
        <p className="text-gray-300 text-sm xl:text-md">
          {aboutCtx.movieDetail.Tagline}.
        </p>
        <p className="text-white text-md xl:text-2xl">Rating: 9</p>
      </div>
      <p className="text-white text-xs xl:text-lg py-1">
        {aboutCtx.movieDetail.Year}, {aboutCtx.movieDetail.Genres} : Movies
      </p>
      <h2 className="text-white text-sm xl:text-xl pt-5">Description:</h2>
      <p className="text-gray-300 text-xs xl:text-[16px] mt-2">
        {aboutCtx.movieDetail.description}
      </p>
      <div className="w-full h-[350px] xl:h-[250px] pt-3">
        <div className="w-full h-full flex flex-col xl:flex-wrap space-y-2 pt-2 text-sm xl:text-lg text-gray-300">
          <div className="flex w-[300px] xl:w-[400px]">
            <span className="w-1/4">Director:</span>
            <p className="w-3/4 text-start">
              {aboutCtx.movieDetail.movieDirector}
            </p>
          </div>
          <div className="flex w-[300px] xl:w-[400px]">
            <span className="w-1/4">Writers:</span>
            <p className="w-3/4 text-start">{aboutCtx.movieDetail.Writers}</p>
          </div>
          <div className="flex w-[300px] xl:w-[400px]">
            <span className="w-1/4">Stars:</span>
            <p className="w-3/4 text-start">
              {aboutCtx.movieDetail.Stars}
            </p>{" "}
          </div>
          <div className="flex w-[300px] xl:w-[400px]">
            <span className="w-1/4">Tagline:</span>
            <p className="w-3/4 text-start">{aboutCtx.movieDetail.Tagline}</p>
          </div>
          <div className="flex w-[300px] xl:w-[400px]">
            <span className="w-1/4">Genres:</span>
            <p className="w-3/4 text-start">{aboutCtx.movieDetail.Genres}</p>
          </div>
          <div className="flex w-[300px] xl:w-[400px]">
            <span className="w-1/4">Country:</span>
            <p className="w-3/4 text-start">{aboutCtx.movieDetail.Country}</p>
          </div>
          <div className="flex w-[300px] xl:w-[400px]">
            <span className="w-1/4">Language:</span>
            <p className="w-3/4 text-start">{aboutCtx.movieDetail.Language}</p>
          </div>
          <div className="flex w-[300px] xl:w-[400px]">
            <span className="w-1/4">Compnay:</span>
            <p className="w-3/4 text-start">{aboutCtx.movieDetail.Company}</p>
          </div>
          <div className="flex w-[300px] xl:w-[400px]">
            <span className="w-1/4">Runtime:</span>
            <p className="w-3/4">{aboutCtx.movieDetail.Runtime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieAbout;
