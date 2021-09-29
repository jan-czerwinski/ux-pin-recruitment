import React, { useState } from "react";

import backgroundGood from "./images/backgroundGood.png";
import backgroundEvil from "./images/backgroundEvil.png";

type HeaderProps = {
  headline: string;
};

const Header = ({ headline }: HeaderProps) => {
  const [bgGoodActive, setBgGoodActive] = useState(true);
  return (
    <div className="max-w-bg-image mx-auto">
      <div
        className="w-full  object-cover pb-bg-aspect-ratio relative overflow-hidden"
        onMouseOver={() => setBgGoodActive(false)}
        onMouseLeave={() => setBgGoodActive(true)}
      >
        <div className="absolute h-full z-10  ml-14 lg:ml-32 xl:ml-60">
          <div className="flex flex-col justify-center h-full w-full  text-white space-y-10">
            <div className="w-2/3  xl:w-1/2 leading-tight  font-bold text-xl lg:text-2xl xl:text-5xl ">
              {headline}
            </div>
            <div className="flex space-x-3  lg:space-x-5 text-xs md:text-sm  lg:text-md xl:text-lg ">
              <button className="w-1/4 xl:w-1/6 p-4 rounded-md font-bold  text-black bg-custom-yellow-gold ">
                SECURE MY DATA
              </button>
              <button className="w-1/4 xl:w-1/6 p-4 rounded-md font-bold border-white border-2 hover:bg-white hover:text-custom-orchid-dark  transition ease-in-out duration-300">
                TAKE A CHANCE
              </button>
            </div>
          </div>
        </div>
        <div className="z-0">
          <img
            src={backgroundGood}
            alt="background abstract city good"
            className={`absolute inset-0 z-0 transition-all ease-in-out duration-1000 transform slide ${
              bgGoodActive ? "translate-y-0" : "-translate-y-full"
            }`}
          />
          <img
            src={backgroundEvil}
            alt="background abstract city evil"
            className={`absolute inset-0 z-0 transition-all ease-in-out duration-1000 transform slide ${
              !bgGoodActive ? "translate-y-0" : "translate-y-full"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
