import React from 'react';
import { SiMedium, SiTwitter, SiLinkedin  } from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";

const Contact = () => {
  return (
    <div>
      <div className="fixed flex bottom-0 w-0 z-100 justify-end flex-col left-5 ">
      <ul className="list-none -translate-x-(2.5) -translate-y-4">
        <li className="w-6 h-6 mb-2.5">
          <a href="https://github.com/oigoga" target="_blank">
          <DiGithubBadge className='w-full h-full fill-off-white'/>
          </a>
        </li>

        <li class="w-5 h-5 mb-2.5">
          <a href="https://www.linkedin.com/in/usmahm/" target="_blank">
           <SiLinkedin className='w-full h-full fill-off-white'/>
          </a>
        </li>

        <li class="w-5 h-5 mb-2.5">
          <a href="https://twitter.com/usmahm" target="_blank">
           <SiTwitter className='w-full h-full fill-off-white'/>
          </a>
        </li>

        <li class="w-5 h-5 ">
          <a href="https://usmahm.hashnode.dev/" target="_blank">
           <SiMedium className='w-full h-full fill-off-white'/>
          </a>
        </li>
      </ul>
      <div className="h-28 w-1 bg-orange"></div>
    </div>
    </div>
  )
}

export default Contact
