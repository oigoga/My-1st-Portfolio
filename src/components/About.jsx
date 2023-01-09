import React from "react";
import { DiGithubBadge, DiJsBadge, DiReact, DiCss3, DiHtml5, DiGit } from "react-icons/di";

const About = () => {
  return (
    <section id="about" className="font-Ubuntu p-6">
      <div className=" md:w-2/3 flex  flex-col md:mt-10 pb-20 xl:ml-20 md:pt-8 pt-24 lg:pl-10 p-6">
        <h4 className="text-4xl border-b-2 text-white md:text-6xl border-b-orange py-3">
          About me
        </h4>
        <div className="bg-navyy rounded-md shadow-sm shadow-off-white my-4 p-3 text-white">
        <p className="flex w-full my-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
          tenetur dicta eos similique itaque dolor ea est possimus odit,
          deserunt ratione aperiam velit, iure voluptate delectus inventore
          unde, veniam beatae. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Qui, soluta a repellendus laudantium molestiae
          dolore adipisci dolorem quo sit voluptatibus nulla debitis officiis
          fugit quas similique? Porro tempora quam aliquam! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Non placeat cupiditate pariatur
          ullam excepturi autem impedit, modi recusandae est fuga laudantium quo
          voluptatibus velit enim optio id, voluptas fugit harum.
        
        </p>
        </div>
        
        <div className="font-Ubuntu w-full">
        <h4 className="text-4xl border-b-2 text-white md:text-6xl border-b-orange py-3">
         I Work With:
        </h4>
        <ul className="my-3 text-navy flex md:flex-row flex-col">
        <li className="flex  justify-center md ">
              <div className="bg-off-white shadow-md shadow-gray w-16 text-xs rounded-md flex items-center flex-col h-16 my-3 ml-0 mr-3 justify-center">
              <div className=" my-3 w-5 rounded-md ">
               <DiJsBadge className="h-full w-full rounded-sm"/>
              </div>
              <div className=" bg-gray-light w-full mb-0 rounded-md h-5 p-0.5 font-bold flex justify-center">
                <span>Javascript</span>
              </div>
              </div>
              <div className="bg-off-white shadow-md shadow-gray w-16 text-xs rounded-md flex items-center flex-col h-16 m-3 justify-center">
              <div className=" my-3 w-5 rounded-md ">
               <DiCss3 className="h-full w-full rounded-sm"/>
              </div>
              <div className=" bg-gray-light w-full mb-0 rounded-md h-5 p-0.5 font-bold flex justify-center ">
                <span>CSS3</span>
              </div>
              </div>
            </li>
            <li className="flex  justify-center md ">
              <div className="bg-off-white shadow-md shadow-gray w-16 text-xs rounded-md flex items-center flex-col h-16 m-3  justify-center">
              <div className=" my-3 w-5 rounded-md ">
               <DiHtml5 className="h-full w-full rounded-sm"/>
              </div>
              <div className=" bg-gray-light w-full mb-0 rounded-md h-5 p-0.5 font-bold flex justify-center ">
                <span>HTML5</span>
              </div>
              </div>
              <div className="bg-off-white shadow-md shadow-gray w-16 text-xs rounded-md flex items-center flex-col h-16 m-3 justify-center">
              <div className=" my-3 w-5 rounded-md ">
               <DiReact className="h-full w-full rounded-sm"/>
              </div>
              <div className=" bg-gray-light w-full mb-0 rounded-md h-5 p-0.5 font-bold flex justify-center ">
                <span>React</span>
              </div>
              </div>
            </li>
            <li className="flex  justify-center md ">
              <div className="bg-off-white shadow-md shadow-gray w-16 text-xs rounded-md flex items-center flex-col h-16 m-3  justify-center">
              <div className=" my-3 w-5 rounded-md ">
               <DiGit className="h-full w-full rounded-sm"/>
              </div>
              <div className=" bg-gray-light w-full mb-0 rounded-md h-5 p-0.5 font-bold flex justify-center ">
                <span>Git</span>
              </div>
              </div>
              <div className="bg-off-white shadow-md shadow-gray w-16 text-xs rounded-md flex items-center flex-col h-16 m-3 justify-center">
              <div className=" my-3 w-5 rounded-md ">
               <DiGithubBadge className="h-full w-full rounded-sm"/>
              </div>
              <div className=" bg-gray-light w-full mb-0 rounded-md h-5 p-0.5 font-bold flex justify-center  ">
                <span>GitHub</span>
              </div>
              </div>
            </li>
        </ul>
        </div>
        
      </div>
    </section>
  );
};

export default About;



