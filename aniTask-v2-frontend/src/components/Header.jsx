import "./Header.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById("navBar");
      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // empty dependency so runs once on mount

  return (
    <>
      <div id="navBar">
        <div id="navLogo">
          <p id="logo">ANI-TASK-V2</p>
        </div>
        <div
          className="hamburger"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div id="navContentDiv">
          <ul id="navContent">
            <li className="navContents">
              <NavLink to="/">HOME</NavLink>
            </li>
            <li className="navContents">
              <NavLink to="/task-manager">TASK MANAGER</NavLink>
            </li>
            <li className="navContents">
              <NavLink to="/about">ABOUT DEVELOPER</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul className="sidebar-links">
          <NavLink to="/" className="navContents">
            HOME
          </NavLink>
          <NavLink to="/task-manager" className="navContents">
            TASK MANAGER
          </NavLink>
          <NavLink to="/about" className="navContents">
            ABOUT DEVELOPER
          </NavLink>
        </ul>
      </div>

      {isSidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)} />
      )}
    </>
  );
};
