import React from "react";
import { Budgety, Ecommerce, Dicegame, Marriagecoaching } from "../assets";
import { AiOutlineRight } from "react-icons/ai";

const Works = () => {
  return (
    <section className="font-Ubuntu p-6">
      <div className="flex flex-col xl:ml-10 md:pt-8 pt-24 lg:px-10 p-6 w-full ">
        <div className="font-Ubuntu w-full">
          <h4 className="text-4xl border-b-2 w-5/6 border-orange  text-white md:text-6xl  py-3">
            My Portfolio
          </h4>

          <div className="my-6 flex flex-col px-10 w-full text-white ">
            <div className="flex  flex-col md:flex-row my-3 ">
              <div className="w-full md:w-2/5 bg-navyy shadow-sm shadow-off-white m-2 rounded-lg  h-88 mr-5 ">
                <div className="border-l-2 border-orange m-2 w-full">
                  <h4 className="text-xl p-1 font-extrabold">Dice game app</h4>
                  <p className="text-gray p-1">
                    Interesting Dice game app built with JavaScript
                  </p>
                </div>
                <img
                  src={Dicegame}
                  alt="Dicegame web app"
                  className="w-full h-1/2"
                />
                <div className="flex justify-between mt-3">
                  <div className=" ">
                    <ul className="flex p-3">
                      <li className="mx-1 bg-orange rounded-md w-20 text-center">
                        HTML5
                      </li>
                      <li className="mx-1 bg-orange rounded-md w-20 text-center">
                        CSS3
                      </li>

                      <li className="mx-1 bg-orange rounded-md w-20 text-center">
                        JS
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col p-2">
                    <a
                      href="https://github.com/oigoga/Dice-Game"
                      className="flex bg-orange px-1 justify-between rounded-md text-center w-28 my-1"
                    >
                      View Code
                      <AiOutlineRight className="self-center" />
                    </a>
                    <a
                      href="https://oigoga.github.io/Dice-Game/"
                      className="flex bg-orange px-1 justify-between rounded-md  w-28 my-1"
                    >
                      {" "}
                      Live Site
                      <AiOutlineRight className="self-center" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/5 bg-navyy shadow-sm shadow-off-white m-2 rounded-lg  h-88 mr-5 ">
                <div className="border-l-2 border-orange m-2 w-full">
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
                    <ul className="flex p-3">
                      <li className="mx-1 bg-orange rounded-md w-20 text-center">
                        HTML5
                      </li>
                      <li className="mx-1 bg-orange rounded-md w-20 text-center">
                        CSS3
                      </li>

                      <li className="mx-1 bg-orange rounded-md w-20 text-center">
                        JS
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col p-2">
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
            <div className="flex  flex-col md:flex-row my-3">
              <div className="w-full md:w-2/5 bg-navyy shadow-sm shadow-off-white m-2  rounded-lg  h-88 mr-5 ">
                <div className="border-l-2 border-orange m-2 w-full">
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
                    <ul className="flex p-3">
                      <li className="mx-1 bg-orange rounded-md w-20 text-center">
                        HTML5
                      </li>
                      <li className="mx-1 bg-orange rounded-md w-20 text-center">
                        CSS3
                      </li>

                      <li className="mx-1 bg-orange rounded-md w-20 text-center">
                        JS
                      </li>
                      <li className="mx-1 bg-orange rounded-md w-20 text-center">
                        API
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
              <div className="w-full md:w-2/5 bg-navyy shadow-sm shadow-off-white m-2 rounded-lg  h-88 mr-5 ">
                <div className="border-l-2 border-orange m-2 w-full">
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
                <div className="flex justify-between mt-3">
                  <div className=" ">
                    <ul className="flex p-3">
                      <li className="mx-1 bg-orange rounded-md w-20 text-center">
                        HTML5
                      </li>
                      <li className="mx-1 bg-orange rounded-md w-20 text-center">
                        TAILWIND
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col p-2">
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
