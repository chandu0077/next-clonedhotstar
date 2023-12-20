import { useState } from "react";
import { useRef } from "react";

const Sidebar = () => {
  //   const linkRef = useRef();

  const [navActive, setNavactive] = useState(false);
  const handleNavclick = (e: any) => {
    setNavactive(!navActive);
  };

  return (
    <nav className="hidden xl:flex bg-black-800 flex-col items-center h-screen w-1/12">
      <div className="fixed flex flex-col h-screen justify-evenly">
        <a
          //   ref={linkRef}
          href="#Home"
          className="active:bg-violet-700 text-gray-300  hover:text-white rounded-md p-0 text-xl font-medium m-0 text-center"
          aria-current="page"
        >
          <i className="fa fa-home"></i>
          <p className="text-sm">HOME</p>
        </a>
        <a
          //   ref={linkRef}
          onClick={(e) => handleNavclick(e)}
          href="#movies"
          className=" active:bg-violet-700 text-gray-300  hover:text-white rounded-md p-0 text-xl font-medium m-0 text-center"
        >
          <i className="fa fa-film"></i>
          <p className="text-sm">MOVIES</p>
        </a>
        <a
          //   ref={linkRef}
          href="#tv"
          className=" active:bg-violet-700 text-gray-300  hover:text-white rounded-md p-0 text-xl font-medium m-0 text-center"
        >
          <i className="fa fa-television"></i>
          <p className="text-sm">TV+</p>
        </a>
        <a
          //   ref={linkRef}
          href="#recommended"
          className=" active:bg-violet-700 text-gray-300  hover:text-white rounded-md p-0 text-xl font-medium m-0 text-center"
        >
          <i className="fa fa-file-o"></i>
          <p className="text-sm">GENRES</p>
        </a>
        <a
          //   ref={linkRef}
          href="#popularMovies"
          className=" active:bg-violet-700 text-gray-300  hover:text-white rounded-md p-0 text-xl font-medium m-0 text-center"
        >
          <i className="fa fa-star-o"></i>
          <p className="text-sm">POPULAR</p>
        </a>
      </div>
    </nav>
  );
};
export default Sidebar;
