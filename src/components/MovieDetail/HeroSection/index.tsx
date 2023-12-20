import { CircularProgressbar } from "react-circular-progressbar";
import { useContext } from "react";
import MovieContext from "@/store/Movie-contest";
const Herosection = () => {
  // const { movieDetail } = props;
  const heroCtx = useContext(MovieContext);
  return (
    <div className="w-full h-auto xl:h-[600px]">
      <div className="flex justify-center xl:justify-start xl:gap-x-10">
        <div className="hidden xl:block xl:w-1/4 h-full">
          {/* Img Card Banner */}
          <div
            className="hidden xl:block relative w-full  bg-no-repeat bg-cover rounded-lg h-96"
            style={{
              backgroundImage: `url(${heroCtx.movieDetail.cardBanner})`,
            }}
          >
            <div className="absolute bottom-3 right-2 w-7 h-8 xl:w-10 xl:h-10">
              <CircularProgressbar
                value={parseInt(heroCtx.movieDetail.saiScoreRating)}
                maxValue={10}
                text={`${parseInt(heroCtx.movieDetail.saiScoreRating) * 1}`}
                strokeWidth={10}
                // styles={buildStyles({
                //   pathColor: "#5865f2",
                // })}
                styles={{
                  text: {
                    fill: "#ffff",
                    fontSize: "42px",
                  },
                  background: {
                    fill: "#5865f2",
                  },
                }}
              />
            </div>
          </div>
          {/* movie Options */}
          <div className="w-full hidden xl:block">
            <button className="text-gray-300 text-lg w-full h-[40px] bg-[#171717]  hover:text-blue-600">
              Add to list
            </button>

            <div className="flex gap-x-3 w-full pt-3">
              <button className="text-gray-300 text-lg w-6/12  h-[40px] bg-[#171717] hover:text-blue-600 ">
                Trailer
              </button>
              <button className="text-gray-300 text-lg w-6/12 h-[40px] bg-[#171717]  hover:text-blue-600">
                Download
              </button>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-3/5 h-auto">
          <div className="w-full p-1 xl:px-5 h-fit">
            <video
              className="w-full xl:w-full h-full xl:h-[450px] py-1 xl:py-4"
              controls
            >
              <source
                src={heroCtx.movieDetail.videoUrl}
                type="video/mp4"
              ></source>
            </video>
          </div>
          <div className="w-5/5 h-fit">
            <div className="w-full h-full flex justify-between bg-[#171717] text-white mb-2 items-center">
              <p className="text-sm">Views 12663</p>
              <a
                href="mailto:chandu.dsc77@gmail.com"
                className="hover:text-blue-600 text-sm"
              >
                Video not working?
              </a>
              <div className="flex justify-center text-sm xl:text-lg space-x-2">
                <a
                  href="https://www.linkedin.com/in/chandu-dsc-385086236/"
                  target="__blank"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="mailto:chandu.dsc77@gmail.com">
                  <i className="fa fa-envelope"></i>
                </a>
                <a href="https://www.facebook.com/chandu3456/" target="__blank">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="block xl:hidden w-full h-fit">
            <button className="text-gray-300 text-sm  xl:text-lg w-full h-[40px] bg-[#171717]  hover:text-blue-600">
              Add to list
            </button>

            <div className="flex gap-x-3 w-full pt-3">
              <button className="text-gray-300 text-sm xl:text-lg w-6/12  h-[40px] bg-[#171717] hover:text-blue-600 ">
                Trailer
              </button>
              <button className="text-gray-300 text-sm  xl:text-lg w-6/12 h-[40px] bg-[#171717]  hover:text-blue-600">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Herosection;
