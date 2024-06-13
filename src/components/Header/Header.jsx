import React from "react";
import "./Header.css";
import GithubIcon from "../../assets/Header/Github.svg";

const Header = (props) => {
  return (
    <header>
      <div className="flex justify-between items-center">
        <h1 className="text-[40px] font-bold">
          jcy<span className="text-[#64DD50]">.</span>
        </h1>
        <div>
          <a href="https://github.com/JCYhapon" target="_blank">
            <button
              className="flex align-items-center items-center justify-center gap-1"
              id="button"
            >
              <img src={GithubIcon} alt="Github Icon" />
              <span className="font-semibold">GitHub</span>
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
