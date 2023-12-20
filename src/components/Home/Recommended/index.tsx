import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Link from "next/link";

const Recommended = () => {
  const [showMoreRecommended, setShowMoreRecommended] = useState(false);

  // const navigate = useNavigate();

  const toggleMoreDetails = () => {
    setShowMoreRecommended((prevState) => !prevState);
  };

  return (
    <div className="mb-12">
      <h2 className="px-2 text-white text-xl text-bold xl:text-3xl my-5">
        Recommended
      </h2>
      <div
        className="w-full xl:w-11/12 xl:h-96 bg-no-repeat bg-cover rounded-lg"
        style={{
          backgroundImage: `url(${"/images/recommend.jpg"})`,
          height: "422px",
        }}
      >
        <div className="p-5 text-center xl:text-left">
          <div className="flex justify-center xl:justify-start text-slate-200 text-md xl:text-xl">
            <p>2020</p>.<p>Comedy</p>,<p>Horror</p>
          </div>
          <div className="text-white text-3xl xl:text-5xl">
            <p>Vicious Fun</p>
          </div>
          <div className="text-slate-200 text-md  xl:text-xl">
            <p className="my-2">Movies</p>
            <p className="my-2">Director:Cody Calahan</p>
            <p className="my-2">
              Writer:Cody Calahan, Christopher Warre Smets, James Villeneuve
            </p>
            <p>Stars:Evan Marsh, Amber Goldfarb, Ari Millen</p>
            <p className="my-3 hidden xl:block">
              Joel, a caustic 1980s film critic for a national horror magazine,
              finds himself unwittingly trapped in a self-help group for serial
              killers. With no other choice, Joel attempts to blend in or risk
              becoming the next victim....
            </p>
          </div>
          <div className="flex flex-col xl:flex-row space-x-55 p-3">
            <Link href="/movie-detail">
              <div className="p-2 mx-3">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Watch Now
                </button>
              </div>
            </Link>
            <div className="p-2 mx-3">
              <button className="bg-black-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Trailer
              </button>
            </div>
            <div className="p-2 mx-3">
              <button className="bg-dark-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Add to list
              </button>
            </div>

            <button></button>
            <button></button>
          </div>
        </div>
      </div>

      <div className="h-full p-8">
        <h2 className="text-white text-md xl:text-3xl text-bold">
          SAICORD - DUBBING STUDIO
        </h2>
        <div
          id="recommendedMovieDetails"
          style={{
            height: showMoreRecommended ? "auto" : "100px",
            overflow: showMoreRecommended ? "auto" : "hidden",

            background: "linear-gradient(to bottom,rgba(0,0,0,0),#101010)",
          }}
        >
          <p className="text-white text-xs xl:text-lg my-5">
            We established our company with a goal to provide the public with
            high-quality voice-over of both world-known movies and small
            projects. Furthermore, we aimed to replace common TV. Not long ago,
            it was impossible to watch a foreign movie with a voice-over in your
            native language on the same day it was released, since localization
            took a very long time, from several months to a year. And when the
            movie finally appeared on the TV screens, one had to keep the
            broadcasting schedule in mind. This is no longer an issue thanks to
            Saicord. Any person can now watch a movie they want at a convenient
            time and with a pleasant voice-over.
          </p>
          <h2 className="text-white text-md xl:text-3xl">
            SAICORD – FREE OF CHARGE MOVIES AND TV SERIES
          </h2>
          <p className="text-white text-xs xl:text-lg my-5">
            The studio developing, the speed of our work has also increased.
            Thus, we have achieved excellent results. Telugu voice-overs of
            foreign movie and TV series are released on the premiere day. Such a
            large amount of work and high speed could have damaged the quality
            of translation and voice acting, but that does not apply to us. Our
            users have been happy with our platform for several years.
            Voice-overs where all the actors are voiced by one person are not
            uncommon. Again, that is not the case with Saicord, as we choose a
            separate person for the voice-over of each character and make sure
            that the voice acting style matches the character of a movie or TV
            series best. Thanks to the fact that we are constantly expanding our
            staff, our users have a wide selection of TV series, movies and TV
            shows in Telugu voice acting.
          </p>
        </div>
        <div className="flex p-3 m-0 justify-center">
          <button
            onClick={toggleMoreDetails}
            className="bg-slate-600 text-slate-200 rounded-md w-[120px] h-[25px] xl:h-[50px]"
            style={
              {
                // width: "200px",
              }
            }
          >
            {showMoreRecommended ? "Show less" : "Show more"}
          </button>
        </div>
      </div>
      <div className="flex text-gray-200 justify-center  text-lg xl:text-3xl space-x-5">
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
  );
};
export default Recommended;
