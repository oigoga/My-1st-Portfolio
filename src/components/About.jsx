import React from "react";
import {
  DiGithubBadge,
  DiJsBadge,
  DiReact,
  DiCss3,
  DiHtml5,
  DiGit,
} from "react-icons/di";

const About = () => {
  return (
    <section id="about" className="font-Ubuntu p-6">
      <div className=" md:w-2/3 flex  flex-col md:mt-10 md:pb-20 xl:ml-10 md:pt-8 pt-24 lg:pl-10 p-6">
        <h4 className="text-4xl border-b-2 text-white md:text-6xl border-b-orange py-3">
          About me
        </h4>
        <div className="bg-navyy rounded-md shadow-sm shadow-off-white my-4 p-3 text-white">
          <p className="flex w-full my-3 text-justify ">
            Hi there I am Oigoga and I am a front-end developer. I have a knack
            for learning quickly and this has helped me build my skillset over
            the last couple of months.
            </p> 
             <p className="flex w-full my-3 text-justify my-3">
             I am a resourceful, and result-oriented
            person. I am great at organization and planning. I am enthusiastic
            about being able to create stuff that people actually use and I am
            passionate about aesthetically pleasing yet functional websites. I
            am learning how to engage my mind to solve problems with critical
            thinking and analysis. I am very open to learning new things to
            achieve growth both as an individual and as part of any team. My
            core values are discipline consistency and hard work as I have seen
            with an immeasurable number of examples that they pay off with
            incredible results.
             </p>
            
             <p className="flex w-full my-3 text-justify my-3">
             In addition to my technical skills. When I am
            not coding, I’d either be reading, writing organizing my space or
            life. I am also a certified technical writer. I am naturally
            outspoken and I try to communicate assertively without any hint of
            passive aggression. Lastly, I love cars, flavoured teas and clean
            spaces.
             </p>
          
        </div>

        <div className="font-Ubuntu w-full">
          <h4 className="text-4xl border-b-2 text-white md:text-6xl border-b-orange py-3">
            I Work With
          </h4>
          <ul className="my-3 text-navy flex md:flex-row flex-col justify-center  ">
            <li className="flex  justify-center md ">
              <div className="bg-off-white shadow-md shadow-gray w-16 text-xs rounded-md flex items-center flex-col h-16 md:m-3 m-3.5 justify-center">
                <div className=" my-3 w-5 rounded-md ">
                  <DiJsBadge className="h-full w-full rounded-sm" />
                </div>
                <div className=" bg-gray-light w-full mb-0 rounded-md h-5 p-0.5 font-bold flex justify-center">
                  <span>Javascript</span>
                </div>
              </div>
              <div className="bg-off-white shadow-md shadow-gray w-16 text-xs rounded-md flex items-center flex-col h-16 m-3.5 md:m-3 justify-center">
                <div className=" my-3 w-5 rounded-md ">
                  <DiCss3 className="h-full w-full rounded-sm" />
                </div>
                <div className=" bg-gray-light w-full mb-0 rounded-md h-5 p-0.5 font-bold flex justify-center ">
                  <span>CSS3</span>
                </div>
              </div>
            </li>
            <li className="flex  justify-center md ">
              <div className="bg-off-white shadow-md shadow-gray w-16 text-xs rounded-md flex items-center flex-col h-16 m-3.5 md:m-3 justify-center">
                <div className=" my-3 w-5 rounded-md ">
                  <DiHtml5 className="h-full w-full rounded-sm" />
                </div>
                <div className=" bg-gray-light w-full mb-0 rounded-md h-5 p-0.5 font-bold flex justify-center ">
                  <span>HTML5</span>
                </div>
              </div>
              <div className="bg-off-white shadow-md shadow-gray w-16 text-xs rounded-md flex items-center flex-col h-16 m-3.5 md:m-3 justify-center">
                <div className=" my-3 w-5 rounded-md ">
                  <DiReact className="h-full w-full rounded-sm" />
                </div>
                <div className=" bg-gray-light w-full mb-0 rounded-md h-5 p-0.5 font-bold flex justify-center ">
                  <span>React</span>
                </div>
              </div>
            </li>
            <li className="flex  justify-center md ">
              <div className="bg-off-white shadow-md shadow-gray w-16 text-xs rounded-md flex items-center flex-col h-16 m-3.5 md:m-3 justify-center">
                <div className=" my-3 w-5 rounded-md ">
                  <DiGit className="h-full w-full rounded-sm" />
                </div>
                <div className=" bg-gray-light w-full mb-0 rounded-md h-5 p-0.5 font-bold flex justify-center ">
                  <span>Git</span>
                </div>
              </div>
              <div className="bg-off-white shadow-md shadow-gray w-16 text-xs rounded-md flex items-center flex-col h-16 m-3.5 md:m-3 justify-center">
                <div className=" my-3 w-5 rounded-md ">
                  <DiGithubBadge className="h-full w-full rounded-sm" />
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
