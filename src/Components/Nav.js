import React from "react";
import "./Nav.scss";

function Nav() {
  return (
    <div
      className="nav"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div
        className="nav-text"
        onClick={() => {
          window.location = "/";
        }}
      >
        Design.Tech
      </div>
    </div>
  );
}

export default Nav;
