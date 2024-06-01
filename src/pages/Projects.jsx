import React from "react";
import "./Projects.css";
import KapampanganHistory from "../assets/Projects/kapampangan-history.png";
import SbaojtPortal from "../assets/Projects/sbaojt-portal.png";

const Projects = () => {
  return (
    <section className="xl:px-[35px] lg:px-[35px] px-[10px]">
      <div className="xl:flex lg:flex justify-between mt-[1rem]">
        <div className=" ">
          <h1 className="xl:text-[55px] lg:text-[45px] xs:text-[25px] text-[35px]">
            Featured Projects
          </h1>
          <p className="xl:text-[20px] lg:text-[18px] mx-auto font-light text-gray-300">
            These are the projects I've crafted with the mentioned technologies,
            and I find joy in working with them.
          </p>
        </div>

        <button
          className="flex xl:my-0 xl:mb-0 xs:mb-[3rem] xs:my-6 h-[45px] items-center bg-[#64DD50] text-black p-1 w-[8rem] justify-center gap-1 rounded-lg font-semibold"
          id="view-projects"
        >
          View All Projects
        </button>
      </div>

      <div className="xl:mt-6 flex xl:flex-row lg:flex-row xs:flex-col xs:gap-[3rem] lg:gap-6 xl:justify-between">
        {/* PROJECT 1 */}
        <div className="xl:w-[400px] flex flex-col ">
          <img
            src={SbaojtPortal}
            alt=""
            className="border xl:h-[200px] lg:h-[200px] md:h-[400px] rounded"
          />
          <div className="">
            <h2 className="text-[20px] font-bold mt-3" id="title">
              SBA-OJT Portal
            </h2>
            <p className="details mt-2 text-[#babec4] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-4 mt-3">
              <span className="rounded-full  py-[2px] px-[15px]  border ">
                Laravel
              </span>
              <span className="rounded-full  py-[2px] px-[15px]  border">
                TailwindCSS
              </span>
              <span className="rounded-full  py-[2px] px-[15px]  border">
                MySQL
              </span>
            </div>
          </div>
          <div className="flex gap-6 mt-3">
            <a href="https://sbaojt.online/">
              <button
                id="viewSite"
                className="py-[6px] px-[20px] font-semibold"
              >
                View live site
              </button>
            </a>
            <a href="">
              <button
                id="viewCode"
                className="py-[6px] px-[20px] font-semibold"
              >
                View Code
              </button>
            </a>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="xl:w-[400px] flex flex-col">
          <img
            src={KapampanganHistory}
            alt="Kapampangan History"
            className="border w-auto xl:h-[200px] lg:h-[200px] md:h-[400px] rounded"
          />
          <h2 className="text-[20px] font-bold mt-3" id="title">
            Kapampangan History
          </h2>
          <p className="details mt-2 text-[#babec4]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex gap-4 mt-3">
            <span className="rounded-full  py-[2px] px-[15px]  border ">
              Angular
            </span>
            <span className="rounded-full  py-[2px] px-[15px]  border">
              JavaScript
            </span>
            <span className="rounded-full  py-[2px] px-[15px]  border">
              Bootstrap
            </span>
          </div>
          <div className="flex gap-6 mt-3">
            <a href="">
              <button
                id="viewSite"
                className="py-[6px] px-[20px] font-semibold"
              >
                View live site
              </button>
            </a>
            <a href="">
              <button
                id="viewCode"
                className="py-[6px] px-[20px] font-semibold"
              >
                View Code
              </button>
            </a>
          </div>
        </div>

        {/* PROJECT 3 */}
        <div className="xl:w-[400px] flex flex-col">
          <img
            src={KapampanganHistory}
            alt=""
            className="border w-auto xl:h-[200px] lg:h-[200px] md:h-[400px] rounded"
          />
          <h2 className="text-[20px] font-bold mt-3" id="title">
            Event Tracker
          </h2>
          <p className="details mt-2 text-[#babec4]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex xl:gap-2 lg:gap-1 xs:gap-2 mt-3 flex-wrap">
            <span className="rounded-full  py-[2px] px-[15px] lg:px-[12px]  border">
              HTML/CSS
            </span>
            <span className="rounded-full  py-[2px] px-[15px] lg:px-[12px] border">
              JavaScript
            </span>
            <span className="rounded-full  py-[2px] px-[15px] lg:px-[12px] border">
              Google API
            </span>
          </div>
          <div className="flex gap-6 mt-3">
            <a href="">
              <button
                id="viewSite"
                className="py-[6px] px-[20px] font-semibold"
              >
                View live site
              </button>
            </a>
            <a href="">
              <button
                id="viewCode"
                className="py-[6px] px-[20px] font-semibold"
              >
                View Code
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
