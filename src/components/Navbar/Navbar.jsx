import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ navbar, setSelectedSection }) => {
  const [selectedItem, setSelectedItem] = useState("Overview");

  const handleClick = (item) => {
    setSelectedSection(item);
    setSelectedItem(item);
  };

  return (
    <nav className="w-full bg-[#0D1117] h-[5rem] rounded-t-md overflow-hidden">
      <ul id="navbar" className="flex lg:gap-[80px] lg:pl-[50px] gap-8 pl-4">
        {navbar.map((item) => (
          <li
            key={item}
            onClick={() => handleClick(item)}
            className={selectedItem === item ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
