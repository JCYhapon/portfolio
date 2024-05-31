import React from "react";
import "./Projects.css";
import KapampanganHistory from "../assets/Projects/kapampangan-history.png";
import SbaojtPortal from "../assets/Projects/sbaojt-portal.png";

const Projects = () => {
  return (
    <section className="lg:px-[35px] xs:px-[10px]">
      <div className="lg:flex justify-between mt-[1rem]">
        <div className=" ">
          <h1 className="lg:text-[55px] text-[25px]">Featured Projects</h1>
          <p className="lg:text-[20px] mx-auto font-light text-gray-300">
            These are the projects I've crafted with the mentioned technologies,
            and I find joy in working with them.
          </p>
        </div>

        <button
          className="flex lg:my-0 lg:mb-0 xs:mb-[3rem] xs:my-6 h-[45px] items-center bg-[#64DD50] text-black p-1 w-[8rem] justify-center gap-1 rounded-lg font-semibold"
          id="view-projects"
        >
          View All Projects
        </button>
      </div>

      <div className="mt-6 flex xs:flex-col xs:gap-[3rem] lg:flex-row lg:justify-between">
        {/* PROJECT 1 */}
        <div className="lg:w-[400px] flex flex-col ">
          <img src={SbaojtPortal} alt="" className="border h-[200px] rounded" />
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
          <div className="flex gap-6 mt-3">
            <button id="viewSite" className="py-[6px] px-[20px] font-semibold">
              View live site
            </button>
            <button id="viewCode" className="py-[6px] px-[20px] font-semibold">
              View Code
            </button>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="lg:w-[400px] flex flex-col">
          <img
            src={KapampanganHistory}
            alt="Kapampangan History"
            className="border w-auto h-[200px] rounded"
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
            <button id="viewSite" className="py-[6px] px-[20px] font-semibold">
              View live site
            </button>
            <button id="viewCode" className="py-[6px] px-[20px] font-semibold">
              View Code
            </button>
          </div>
        </div>

        {/* PROJECT 3 */}
        <div className="lg:w-[400px] flex flex-col">
          <img src="" alt="" className="border w-auto h-[200px] rounded" />
          <h2 className="text-[20px] font-bold mt-3" id="title">
            Event Tracker
          </h2>
          <p className="details mt-2 text-[#babec4]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex gap-2 mt-3 flex-wrap">
            <span className="rounded-full  py-[2px] px-[15px]  border ">
              HTML
            </span>
            <span className="rounded-full  py-[2px] px-[15px]  border">
              CSS
            </span>
            <span className="rounded-full  py-[2px] px-[15px]  border">
              JavaScript
            </span>
            <span className="rounded-full  py-[2px] px-[15px]  border">
              Google API
            </span>
          </div>
          <div className="flex gap-6 mt-3">
            <button id="viewSite" className="py-[6px] px-[20px] font-semibold">
              View live site
            </button>
            <button id="viewCode" className="py-[6px] px-[20px] font-semibold">
              View Code
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
