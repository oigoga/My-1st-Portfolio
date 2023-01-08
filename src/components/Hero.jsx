import React from "react";
import { headshot, resume } from "../assets";

const Hero = () => {
  return (
    <section className=" flex flex-col-reverse md:flex-row font-Ubuntu justify-center md:justify-between w-full h-full p-6 xl:mr-10">
      <div className="flex  flex-col md:mt-10 pb-20 pt-8 xl:ml-20 ">
        <h1 className="text-white text-6xl ">
          H<span className="text-orange">I.</span>{" "}
        </h1>
        <h3 className="text-white text-4xl">I'm O'iGoga</h3>

        <p className="text-lg uppercase my-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />{" "}
          Culpa, est blanditiis. suscipit iusto cupiditate quos unde quod
          debitis
        </p>
        
        <button
          type="button"
          class="my-3 w-80 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray focus:outline-none bg-white rounded-lg border border-orange hover:bg-orange hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
         <a className="" href={resume} download>
            Download Resume
          </a>
        </button>
      </div>
      <div className="h-60 w-60 md:h-80 md:w-80 mt-10 xl:mr-20  ">
        <img src={headshot} alt="" className="rounded-none md:rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
