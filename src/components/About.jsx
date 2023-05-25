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
            I'm Oigoga, a highly motivated and driven web developer with a deep
            passion for creating user-friendly products. I am committed to
            delivering exceptional experiences by meticulously crafting every
            detail. Organization and attention to detail are ingrained in my
            work ethic, allowing me to maintain a structured approach to
            projects. My creative mindset fuels me to bring fresh perspectives
            and innovative ideas to the table, fostering a collaborative
            environment within my team. I take pride in writing clean and
            reusable code, prioritizing code quality and maintainability.
           
          </p>
          <p className="flex w-full  text-justify my-3">
          Actively contributing to open source projects not only expands my
            knowledge but also enables me to give back to the development
            community. I am a lifelong learner, continuously seeking
            opportunities for personal and professional growth. Embracing
            challenges and acquiring new skills is essential to me, as it
            enhances my ability to tackle complex problems with critical
            thinking and analysis. While I am passionate about the technical
            aspects of my work, I also find joy in other activities. As a
            certified technical writer, I have honed my skills in effectively
            communicating complex concepts. 
          </p>

          <p className="flex w-full text-justify my-3">
          Beyond coding, you can find me
            immersed in books, writing, and organizing my surroundings. I strive
            for assertive yet respectful communication, valuing transparency and
            collaboration. Moreover, my love for cars, flavored teas, and clean
            spaces adds a touch of personal flair to my life, enhancing my
            overall well-being. I believe that a balanced lifestyle translates
            into a positive and focused mindset, enabling me to deliver
            outstanding results. Ultimately, my driving force lies in the
            gratification of building products that people truly use and enjoy.
            Witnessing the impact of my work on users' lives is what inspires me
            to push the boundaries and consistently strive for excellence.
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
