import React from "react";
import css from "../../Assets/css.png";
import github from "../../Assets/github.png";
import html from "../../Assets/html.png";
import javascript from "../../Assets/javascript.png";
import node from "../../Assets/node.png";
import tailwind from "../../Assets/tailwind.png";
import Typescript from "../../Assets/Typescript.png";
import nextjs from "../../Assets/nextjs.png"
import react from "../../Assets/react.png"
import Sql_logo from "../../Assets/Sql_logo.png"
import C from "../../Assets/C.png"
import Python from "../../Assets/Python.png"
const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-white">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
        <p className='text-4xl font-bold inline border-b-4 border-green-600 '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={html} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={css} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={github} alt="GITHUB icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={javascript} alt="JavaScript icon" />
            <p className="my-4">JavaScript</p>
          </div>
          {/* <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={node} alt="NodeJS icon" />
            <p className="my-4">NodeJS</p>
          </div> */}
          {/* <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={nextjs} alt="NextJs icon" />
            <p className="my-4">NextJs</p>
          </div> */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={react} alt="ReactJs icon" />
            <p className="my-4">ReactJs</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={tailwind} alt="Tailwindss icon" />
            <p className="my-4">Tailwindcss</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Sql_logo} alt="SQL icon" />
            <p className="my-4">MySQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={C} alt="C++ icon" />
            <p className="my-4">C++</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Python} alt="C++ icon" />
            <p className="my-4">Python</p>
          </div>
          {/* <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Typescript} alt="TypeScript icon" />
            <p className="my-4">TypeScript</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
