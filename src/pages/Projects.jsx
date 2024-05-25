import React from "react";
import "./Projects.css";
import KapampanganHistory from "../assets/Projects/kapampangan-history.png";
import SbaojtPortal from "../assets/Projects/sbaojt-portal.png";

const Projects = () => {
  return (
    <section className="px-[35px]">
      <div className=" mt-[1rem]">
        <div className="flex justify-between items-center">
          <h1 className="text-[55px]">Featured Projects</h1>
          <button
            className="flex align-items-center items-center bg-[#64DD50] text-black p-1 w-[8rem] justify-center gap-1 rounded-lg font-semibold"
            id="view-projects"
          >
            View All Projects
          </button>
        </div>

        <p className="text-[20px] mx-auto font-light text-gray-300">
          These are the projects I've crafted with the mentioned technologies,
          and I find joy in working with them.
        </p>
      </div>

      <div className="mt-6 flex justify-between">
        {/* PROJECT 1 */}
        <div className="w-[400px] flex flex-col">
          <img
            src={SbaojtPortal}
            alt=""
            className="border w-auto h-[200px] rounded"
          />
          <h2 className="text-[20px] font-bold mt-3" id="title">
            SBA-OJT Portal
          </h2>
          <p className="details mt-2 text-[#babec4]">
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
        <div className="w-[400px] flex flex-col">
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
        <div className="w-[400px] flex flex-col">
          <img src="" alt="" className="border w-auto h-[200px] rounded" />
          <h2 className="text-[20px] font-bold mt-3" id="title">
            Event Tracker
          </h2>
          <p className="details mt-2 text-[#babec4]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex gap-2 mt-3">
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
