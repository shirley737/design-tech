import React from "react";
import "./Main.scss";
import Button from "../utilities/Button/Button";
import Typewriter from "typewriter-effect";


function Main() {
  return (
    <div className="container">
      <div className="content">
        {" "}
        <div>
          <div className="header">We Are</div>
          <br />
          <div className="typewritter">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Designers")
                  .pauseFor(2000)
                  .deleteAll()
                  .callFunction(() => {
                    console.log("All strings were deleted");
                  })
                  .typeString("Developers")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Researchers")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Inventors")
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
              options={{
                loop: true,
              }}
            />
          </div>
        </div>
        <br />
        <div className="header">Who Bring Creative Ideas to Life.</div>
        <div className="join-button"><Button content="Join Now" url="https://docs.google.com/forms/d/e/1FAIpQLScppa_I-N4kMWg1AveJfHElKcGb9pDoL-lSqjEZFGqrhZM5VQ/viewform" /></div>
      </div>

    </div>
  );
}

export default Main;
