import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-width-[1000px] w-full px-4 grid grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm David, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              💡 My journey into the world of web development started with a
              deep fascination for how the internet works. Over time, this
              curiosity transformed into a full-blown love for crafting digital
              solutions that make a real impact. 🌐 What drives me? It's the
              idea that every line of code I write has the potential to shape
              the way people interact with technology. I believe in the power of
              clean, efficient code to create seamless user experiences, and I
              strive for excellence in every project I undertake.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
