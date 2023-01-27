import React from 'react';
import { SiMedium, SiTwitter, SiLinkedin  } from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";

const Contact = () => {
  return (
    <div id='contact'>
      <div className="fixed flex bottom-0 w-0 z-70 justify-end flex-col left-5 ">
      <ul className="list-none -translate-x-(2.5) -translate-y-4">
        <li className="w-6 h-6 mb-2.5">
          <a href="https://github.com/oigoga" target="_blank">
          <DiGithubBadge className='w-full h-full fill-off-white'/>
          </a>
        </li>

        <li className="w-5 h-5 mb-2.5">
          <a href="https://www.linkedin.com/in/oigoga-aba-509aa117b/" target="_blank">
           <SiLinkedin className='w-full h-full fill-off-white'/>
          </a>
        </li>

        <li className="w-5 h-5 mb-2.5">
          <a href="https://twitter.com/oigoga_a" target="_blank">
           <SiTwitter className='w-full h-full fill-off-white'/>
          </a>
        </li>

        <li className="w-5 h-5 ">
          <a href="https://medium.com/@gogaelisabeth21" target="_blank">
           <SiMedium className='w-full h-full fill-off-white'/>
          </a>
        </li>
      </ul>
      <div className="h-28 w-1 bg-orange"></div>
    </div>
    <div className="right-5 h-full flex flex-col justify-end items-end fixed bottom-0 w-0 z-70 text-white ">
      <span className='h-4 w-28 flex items-center relative justify-start rotate-90 translate-x-0.5 translate-y-y origin-right overflow-hidden'>
        <a href="mailto:gogaelisabeth21@gmail.com" className='absolute '>Send an E-mail</a>
        <a className="translate-x-x translate-y-full" href="mailto:gogaelisabeth21@gmail.com">Send an E-mail</a>
      </span>
      <div className="h-28 w-1 bg-orange"></div>
    </div>
    </div>
  )
}

export default Contact
