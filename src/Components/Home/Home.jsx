import React from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f]" name="home">
      {/* Contaner */}
      <div className="max-w-[1000px] mx-auto flex px-8 flex flex-col justify-center h-full">
        <h1 className="text-[#94a3b8]"> 👋 Hello!, my name is</h1>
        <h1 className="text-[#ccd6f6] text-4xl sm:text-7xl font-bold ">David Tsanava</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'am a front-end(React) Developer</h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          A passionate front-end(React) developer with a love for creating delightful
          user experiences. I specialize in building interactive and responsive
          web applications using the power of React.js.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py=3 my-2 flex items-center hover:bg-gray-600 hover:border-gray-500  ">
            View Work 
            <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
