import React from "react";
import { Budgety, Ecommerce, Minitodo, Marriagecoaching } from "../assets";
import { AiOutlineRight, AiTwotoneApi } from "react-icons/ai";
import {
  DiGithubBadge,
  DiJsBadge,
  DiReact,
  DiCss3,
  DiHtml5,
  DiGit,
} from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

const Works = () => {
  return (
    <section className="font-Ubuntu p-6">
      <div className="flex flex-col xl:ml-10 md:pt-8 pt-24 lg:px-10 p-6 w-full ">
        <div className="font-Ubuntu w-full">
          <h4 className="text-4xl border-b-2 w-5/6 border-orange  text-white md:text-6xl  py-3">
            My Portfolio
          </h4>

          <div className="my-6 flex flex-col lg:px-10 w-full text-white ">
            <div className="flex  flex-col items-center lg:flex-row my-3 ">
              <div className="w-full lg:w-2/5  bg-navyy    shadow-sm shadow-off-white my-2 mx-4 rounded-lg  h-88 ">
                <div className="border-l-2 h-1/4 border-orange m-2 w-full">
                  <h4 className="text-xl p-1 font-extrabold">Mini ToDo app</h4>
                  <p className="text-gray p-1">
                     A mini todo app for recording tasks
                  </p>
                </div>
                <img
                  src={Minitodo}
                  alt="A Mini To Do  web app"
                  className="w-full h-1/2"
                />
                <div className="flex  justify-between mt-1">
                  <div className=" ">
                    <ul className="flex md:flex-row flex-col p-2">
                      <li className="flex justify-center  mx-1 my-1 text-sm p-0.5 w-6 bg-orange  rounded-md  text-center">
                        <DiHtml5 />
                      </li>
                      <li className="flex justify-center mx-1 my-1 p-0.5 w-6 bg-orange  rounded-md  text-center">
                        <DiCss3 />
                      </li>

                      <li className="flex justify-center mx-1 my-1 p-0.5 w-6 lg:w-10 bg-orange text-xs rounded-md  text-center">
                        <DiJsBadge />
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col p-2">
                    <a
                      href="https://github.com/oigoga/Mini-Todo"
                      className="flex bg-orange px-1 justify-between rounded-md text-center w-28 my-1"
                    >
                      View Code
                      <AiOutlineRight className="self-center" />
                    </a>
                    <a
                      href="https://minitodooigoga.netlify.app/"
                      className="flex bg-orange px-1 justify-between rounded-md  w-28 my-1"
                    >
                      {" "}
                      Live Site
                      <AiOutlineRight className="self-center" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-2/5 bg-navyy shadow-sm shadow-off-white my-2 mx-4 rounded-lg  h-88  ">
                <div className="border-l-2 h-1/4 border-orange m-2 w-full">
                  <h4 className="text-xl p-1 font-extrabold">Budgety</h4>
                  <p className="text-gray p-1">Budget Tracking Application</p>
                </div>
                <img
                  src={Budgety}
                  alt="Budget tracking and management application"
                  className="w-full h-1/2"
                />
                <div className="flex justify-between mt-3">
                  <div className=" ">
                    <ul className="flex md:flex-row flex-col p-2">
                      <li className="flex justify-center  mx-1 my-1 text-sm p-0.5 w-6 bg-orange  rounded-md  text-center">
                        <DiHtml5 />
                      </li>
                      <li className="flex justify-center mx-1 my-1 p-0.5 w-6 bg-orange  rounded-md  text-center">
                        <DiCss3 />
                      </li>

                      <li className="flex justify-center mx-1 my-1 p-0.5 w-6 lg:w-10 bg-orange text-xs rounded-md  text-center">
                        <DiJsBadge />
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col  p-2">
                    <a
                      href="https://github.com/oigoga/Budgety"
                      className="flex bg-orange px-1 justify-between rounded-md text-center w-28 my-1"
                    >
                      View Code
                      <AiOutlineRight className="self-center" />
                    </a>
                    <a
                      href="https://oigoga.github.io/Budgety/"
                      className="flex bg-orange px-1 justify-between rounded-md  w-28 my-1"
                    >
                      {" "}
                      Live Site
                      <AiOutlineRight className="self-center" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  flex-col items-center lg:flex-row my-3">
              <div className="w-full lg:w-2/5 bg-navyy shadow-sm shadow-off-white my-2 mx-4  rounded-lg  h-88  ">
                <div className="border-l-2 h-1/4 border-orange m-2 w-full">
                  <h4 className="text-xl p-1 font-extrabold">
                    Mock Ecommerce Website
                  </h4>
                  <p className="text-gray p-1">
                    A mock ecommerce website with API
                  </p>
                </div>
                <img
                  src={Ecommerce}
                  alt="Mock ecommerce website"
                  className="w-full h-1/2"
                />
                <div className="flex justify-between mt-3">
                  <div className=" ">
                    <ul className="flex md:flex-row flex-col p-2">
                      <li className="flex justify-center  mx-1 my-1 text-sm p-0.5 w-6 bg-orange  rounded-md  text-center">
                        <AiTwotoneApi />
                      </li>
                      <li className="flex justify-center mx-1 my-1 p-0.5 w-6 bg-orange  rounded-md  text-center">
                        <DiCss3 />
                      </li>

                      <li className="flex justify-center mx-1 my-1 p-0.5 w-6 lg:w-10 bg-orange text-xs rounded-md  text-center">
                        <DiJsBadge />
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col p-2">
                    <a
                      href="https://github.com/oigoga/Ecommerce-website"
                      className="flex bg-orange px-1 justify-between rounded-md text-center w-28 my-1"
                    >
                      View Code
                      <AiOutlineRight className="self-center" />
                    </a>
                    <a
                      href="https://oigoga.github.io/Ecommerce-website/"
                      className="flex bg-orange px-1 justify-between rounded-md  w-28 my-1"
                    >
                      {" "}
                      Live Site
                      <AiOutlineRight className="self-center" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-2/5 bg-navyy shadow-sm shadow-off-white my-2 mx-4 rounded-lg  h-88  ">
                <div className="border-l-2 h-1/4 border-orange m-2 w-full">
                  <h4 className="text-xl p-1 font-extrabold">
                    Marriage Coaching Webiste
                  </h4>
                  <p className="text-gray p-1">
                    A mock marriage coaching website
                  </p>
                </div>
                <img
                  src={Marriagecoaching}
                  alt="Dicegame web app"
                  className="w-full h-1/2"
                />
                <div className="flex justify-between lg:mt-3">
                  <div className=" ">
                    <ul className="flex md:flex-row flex-col p-2">
                      <li className="flex justify-center  mx-1 my-1 text-sm p-0.5 w-6 bg-orange  rounded-md  text-center">
                        <DiHtml5 />
                      </li>

                      <li className="flex justify-center mx-1 my-1 p-0.5 w-6 lg:w-10 bg-orange text-xs rounded-md  text-center">
                        <SiTailwindcss />
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col p-3">
                    <a
                      href="https://github.com/oigoga/Marriage-Coaching-Website"
                      className="flex bg-orange px-1 justify-between rounded-md text-center w-28 my-1"
                    >
                      View Code
                      <AiOutlineRight className="self-center" />
                    </a>
                    <a
                      href="https://oigoga.github.io/Marriage-Coaching-Website/"
                      className="flex bg-orange px-1 justify-between rounded-md  w-28 my-1"
                    >
                      {" "}
                      Live Site
                      <AiOutlineRight className="self-center" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
