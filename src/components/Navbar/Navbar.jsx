import React from "react";

const Navbar = (props) => {
  return (
    <>
      <nav>
        <ul>
          <li>{props.navbar[0]}</li>
          <li>{props.navbar[1]}</li>
          <li>{props.navbar[2]}</li>
          <li>{props.navbar[3]}</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
