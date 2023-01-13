import React from "react";
import { headshot, resume } from "../assets";

const Hero = () => {
  return (
    <section className=" flex flex-col-reverse md:flex-row font-Ubuntu  md:justify-between w-full  items-center px-6 ">
      <div className="flex  flex-col  md:pb-20 xl:ml-10 md:pt-16 pt-24 lg:pl-10 p-6 ">
        <h1 className="text-white text-6xl hidden md:flex ">
          H<span className="text-orange">I.</span>{" "}
        </h1>
        <h3 className="text-white text-4xl">I'm O'iGoga</h3>

        <p className="text-lg uppercase my-4 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.  debitis <br /> {" "}
          Culpa, est blanditiis. suscipit iusto cupiditate quos unde quod
         
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
      <div className="h-60 w-60 md:h-80 md:w-80 pb-6 xl:mr-20 lg:mr-5  ">
      <h1 className="text-white text-6xl md:hidden mb-4 md:mt-4 ">
          H<span className="text-orange">I.</span>{" "}
        </h1>
        <img src={headshot} alt="" className="rounded-none md:rounded-full md:border-orange hover:rounded-full" />
      </div>

      
    </section>
  );
};




export default Hero;

