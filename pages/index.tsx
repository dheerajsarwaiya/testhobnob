import Head from "next/head";
import NavBar from "../components/templates/NavBar";
import Banner from "../components/templates/Banner";
import Team from "../components/templates/Team";
import ContentBoxes from "../components/templates/ContentBoxes";
import SimpleFiveColumn from "../components/templates/SimpleFiveColumn";
import SimpleWithSideImage from "../components/templates/SimpleWithSideImage";
import Features from "../components/templates/Features";

export default function Home() {
  return (
    <div>
      <Head>
        <title>HobNob</title>
        <meta name="description" content="Amplify workplace communications" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <NavBar /> */}
      <Banner />

      {/* <section className="flex items-center justify-center py-10 text-white bg-white sm:py-16 md:py-24 lg:py-32">
        <div className="relative max-w-3xl px-10 text-center text-white auto lg:px-0">
          <div className="flex flex-col w-full md:flex-row">
            <div className="flex justify-between">
              <h1 className="relative flex flex-col text-6xl font-extrabold text-left text-black">
                Crafting
                <span>Powerful</span>
                <span>Experiences</span>
              </h1>
            </div>
            <div className="relative top-0 right-0 h-64 mt-12 md:-mt-16 md:absolute md:h-96">
              <img
                src="https://cdn.devdojo.com/images/december2020/designs3d.png"
                className="object-cover mt-3 mr-5 h-80 lg:h-96"
              />
            </div>
          </div>

          <div className="my-16 border-b border-gray-300 lg:my-24"></div>

          <h2 className="text-left text-gray-500 xl:text-xl">
            Building beautiful designs for your next project. We've unlocked the
            secret to converting visitors into customers. Download our re-usable
            and extandable components today.
          </h2>
        </div>
      </section> */}

      {/* <!-- Section 4 --> */}
      <ContentBoxes />

      {/* <!-- Section 5 --> */}
      <Features />

      {/* <!-- Section 6 --> */}
      <section className="flex items-center justify-center py-16 bg-gray-100 min-w-screen">
        <div className="max-w-6xl px-12 mx-auto bg-gray-100 md:px-16 xl:px-10">
          <div className="flex flex-col items-center lg:flex-row">
            <div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
              <p className="mb-2 text-base font-medium tracking-tight text-orange-400 uppercase">
                Our customers love our product
              </p>
              <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
                Testimonials
              </h2>
              <p className="my-6 text-lg text-gray-600">
                Dont just take our word for it, read from our extensive list of
                case studies and customer testimonials.
              </p>
              <a
                href="#_"
                className="flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-orange-400 border border-transparent shadow hover:bg-orange-300 focus:outline-none focus:border-yellow-500 focus:shadow-yellow-NaN md:py-4 md:text-lg md:px-10 rounded-lg"
              >
                View Case Studies
              </a>
            </div>
            <div className="w-full lg:w-1/2">
              <blockquote className="flex items-center justify-between w-full col-span-1 p-6 bg-white shadow rounded-lg">
                <div className="flex flex-col pr-8">
                  <div className="relative pl-12">
                    <svg
                      className="absolute left-0 w-10 h-10 text-orange-400 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 125"
                    >
                      <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                    </svg>
                    <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">
                      Awesome product! And the customer service is exceptionally
                      well.
                    </p>
                  </div>

                  <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm ">
                    Jane Cooper
                    <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                      - CEO SomeCompany
                    </span>
                  </h3>
                </div>
                <img
                  className="flex-shrink-0 w-20 h-20 bg-gray-300 rounded-full xl:w-24 xl:h-24"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                  alt=""
                />
              </blockquote>
              <blockquote className="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white shadow rounded-lg">
                <div className="flex flex-col pr-10">
                  <div className="relative pl-12">
                    <svg
                      className="absolute left-0 w-10 h-10 text-orange-400 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 125"
                    >
                      <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                    </svg>
                    <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">
                      I cant express enough, how amazing this service has been
                      for my company.
                    </p>
                  </div>
                  <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm ">
                    John Doe
                    <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                      - CEO SomeCompany
                    </span>
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                </div>
                <img
                  className="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full"
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;aauto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                />
              </blockquote>
              <blockquote className="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white shadow rounded-lg">
                <div className="flex flex-col pr-10">
                  <div className="relative pl-12">
                    <svg
                      className="absolute left-0 w-10 h-10 text-orange-400 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 125"
                    >
                      <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                    </svg>
                    <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">
                      I cant express enough, how amazing this service has been
                      for my company.
                    </p>
                  </div>

                  <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm ">
                    John Smith
                    <span className="mt-1 text-sm leading-5 text-gray-500 truncate">
                      - CEO SomeCompany
                    </span>
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                </div>
                <img
                  className="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full"
                  src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rrb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;aauto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                  alt=""
                />
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Section 7 --> */}
      <section className="py-8 leading-7 text-gray-900 bg-white sm:py-12 md:py-16 lg:py-24">
        <div className="max-w-6xl px-10 mx-auto border-solid lg:px-12">
          <div className="flex flex-col items-start leading-7 text-gray-900 border-0 border-gray-200 lg:items-center lg:flex-row">
            <div className="box-border flex-1 text-center border-solid sm:text-left">
              <h2 className="m-0 text-4xl font-semibold leading-tight tracking-tight text-left text-black border-0 border-gray-200 sm:text-5xl">
                Boost Your Productivity
              </h2>
              <p className="mt-2 text-xl text-left text-gray-900 border-0 border-gray-200 sm:text-2xl">
                Our service will help you maximize and boost your productivity.
              </p>
            </div>
            <a
              href="#_"
              className="inline-flex items-center justify-center w-full px-5 py-4 mt-6 ml-0 font-sans text-base leading-none text-white no-underline bg-orange-400 border border-yellow-400 border-solid cursor-pointer md:w-auto lg:mt-0 hover:bg-yellow-500 hover:border-yellow-500 hover:text-white focus-within:bg-yellow-500 focus-within:border-yellow-500 focus-within:text-white sm:text-lg lg:ml-6 md:text-xl rounded-lg"
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-2"
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
          </div>
        </div>
      </section>

      {/* <!-- Section 8 --> */}

      <Team />
      {/* <SimpleWithSideImage /> */}
      {/* <!-- Section 9 --> */}

      <SimpleFiveColumn />
      {/* 
      <script src="https://cdnjs.cloudflare.com/ajax/libs/alpinejs/2.8.0/alpine.js"></script> */}
    </div>
  );
}
