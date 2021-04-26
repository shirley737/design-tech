import React from "react";
import "./Nav.scss";
import { useHistory } from "react-router-dom";

function Nav() {
  const history = useHistory();
  return (
    <div
      className="nav"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="nav-text">Design.Tech</div>
    </div>
  );
}

export default Nav;
