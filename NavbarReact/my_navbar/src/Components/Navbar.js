import { useState } from "react";
import "./Navbar.css";
import { FiAlignCenter } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";

function Navbar() {
  const [showSidebar, setshowSidebar] = useState(false);

  const onClickFn = () => {
    console.log("clicked button");
    setshowSidebar((prev) => !prev);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={showSidebar ? "showSide" : "hideSide"}>
        <span className="logo">Amazon.in</span>
        <span className="links">
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
        </span>
      </div>
      <button id="icon" onClick={onClickFn}>
        <FiAlignCenter />
      </button>

      <div className="rightSide">
        <input type="text" placeholder="Search" />
        <button id="search">
          <BsSearch />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
