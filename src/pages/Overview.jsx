import React from "react";

const Overview = () => {
  return (
    <section className="xl:px-[35px] lg:px-[35px] px-[10px]">
      <div className=" mt-[1rem]">
        <h1 className="xl:text-[55px] lg:text-[50px] text-[35px]">
          Hey there! 👋🏼
        </h1>
        <p className="xl:mt-[50px] mt-[25px] xl:text-[20px] lg:text-[20px] mx-auto font-light text-gray-300">
          I'm Yhaps, Web Developer with 3+ years of experience building responsive, high-performance WordPress websites and
          WooCommerce solutions. Proficient in Elementor Pro, Advanced Custom Fields, Laravel, PHP, and ReactJS. Proven
          ability to deliver polished, business-ready websites from concept to launch — on time and to spec.
        </p>
        <p className="mt-[20px] xl:text-[20px] lg:text-[20px] mx-auto font-light text-gray-300">
          My journey in the world of web development is an adventure filled with
          endless possibilities. I thrive on the thrill of exploring diverse
          programming languages, each one offering its own unique set of tools
          and techniques to bring my ideas to life. From the elegant simplicity
          of HTML and CSS to the dynamic power of JavaScript and beyond, I
          relish the challenge of mastering new technologies and pushing the
          boundaries of what's possible on the web.
        </p>
      </div>

      <div className="xl:mt-[5rem] lg:mt-[3rem] flex xl:gap-[12rem] lg:gap-[6rem] gap-6">
        <div className="flex flex-col items-center">
          <span className="xl:text-[50px] text-[40px] text-[#64DD50]">+3</span>
          <span className="xs:text-[10px] xl:text-[16px] lg:text-[16px]">
            Years of experience
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="xl:text-[50px] text-[40px] text-[#64DD50]">+40</span>
          <span className="xs:text-[10px] xl:text-[16px] lg:text-[16px]">
            Build website projects
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="xl:text-[50px] text-[40px] text-[#64DD50]">+5</span>
          <span className="xs:text-[10px] xl:text-[16px] lg:text-[16px]">
            Certifications
          </span>
        </div>
      </div>
    </section>
  );
};

export default Overview;
