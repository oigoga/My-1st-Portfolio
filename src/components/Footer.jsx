import React from "react";

const Footer = () => {
  return (
    <div className="font-Ubuntu">
      <section className="md:mt-6  xl:ml-10 md:pt-8 pt-16 lg:pl-10 px-6 text-white ">
      <div className="w-3/4 h-0.5 mx-5 bg-orange"></div>
      <div className="flex flex-col justify-center items-center px-6">
       
        <div className="my-3">
          <p className="py-2">
            Do you have a question for me, want to collaborate with or employ
            me?
          </p>
          <p className="py-2">
            Reach out to{" "}
            <span className="text-orange underline">
              <a href="mailto:gogaelisabeth21@gmail.com">ME</a>
            </span>
          </p>
          <p className="my-2">
            Location: Ile-Ife Osun <br />
            &#40;Also Remote&#41;
          </p>
        </div>
        <div className="font-Pacifico text-lg flex text-center my-2">
          <p className="py-3">
            You don't stumble upon success or excellence. They are the natural
            results of consistency, discipline and hardwork.
            
          </p>
        </div>
        <div className="text-base flex justify-center bottom-0">
          <p className="font-extralight  text-opacity-5">
          Oigoga Aba &copy; 2023
          </p>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Footer;
