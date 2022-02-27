import React from "react";
import "./About.scss";
import { useHistory } from "react-router-dom";
import graph from "../images/dt.png";

function About() {
  const history = useHistory();
  return (
    <div
      className="intro"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="about-title">👋 Welcome! </div>
      <div className="introContent">
        <div className="textbox">
          <div className="answer">
            {" "}
            Design technologists (also known as UX engineers, UI engineers,
            prototypers, and more) live at the intersection between designers
            and developers, with both programming and crafting skills.
            Specifically, they build prototypes for user testings, create
            internal tools to boost efficiency, and explore advanced
            technologies by building proofs-of-concept.{" "}
          </div>
          <div className="answer">
            Founded in March 2021, The Design Tech Club is a professional
            community full of design and technology hybrid people. Through
            networking, career and social events, our goal is to enable people
            to make meaningful connections across various companies and to form
            a strong community for design and tech lovers. The Design Tech Club
            will be one year old in March 2022!
            <div className="answer">
              <span>Are you a design tech enthusiast?</span>{" "}
              <span className="linktext">
                <a href="https://forms.gle/Vpjq9CLsCN3vJA2P8" target="_blank">
                  Don't hesitate to join us now!!
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="graph">
          <img className="graph" src={graph} />
        </div>
      </div>
    </div>
  );
}

export default About;
