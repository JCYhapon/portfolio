import React from "react";
import { allprojects } from "../constants/index";
import { Link } from "react-router-dom";

const AllProjects = () => {
  return (
    <div className="xl:px-[15rem] lg:px-[10rem] md:px-[8rem] sm:px-[5rem] xs:px-[2rem] py-[3rem] min-h-screen text-[#efeee5]">
      <section className="flex justify-between items-center">
        <Link to="/home">
          <button className="hover:underline">Back to portfolio</button>
        </Link>
        <h1 className="text-[40px] font-bold">
          jcy<span className="text-[#64DD50]">.</span>
        </h1>
      </section>

      <section className="">
        <div className="mb-[4rem]">
          <h1 className="text-[3rem] mb-5 relative mt-[3rem]">
            PROJECTS
            <span className="absolute bottom-0 left-0 w-[20%] h-1 bg-[#64dd50]"></span>
          </h1>

          <p className="xl:w-[80%] xl:text-[18px] font-light">
            Here’s a collection of all the projects I’ve created using a variety
            of programming languages, spanning both frontend and backend
            development. Each project is a testament to my journey, showcasing
            the time and effort I’ve poured into ensuring they are
            user-friendly. Through these projects, you’ll get a glimpse of how
            my adventure in development began and evolved. Enjoy exploring the
            milestones of my coding odyssey!
          </p>
        </div>

        {/* MY PROJECTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
          {allprojects.map((project) => (
            <div key={project.id} className="">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-md mb-4 border"
              />
              <h2 className="text-[20px] font-bold mt-3">{project.title}</h2>
              <p className="mt-2 text-[#babec4] ">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full  py-[2px] px-[15px]  border mt-4"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-4">
                <a
                  href={project.liveSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-[6px] px-[25px] font-semibold"
                  id="viewSite"
                >
                  Live Site
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-[6px] px-[25px] font-semibold"
                  id="viewCode"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
