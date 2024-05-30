import React from "react";

const Overview = () => {
  return (
    <section className="lg:px-[35px] px-[10px]">
      <div className=" mt-[1rem]">
        <h1 className="lg:text-[55px] text-[35px]">Hey there! 👋🏼</h1>
        <p className="lg:mt-[50px] mt-[25px] lg:text-[20px] mx-auto font-light text-gray-300">
          I'm Yhaps, a frontend developer on a mission to redefine online
          experiences one website at a time. With a keen eye for design and a
          passion for innovation, I pour my heart and soul into crafting dynamic
          digital worlds that not only meet but exceed the expectations of
          businesses and users alike.
        </p>
        <p className="mt-[20px] lg:text-[20px] mx-auto font-light text-gray-300">
          My journey in the world of web development is an adventure filled with
          endless possibilities. I thrive on the thrill of exploring diverse
          programming languages, each one offering its own unique set of tools
          and techniques to bring my ideas to life. From the elegant simplicity
          of HTML and CSS to the dynamic power of JavaScript and beyond, I
          relish the challenge of mastering new technologies and pushing the
          boundaries of what's possible on the web.
        </p>
      </div>

      <div className="lg:mt-[5rem] mt-[2rem] flex lg:gap-[12rem] gap-6">
        <div className="flex flex-col items-center">
          <span className="lg:text-[50px] text-[40px] text-[#64DD50]">+2</span>
          <span className="xs:text-[10px] lg:text-[16px]">
            Years of experience
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="lg:text-[50px] text-[40px] text-[#64DD50]">+10</span>
          <span className="xs:text-[10px] lg:text-[16px]">
            Build website projects
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="lg:text-[50px] text-[40px] text-[#64DD50]">+5</span>
          <span className="xs:text-[10px] lg:text-[16px]">Certifications</span>
        </div>
      </div>
    </section>
  );
};

export default Overview;
