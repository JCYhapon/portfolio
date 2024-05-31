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
    <section className="xl:px-[35px] lg:px-[35px] px-[10px]">
      <div className=" mt-[1rem]">
        <h1 className="xl:text-[55px] lg:text-[45px] xs:text-[25px] text-[35px]">
          Skills and Technologies
        </h1>
        <p className="xl:text-[20px] lg:text-[18px]  mx-auto font-light text-gray-300">
          These are the main languages and technologies I use for website
          development.
        </p>
      </div>
      <div className="skills xl:flex grid xs:grid-cols-4 lg:grid-cols-6 xl:gap-[5rem] lg:gap-[3rem] gap-8 flex-wrap xl:w-[80%] mx-auto mt-[3rem] xl:mt-[3rem] lg:mt-[4rem]">
        <div className="flex flex-col items-center gap-2  hover:underline">
          <img
            src={Javascript}
            alt="Javascript logo"
            className="xl:w-[100px] lg:w-[80px] xs:w-[50px]"
          />
          <span className="xl:text-[18px] lg:text-[16px] xs:text-[13px]">
            JavaScript
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 hover:underline">
          <img
            src={Reactjs}
            alt="React logo"
            className="xl:w-[100px] lg:w-[80px] xs:w-[50px]"
          />
          <span className="xl:text-[18px] lg:text-[16px] xs:text-[13px]">
            React.js
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 hover:underline">
          <img
            src={Angular}
            alt="Angular Logo"
            className="xl:w-[100px] lg:w-[80px] xs:w-[50px]"
          />
          <span className="xl:text-[18px] lg:text-[16px] xs:text-[13px]">
            Angular
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 hover:underline">
          <img
            src={PHP}
            alt="PHP logo"
            className="xl:w-[100px] lg:w-[80px] xs:w-[50px]"
          />
          <span className="xl:text-[18px] lg:text-[16px] xs:text-[13px]">
            PHP
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 hover:underline">
          <img
            src={Laravel}
            alt="Laravel logo"
            className="xl:w-[100px] lg:w-[80px] xs:w-[50px]"
          />
          <span className="xl:text-[18px] lg:text-[16px]  xs:text-[13px]">
            Laravel
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 hover:underline">
          <img
            src={Tailwindcss}
            alt="Tailwindcss logo"
            className="xl:w-[100px]  lg:w-[80px] xs:w-[50px]"
          />
          <span className="xl:text-[18px] lg:text-[16px] xs:text-[13px]">
            TailwindCSS
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 hover:underline">
          <img
            src={Bootstrap}
            alt="Bootstrap logo"
            className="xl:w-[100px] lg:w-[80px] xs:w-[50px]"
          />
          <span className="xl:text-[18px] lg:text-[16px] xs:text-[13px]">
            Bootstrap
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 hover:underline">
          <img
            src={Wordpress}
            alt="Wordpress logo"
            className="xl:w-[100px] lg:w-[80px] xs:w-[50px]"
          />
          <span className="xl:text-[18px] lg:text-[16px] xs:text-[13px]">
            WordPress
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 hover:underline">
          <img
            src={Mysql}
            alt="Mysql logo"
            className="xl:w-[100px] lg:w-[80px] xs:w-[50px]"
          />
          <span className="xl:text-[18px] lg:text-[16px] xs:text-[13px]">
            MySQL
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 hover:underline">
          <img
            src={Firebase}
            alt="Firebase logo"
            className="xl:w-[100px] lg:w-[80px] xs:w-[50px]"
          />
          <span className="xl:text-[18px] lg:text-[16px] xs:text-[13px]">
            Firebase
          </span>
        </div>

        <div className="flex flex-col items-center gap-2 hover:underline">
          <img
            src={Git}
            alt="Git logo"
            className="xl:w-[100px] lg:w-[80px] xs:w-[50px]"
          />
          <span className="xl:text-[18px] lg:text-[16px] xs:text-[13px]">
            Git
          </span>
        </div>
        <div className="flex flex-col items-center gap-2 hover:underline">
          <img
            src={Github}
            alt="Github logo"
            className="xl:w-[100px] lg:w-[80px] xs:w-[50px]"
          />
          <span className="xl:text-[18px] lg:text-[16px] xs:text-[13px]">
            GitHub
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
