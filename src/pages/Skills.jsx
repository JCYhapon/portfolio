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
    <section className="px-[35px]">
      <div className=" mt-[1rem]">
        <h1 className="text-[55px]">Skills and Technologies</h1>
        <p className="   text-[20px] mx-auto font-light text-gray-300">
          These are the main languages and technologies I use for website
          development.
        </p>
      </div>
      <div className="skills flex gap-[5rem] flex-wrap w-[80%] mx-auto mt-[3rem]">
        <div className="flex flex-col items-center gap-2  hover:underline">
          <img src={Javascript} alt="Javascript logo" />
          <span>JavaScript</span>
        </div>

        <div className="flex flex-col items-center gap-2 hover:underline">
          <img src={Reactjs} alt="React logo" />
          <span>React.js</span>
        </div>

        <div className="flex flex-col items-center gap-2 hover:underline">
          <img src={Angular} alt="Angular Logo" />
          <span>Angular</span>
        </div>

        <div className="flex flex-col items-center gap-2 hover:underline">
          <img src={PHP} alt="PHP logo" />
          <span>PHP</span>
        </div>

        <div className="flex flex-col items-center gap-2 hover:underline">
          <img src={Laravel} alt="Laravel logo" />
          <span>Laravel</span>
        </div>

        <div className="flex flex-col items-center gap-2 hover:underline">
          <img src={Tailwindcss} alt="Tailwindcss logo" />
          <span>TailwindCSS</span>
        </div>

        <div className="flex flex-col items-center gap-2 hover:underline">
          <img src={Bootstrap} alt="Bootstrap logo" />
          <span>Bootstrap</span>
        </div>

        <div className="flex flex-col items-center gap-2 hover:underline">
          <img src={Wordpress} alt="Wordpress logo" />
          <span>WordPress</span>
        </div>

        <div className="flex flex-col items-center gap-2 hover:underline">
          <img src={Mysql} alt="Mysql logo" />
          <span>MySQL</span>
        </div>

        <div className="flex flex-col items-center gap-2 hover:underline">
          <img src={Firebase} alt="Firebase logo" />
          <span>Firebase</span>
        </div>

        <div className="flex flex-col items-center gap-2 hover:underline">
          <img src={Git} alt="Git logo" />
          <span>Git</span>
        </div>
        <div className="flex flex-col items-center gap-2 hover:underline">
          <img src={Github} alt="Github logo" />
          <span>GitHub</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
