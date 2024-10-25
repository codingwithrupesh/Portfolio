import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logoImg } from "../../assets/index";
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-auto sm:h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      
      {/* Logo Section */}
      <div className='h-16 w-[150px] sm:h-full sm:w-[200px] flex items-center'>
        {/* Uncomment if you want to use an image logo */}
        {/* <img className='h-full w-full object-cover rounded-3xl' src={logoImg} alt="logo" /> */}
        <span className='text-4xl font-bold text-white'>Rupesh</span>
      </div>

      {/* Navigation Links for large screens */}
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Icon */}
      <div className="inline-flex mdl:hidden">
        <button onClick={() => setShowMenu(!showMenu)} className="text-white">
          {showMenu ? <MdClose size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="absolute top-16 left-0 w-full h-screen bg-bodyColor flex flex-col items-center gap-8">
          <ul className="flex flex-col items-center gap-6">
            {navLinksdata.map(({ _id, title, link }) => (
              <li
                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                key={_id}
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setShowMenu(false)}  // Close the menu on click
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="https://facebook.com" className="text-gray-400 hover:text-white">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
