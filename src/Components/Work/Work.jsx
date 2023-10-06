import BMI from "../../Assets/BMI.png";
import Groupwork from "../../Assets/Groupwork.png";
import SQL from "../../Assets/SQL.png";
import OOP from "../../Assets/OOP.webp";
import Roman from "../../Assets/Roman.jpg";
import form from "../../Assets/form.png";
import investment_calculator from "../../Assets/investment_calculator.png"

import React from "react";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-50% text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-green-300">
            Work
          </p>
          <p className="py-6">//Check out some of my recent work</p>
        </div>

        {/* Grid Container */}
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-4w-64">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${BMI})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                BMI Calculator
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/datots/Bmi-Calculator"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 my-3 m-2 bg-white text-gray-700 text-bold text-lg">
                    Code
                  </button>
                </a>
                <a href="https://bmi-calculator-hb89k22t5-dato-ts-hotmailcom.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 my-3 m-2 bg-white text-gray-700 text-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${investment_calculator})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                BMI Calculator
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/datots/Investment_calculator"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 my-3 m-2 bg-white text-gray-700 text-bold text-lg">
                    Code
                  </button>
                </a>
                <a href="https://investment-calculator-xi.vercel.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 my-3 m-2 bg-white text-gray-700 text-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${form})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Dynamic Form
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/datots/Dynamic-Form"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 my-3 m-2 bg-white text-gray-700 text-bold text-lg">
                    Code
                  </button>
                </a>
                <a
                  href="https://dynamic-form-qu0rt4ip7-dato-ts-hotmailcom.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 my-3 m-2 bg-white text-gray-700 text-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Groupwork})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Group Work
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/datots/Team_Page" target="_blank">
                  <button className="text-center rounded-lg px-4 my-3 m-2 bg-white text-gray-700 text-bold text-lg">
                    Code
                  </button>
                </a>
                <a href="https://datots.github.io/Team_Page/" target="_blank">
                  <button className="text-center rounded-lg px-4 my-3 m-2 bg-white text-gray-700 text-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${SQL})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                SQL
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/datots/SQL-Homewor" target="_blank">
                  <button className="text-center rounded-lg px-4 my-3 m-2 bg-white text-gray-700 text-bold text-lg">
                    Code
                  </button>
                </a>
                {/* <a href="https://datots.github.io/Team_Page/" target="_blank">
                  <button className="text-center rounded-lg px-4 my-3 m-2 bg-white text-gray-700 text-bold text-lg">
                    Live
                  </button>
                </a> */}
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${OOP})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Team Work Project object-oriented principles C++
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/datots/OOP" target="_blank">
                  <button className="text-center rounded-lg px-4 my-3 m-2 bg-white text-gray-700 text-bold text-lg">
                    Code
                  </button>
                </a>
                {/* <a href="https://datots.github.io/Team_Page/" target="_blank">
                  <button className="text-center rounded-lg px-4 my-3 m-2 bg-white text-gray-700 text-bold text-lg">
                    Live
                  </button>
                </a> */}
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Roman})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                TeamWork Project Roman calculator made with Python
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/datots/Roman_Calculator"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 my-3 m-2 bg-white text-gray-700 text-bold text-lg">
                    Code
                  </button>
                </a>
                {/* <a href="https://datots.github.io/Team_Page/" target="_blank">
                  <button className="text-center rounded-lg px-4 my-3 m-2 bg-white text-gray-700 text-bold text-lg">
                    Live
                  </button>
                </a> */}
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1561731172-9d906d7b13bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80)`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Georgia
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/datots/saqartvelo" target="_blank">
                  <button className="text-center rounded-lg px-4 my-3 m-2 bg-white text-gray-700 text-bold text-lg">
                    Code
                  </button>
                </a>
                <a href="https://datots.github.io/saqartvelo/" target="_blank">
                  <button className="text-center rounded-lg px-4 my-3 m-2 bg-white text-gray-700 text-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(https://i.ibb.co/zF8dBWS/landing-page.png)`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Landing Page
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/datots/landing_page"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 my-3 m-2 bg-white text-gray-700 text-bold text-lg">
                    Code
                  </button>
                </a>
                <a
                  href="https://datots.github.io/landing_page/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 my-3 m-2 bg-white text-gray-700 text-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(https://i.ibb.co/YkgBVjP/front-page.jpg)`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Front Page
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/datots/front_page" target="_blank">
                  <button className="text-center rounded-lg px-4 my-3 m-2 bg-white text-gray-700 text-bold text-lg">
                    Code
                  </button>
                </a>
                <a href="https://datots.github.io/front_page/" target="_blank">
                  <button className="text-center rounded-lg px-4 my-3 m-2 bg-white text-gray-700 text-bold text-lg">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Second Item */}
      </div>
    </div>
  );
};

export default Work;
