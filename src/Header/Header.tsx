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
        <div className="absolute h-full z-10 ">
          <div className="grid grid-cols-6  items-center h-full ">
            <div className="ml-4 pb-8 col-span-4 lg:col-start-2 lg:col-span-3   text-white ">
              <div className="font-bold text-4xl xl:text-5xl mb-5 lg:mb-11 ">
                {headline}
              </div>
              <div className="flex text-xs md:text-sm  lg:text-base ">
                <button className="w-full  max-w-header-button h-header-button rounded-base font-bold mr-2.5 text-custom-grey bg-custom-yellow-gold ">
                  SECURE MY DATA
                </button>
                <button className="w-full  max-w-header-button h-header-button rounded-base font-bold border-white border-2 hover:bg-white hover:text-custom-orchid-dark  transition ease-in-out duration-300">
                  TAKE A CHANCE
                </button>
              </div>
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
