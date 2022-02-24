import React from "react";

const NavBar = () => {
  return (
    <section className=" top-0 z-50 w-full px-8 text-gray-700 bg-transparent">
      <div className="container flex flex-col flex-wrap items-center justify-between py-3 mx-auto md:flex-row max-w-7xl ">
        <div className="relative flex flex-col md:flex-row">
          <a
            href="#_"
            className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
          >
            {" "}
            <img
              className="flex-shrink-0  "
              src="/images/logo-landscape.webp"
              alt=""
            />
            {/* <span className="mx-auto text-xl font-black leading-none text-orange-400 select-none">
            Hobnob<span className="text-orange-400">.</span>
          </span> */}
          </a>
          {/* <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
            <a
              href="#_"
              className="mr-5 font-medium leading-6 text-gray-100 hover:text-gray-900"
            >
              Home
            </a>
            <a
              href="#_"
              className="mr-5 font-medium leading-6 text-gray-100 hover:text-gray-900"
            >
              Features
            </a>

            <a
              href="#_"
              className="mr-5 font-medium leading-6 text-gray-100 hover:text-gray-900"
            >
              Blog
            </a>
          </nav> */}
        </div>

        <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
          <a
            href="#_"
            className="mr-5 font-medium leading-6 text-gray-100 hover:text-gray-900"
          >
            Home
          </a>
          <a
            href="#_"
            className="mr-5 font-medium leading-6 text-gray-100 hover:text-gray-900"
          >
            Features
          </a>

          <a
            href="#_"
            className="mr-5 font-medium leading-6 text-gray-100 hover:text-gray-900"
          >
            Blog
          </a>
          <div className="px-5"> </div>
          <a
            href="#"
            className="text-base font-medium leading-6 text-gray-100 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
          >
            Sign in
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-orange-400 border border-transparent shadow-sm hover:bg-orange-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 rounded-lg"
          >
            Sign up
          </a>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
