import React from "react";
import {
  Angular,
  Bootstrap,
  Firebase,
  Git,
  Github,
  Javascript,
  Laravel,
  Mysql,
  PHP,
  Reactjs,
  Tailwindcss,
  Wordpress,
} from "../assets/Skills";

const Skills = () => {
  return (
    <section className="lg:px-[35px] px-[10px]">
      <div className=" mt-[1rem]">
        <h1 className="lg:text-[55px] text-[25px]">Skills and Technologies</h1>
        <p className="lg:text-[20px]  mx-auto font-light text-gray-300">
          These are the main languages and technologies I use for website
          development.
        </p>
      </div>
      <div className="skills lg:flex grid grid-cols-4 lg:gap-[5rem] gap-8 flex-wrap lg:w-[80%] mx-auto mt-[3rem]">
        <div className="flex flex-col items-center gap-2  hover:underline">
          <img
            src={Javascript}
            alt="Javascript logo"
            className="lg:w-[100px] xs:w-[50px]"
          />
          <span className="lg:text-[18px] xs:text-[13px]">JavaScript</span>
        </div>

        <div className="flex flex-col items-center gap-2 hover:underline">
          <img
            src={Reactjs}
            alt="React logo"
            className="lg:w-[100px] xs:w-[50px]"
          />
          <span className="lg:text-[18px] xs:text-[13px]">React.js</span>
        </div>

        <div className="flex flex-col items-center gap-2 hover:underline">
          <img
            src={Angular}
            alt="Angular Logo"
            className="lg:w-[100px] xs:w-[50px]"
          />
          <span className="lg:text-[18px] xs:text-[13px]">Angular</span>
        </div>

        <div className="flex flex-col items-center gap-2 hover:underline">
          <img src={PHP} alt="PHP logo" className="lg:w-[100px] xs:w-[50px]" />
          <span className="lg:text-[18px] xs:text-[13px]">PHP</span>
        </div>

        <div className="flex flex-col items-center gap-2 hover:underline">
          <img
            src={Laravel}
            alt="Laravel logo"
            className="lg:w-[100px] xs:w-[50px]"
          />
          <span className="lg:text-[18px] xs:text-[13px]">Laravel</span>
        </div>

        <div className="flex flex-col items-center gap-2 hover:underline">
          <img
            src={Tailwindcss}
            alt="Tailwindcss logo"
            className="lg:w-[100px] xs:w-[50px]"
          />
          <span className="lg:text-[18px] xs:text-[13px]">TailwindCSS</span>
        </div>

        <div className="flex flex-col items-center gap-2 hover:underline">
          <img
            src={Bootstrap}
            alt="Bootstrap logo"
            className="lg:w-[100px] xs:w-[50px]"
          />
          <span className="lg:text-[18px] xs:text-[13px]">Bootstrap</span>
        </div>

        <div className="flex flex-col items-center gap-2 hover:underline">
          <img
            src={Wordpress}
            alt="Wordpress logo"
            className="lg:w-[100px] xs:w-[50px]"
          />
          <span className="lg:text-[18px] xs:text-[13px]">WordPress</span>
        </div>

        <div className="flex flex-col items-center gap-2 hover:underline">
          <img
            src={Mysql}
            alt="Mysql logo"
            className="lg:w-[100px] xs:w-[50px]"
          />
          <span className="lg:text-[18px] xs:text-[13px]">MySQL</span>
        </div>

        <div className="flex flex-col items-center gap-2 hover:underline">
          <img
            src={Firebase}
            alt="Firebase logo"
            className="lg:w-[100px] xs:w-[50px]"
          />
          <span className="lg:text-[18px] xs:text-[13px]">Firebase</span>
        </div>

        <div className="flex flex-col items-center gap-2 hover:underline">
          <img src={Git} alt="Git logo" className="lg:w-[100px] xs:w-[50px]" />
          <span className="lg:text-[18px] xs:text-[13px]">Git</span>
        </div>
        <div className="flex flex-col items-center gap-2 hover:underline">
          <img
            src={Github}
            alt="Github logo"
            className="lg:w-[100px] xs:w-[50px]"
          />
          <span className="lg:text-[18px] xs:text-[13px]">GitHub</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
