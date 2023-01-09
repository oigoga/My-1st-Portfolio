import React from "react";
import { DiGithubBadge, DiJsBadge, DiReact, DiCss3, DiHtml5, DiGit } from "react-icons/di";

const About = () => {
  return (
    <section id="about" className="font-Ubuntu p-6">
      <div className=" md:w-2/3 flex  flex-col md:mt-10 pb-20 xl:ml-20 md:pt-8 pt-24 lg:pl-10 p-6">
        <h4 className="text-4xl border-b-2 text-white md:text-6xl border-b-orange py-3">
          ABOUT ME
        </h4>
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
        <div>
        <h4 className="text-4xl border-b-2 text-white md:text-6xl border-b-orange py-3">
         SKILLS
        </h4>
        <ul className="my-3 text-white">
        <li className="flex flex-col item">
              <div className="bg-navy shadow-md w-16 text-xs rounded-md flex items-center flex-col h-16 justify-center">
              <div className="  ">
               <DiJsBadge className="h-full"/>
              </div>
              <div className="">
                <span>Javascript</span>
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



