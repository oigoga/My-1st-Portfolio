import React from "react";
import { headshot, resume } from "../assets";

const Hero = () => {
  return (
    <section className=" flex flex-col-reverse md:flex-row font-Ubuntu  md:justify-between w-full  items-center px-6 xl:mr-10">
      <div className="flex  flex-col ml-6  md:pb-20 xl:ml-10 pt-6 md:pt-24 lg:pl-10 px-8 ">
        <h1 className="text-white text-6xl hidden md:flex ">
          H<span className="text-orange">I.</span>{" "}
        </h1>
        <h3 className="text-white text-3xl sm:text-4xl">I'm O'iGoga</h3>

        <p className="text-lg w-full md:w-2/3 uppercase my-4 text-justify ">
          I am result-oriented Front-End Developer keen on creating user first,
          high quality and modern web applications. 
          <br />{" "}
          As a very organized person,
          I pay attention to little details when working on any project. I am
          interested in working with and for ambitious and positive people.
        </p>

        <button
          type="button"
          className="my-3 md:w-80 w-3/4 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none hover:bg-white rounded-lg  '
          # hover:border-orange hover:border-4  bg-orange hover:text-gray focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          <a className="font-bold" href={resume} download>
            Download Resume
          </a>
        </button>
      </div>
      <div className="h-2/3 w-2/3 md:3/4 xl:w-1/2 pb-6 xl:mr-20 md:mr-10  ">
        <h1 className="text-white text-6xl md:hidden mb-4 md:mt-4 ">
          H<span className="text-orange">I.</span>{" "}
        </h1>
        <img
          src={headshot}
          alt=""
          className="rounded-none md:rounded-lg lg:rounded-full w-full h-full  md:border-orange hover:rounded-full"
        />
      </div>
    </section>
  );
};

export default Hero;
