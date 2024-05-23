import React from "react";
import "./Projects.css";

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
    </section>
  );
};

export default Projects;
