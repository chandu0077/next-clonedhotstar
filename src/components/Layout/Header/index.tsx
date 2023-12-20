import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="bg-black-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <h2 className="text-white">Hot Star clone</h2>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex items-center">
              <Image
                className="h-8 w-auto"
                src="https://t3.ftcdn.net/jpg/02/09/90/46/360_F_209904633_WG53H6HXIoEQrPiVRfzRCnyjQ9nOUZxr.jpg"
                alt="Your Company"
                width={25}
                height={25}
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#Home"
                  className="sm:text-lg md:text-lg xl:text-xl lg:text-4xl text-gray hover:text-white font-black text-white rounded-md px-3 py-2 "
                  aria-current="page"
                >
                  Hot Star clone
                </a>
                <a
                  href="#popularMovies"
                  className="min-[1280px]:block max-[1279px]:hidden text-gray-300  hover:text-white rounded-md px-3 py-2 text-xl font-medium"
                >
                  Popular
                </a>
                <a
                  href="#series"
                  className="min-[1280px]:block max-[1279px]:hidden text-gray-300  hover:text-white rounded-md px-3 py-2 text-xl font-medium"
                >
                  Series
                </a>
                <a
                  href="#trendingMovies"
                  className="min-[1280px]:block max-[1279px]:hidden text-gray-300  hover:text-white rounded-md px-3 py-2 text-xl font-medium"
                >
                  Trending
                </a>
                <a
                  href="#recommended"
                  className="min-[1280px]:block max-[1279px]:hidden text-gray-300  hover:text-white rounded-md px-3 py-2 text-xl font-medium"
                >
                  Recommended
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <div>
                <Image
                  className="h-8 w-8 rounded-full"
                  src="/images/profile_pic.png"
                  alt="profile pic"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
