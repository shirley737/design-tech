import React, { useRef } from "react";
import "./Nav.scss";
import { useHistory } from "react-router-dom";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function Nav() {
  const history = useHistory();
  return (
    <div className="header">
      <div
        className="nav"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="nav-lefttext">Design Tech Club</div>
        <div>
          <span className="nav-righttext">People</span>
          <span className="nav-righttext">Newsletters</span>
          <span className="nav-righttext">Contact</span>
        </div>
      </div>
    </div>
  );
}

export default Nav;
