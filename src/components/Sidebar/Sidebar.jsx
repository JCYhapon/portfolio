import React from "react";
import profile from "../../assets/profile.png";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="flex xl:flex-col lg:flex-col md:flex-row xs:flex-col align-items-center items-center xl:gap-0 lg:gap-0 xs:gap-0 md:gap-[5rem]">
      <div>
        <img
          src={profile}
          alt=""
          className="rounded-full border border-gray-500 flex justify-center align-items-center items-center"
          width={300}
        />
        <div className="xl:mb-[3rem] lg:mb-8 mb-10">
          <h1 className="xl:text-[32px] lg:text-[30px] md:text-[35px] text-[35px] font-bold text-[#efeee5]">
            John Carlo Yhapon
          </h1>
          <span className="text-[18px] font-light text-gray-500">
            Frontend Developer
          </span>
        </div>
      </div>
      <div className="details flex xl:flex-col lg:flex-col xs:flex-col md:flex-row md:gap-[6rem] xl:gap-0 lg:gap-0 xs:gap-0 align-items-center">
        <div>
          <div className="flex flex-col gap-3 xl:mb-[5rem] lg:mb-[3rem] mb-[2rem]">
            <div className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "#6E7681", transform: "", msFilter: "" }}
              >
                <path d="m12 17 1-2V9.858c1.721-.447 3-2 3-3.858 0-2.206-1.794-4-4-4S8 3.794 8 6c0 1.858 1.279 3.411 3 3.858V15l1 2zM10 6c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2z"></path>
                <path d="m16.267 10.563-.533 1.928C18.325 13.207 20 14.584 20 16c0 1.892-3.285 4-8 4s-8-2.108-8-4c0-1.416 1.675-2.793 4.267-3.51l-.533-1.928C4.197 11.54 2 13.623 2 16c0 3.364 4.393 6 10 6s10-2.636 10-6c0-2.377-2.197-4.46-5.733-5.437z"></path>
              </svg>
              <span>Angeles City, Pampanga, PH</span>
            </div>

            <div className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "#6E7681", transform: "", msFilter: "" }}
              >
                <circle cx="4.983" cy="5.009" r="2.188"></circle>
                <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
              </svg>
              <a
                href="https://www.linkedin.com/in/jcyhapon/"
                className="hover:underline"
              >
                <span>linkedin.com/jcyhapon</span>
              </a>
            </div>

            <div className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "#6E7681", transform: "", msFilter: "" }}
              >
                <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path>
                <path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path>
              </svg>
              <a href="https://github.com/JCYhapon" className="hover:underline">
                <span>jcyhapon.github.io</span>
              </a>
            </div>
          </div>
          <div className="flex items-center gap-12 lg:mb-0 mb-4">
            <div
              className="flex align-items-center items-center bg-[#64DD50] text-black p-1 xl:text-[15px] lg:text-[13px] xl:w-[150px] lg:w-[130px] justify-center gap-1 rounded-lg font-semibold"
              id="resume-btn"
            >
              Download Resume
            </div>
            <div className="flex border-b-[3px] border-b-[#64DD50] ">
              <span className="">Let's talk</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "#efeee5" }}
              >
                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
