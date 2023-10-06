import React from "react";
import communication from "../../Assets/SoftSkills/communication.png";
import timemanagement from "../../Assets/SoftSkills/timemanagement.png";
import leadership from "../../Assets/SoftSkills/leadership.png";
import growthmindset from "../../Assets/SoftSkills/growthmindset.png";
import empathy from "../../Assets/SoftSkills/empathy.png";
import creativity from "../../Assets/SoftSkills/creativity.png";
import workethic from "../../Assets/SoftSkills/workethic.png";
import teamwork from "../../Assets/SoftSkills/teamwork.png";
import adapt from "../../Assets/SoftSkills/adapt.png";
import curiosity from "../../Assets/SoftSkills/curiosity.png";
import professionalism from "../../Assets/SoftSkills/professionalism.png";

const SoftSkills = () => {
  return (
    <div name="softskills" className="w-full h-50% bg-[#0a192f] text-white">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-green-600 ">
            Professional Skills
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={creativity} alt="creative" />
            <p className="my-4">Creativity</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={communication}
              alt="communication"
            />
            <p className="my-4">Communication</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={timemanagement} alt="time" />
            <p className="my-4">Time Management</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={leadership} alt="leader" />

            <p className="my-4">LeaderShip</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={growthmindset} alt="mind" />
            <p className="my-4">Growth Mindset</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={empathy} alt="empathy" />
            <p className="my-4">Empathy</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={workethic} alt="ReactJs icon" />
            <p className="my-4">Work Ethic</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={adapt} alt="adapt" />
            <p className="my-4">Adaptability</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={teamwork} alt="team" />
            <p className="my-4">TeamWork</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={curiosity} alt="Cur" />
            <p className="my-4">Curiosity</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={professionalism} alt="prof" />
            <p className="my-4">Professionalism</p>
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

export default SoftSkills;
