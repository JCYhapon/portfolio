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
    <section className="min-h-screen bg-[#1B2127] lg:py-6 py-4 lg:px-12 px-4 text-[#efeee5]">
      {/* HEADER */}
      <div>
        <Header />
      </div>

      <div className="mt-[4rem] flex w-full lg:h-[75vh] xs:flex-col lg:flex-row gap-[2rem]">
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
