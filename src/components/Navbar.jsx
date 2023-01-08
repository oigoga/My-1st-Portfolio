import React from "react";
import { useState } from "react";
import { close, menu } from "../assets/index";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <nav
        className="w-full flex justify-between   text-white
       "
      >
        <div className="w-full flex justify-between     mx-5 py-2">
          <h3 className="font-Rubik_dirt  text-base md:text-4xl xxl:text-5xl">
            <span className="text-orange">G</span>OGA
          </h3>
          <div className="flex   text-2xl font-Ubuntu">
            <button className="flex z-10  py-2">
              <p className={`${toggle?"hidden":"inline"} text-base  md:text-2xl xxl:text4-xl mx-2 hover:underline`}>MENU</p>
              <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-[20px] h-[30px] md:w-[30px] md:h-[30px] xxl:h-[40px] xxl:w-[40px] object-contain hover:scale-110  "
                onClick={() => setToggle((prev) => !prev)}
              />
            </button>

            {toggle ? (
              <div className="flex flex-col ">
                <div className="justify-center items-center bg-navy bg-opacity-90 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-0 outline-none focus:outline-none ease-linear transition-all duration-300   ">
                  <ul className="flex flex-col  items-center ">
                    <div>
                      {navLinks.map((nav, index) => (
                        <li key={nav.id} className="text-center my-4">
                          <a href="#"> {nav.title}</a>
                          <hr
                        style={{
                          background: "gray-light",
                          color: "#ff8906",
                          borderColor: "gray-light",
                          height: "1px",
                          width:"300px",
                          marginTop:"16px",
                          marginBottom:"16px",
                          
                        }}
                      />
                        </li>
                        
                      ))
                      
                  }
                      
                    </div>
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
