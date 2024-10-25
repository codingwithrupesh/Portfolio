import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';
import resume from '../../assets/images/Rupesh_CV.pdf'

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", "UI Designer.","Programmer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">RUPESH</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I use animation as a third dimension to simplify experiences, guiding users through each interaction. I'm not adding motion just to enhance visuals, but to do so in meaningful ways.
        </p>
        <div className=' flex justify-start '>
          <button className='bg-slate-400 px-6 py-2 rounded'>
              <a href={resume} download='resume'>Download</a>
          </button>
        </div>
      </div>

     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner