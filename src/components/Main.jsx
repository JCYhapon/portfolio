import React from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

const Main = () => {
  return (
    <section className=" min-h-screen bg-[#1B2127] py-6 px-12 text-[#efeee5]">
      {/* HEADER */}
      <div>
        <Header />
      </div>

      <div className="mt-[5rem] flex w-full h-[75vh] ">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="w-[80%] border border-[#6E7681] rounded-md">
          MAIN CONTENT HERE
        </div>
      </div>
    </section>
  );
};

export default Main;
