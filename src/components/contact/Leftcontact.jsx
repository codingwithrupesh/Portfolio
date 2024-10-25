import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { pageWhite } from '../../assets';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={pageWhite}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Rupesh Kumar</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Role in the software development process by handling both front-end and back-end aspects of a project. They possess a wide range of skills, including proficiency in programming languages, frameworks, and databases.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 7050869828</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">kumarrupeshraj2003@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
          <Link to={"https://x.com/Rupesh_Raj2"}>
              {" "}
              <FaXTwitter />
            </Link>          

          </span>
          <span className="bannerIcon">

          <Link to={"https://www.linkedin.com/in/rupesh-kumar-b340b9292/"}>
              {" "}
              <FaLinkedinIn />
            </Link>
            
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft