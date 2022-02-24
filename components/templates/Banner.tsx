import React from "react";
import HeroImage from "../svgs/HeroImage";
import NavBar from "./NavBar";

const Banner = () => {
  return (
    <section className="flex flex-col px-2 pb-32 bg-hero-pattern md:px-0">
      <NavBar />
      <div className="container items-center max-w-6xl px-8 py-8 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">
                  Amplify workplace engagment&nbsp;
                </span>
                <span className="block text-orange-400 xl:inline">
                  with One on One conversations!
                </span>
              </h1>
              <p className="mx-auto text-base text-white sm:max-w-md lg:text-xl md:max-w-3xl">
                Hobnob makes connecting at scale more efficient and powerful
              </p>
              <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                <a
                  href="#_"
                  className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-orange-400 sm:mb-0 hover:bg-yellow-500 sm:w-auto rounded-lg"
                >
                  Talk to us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <a
                  href="#_"
                  className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 hover:bg-gray-200 hover:text-gray-600 rounded-lg"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full h-auto overflow-hidden hover:shadow-xl rounded-lg">
              {/* <HeroImage /> */}
              <img src="/images/pexels-christina-morillo-1181715.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
