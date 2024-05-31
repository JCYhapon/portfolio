import React, { useState } from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import Overview from "../pages/Overview";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const Main = () => {
  const [selectedSection, setSelectedSection] = useState("Overview");

  const renderSection = () => {
    switch (selectedSection) {
      case "Overview":
        return <Overview />;
      case "Skills":
        return <Skills />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      default:
        return <Overview />;
    }
  };

  return (
    <section className="min-h-screen bg-[#1B2127] lg:py-6 xs:py-4 lg:px-12 xs:px-4 xl:px-12 md:px-16 text-[#efeee5]">
      {/* HEADER */}
      <div>
        <Header />
      </div>

      <div className="xl:mt-[4rem] lg:mt-[2rem] md:mt-[4rem] sm:mt-[4rem] xs:mt-[4rem] flex w-full xl:h-[43rem] lg:h-[42rem] xs:flex-col lg:flex-row gap-[2rem]">
        <div className="lg:w-[20%] mx-auto">
          <Sidebar />
        </div>
        <div className="lg:w-[80%] border border-[#6E7681] rounded-md">
          <Navbar
            navbar={["Overview", "Skills", "Projects", "Contact"]}
            setSelectedSection={setSelectedSection}
          />
          <div className="p-2">{renderSection()}</div>
        </div>
      </div>
    </section>
  );
};

export default Main;
