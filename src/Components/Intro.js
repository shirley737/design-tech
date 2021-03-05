import React from "react";
import "./Intro.scss";

function Intro() {
  return (
    <div className="intro">
      <div className="introContent">
        <div className="textbox1">
          <div className="title1"> Who are design technologists?</div>
          <div className="answer1">
            {" "}
            Living at the intersection of front-end technology and human-centric
            design, design technologists are powerful intermediaries between
            designers and developers. Although their responsibilities differ for
            different companies, design technologists' general duties include
            building prototypes for user testings, creating self-service tools,
            and supporting the design system by crafting reusable components.{" "}
          </div>
        </div>

        <div className="textbox2">
          <div className="title2"> What is the Design Technology Club? </div>

          <div className="answer2">
            Founded in March 2021, The Design Technology Club is a new community
            full of amazing design technologists. Through networking, career and
            social events, our goal is to connect design technologists across
            various companies and to form a strong community for design and tech
            lovers.
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

export default Intro;
