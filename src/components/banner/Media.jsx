import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              
              <Link
                      to={
                        "https://x.com/Rupesh_Raj2"
                      }
                    >
                      {" "}
                      <FaXTwitter />
                      
                    </Link>
            </span>
            <span className="bannerIcon">
              
              <Link
                      to={
                        "https://www.linkedin.com/in/rupesh-kumar-b340b9292/"
                      }
                    >
                      {" "}
              <FaLinkedinIn />
                      
                    </Link>

            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media