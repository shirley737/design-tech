import React from "react";
import "./About.scss";
import { useHistory } from "react-router-dom";

function About() {
  const history = useHistory();
  return (
    <div
      className="intro"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="about-title">About Us</div>
      <div className="introContent">
        <div className="textbox">
          <div className="title1"> Who are design technologists?</div>
          <div className="answer1">
            {" "}
            Design technologists (also known as UX engineers, UI engineers,
            prototypers, and more) live at the intersection between designers
            and developers. They are people with both front-end programming and
            crafting skills. Specifically, they build prototypes for user
            testings, create internal tools to boost efficiency, and explore
            advanced technologies by building proofs-of-concept.{" "}
          </div>
        </div>

        <div className="textbox">
          <div className="title2"> What is the Design Technology Club? </div>

          <div className="answer2">
            Founded in March 2021, The Design Tech Club is a professional
            community full of design and technology hybrid people. Through
            networking, career and social events, our goal is to enable people
            to make meaningful connections across various companies and to form
            a strong community for design and tech lovers. The Design Tech Club
            is almost one years old!
            <br />
            <br />
            <b>Interested in joining?</b> Please see the contact infomation
            below.{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
