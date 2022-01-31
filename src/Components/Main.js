import React from "react";
import "./Main.scss";
import image from "../images/image.jpg";
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
                  .callFunction(() => {
                    console.log("designer");
                  })
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
      </div>
    </div>
  );
}

export default Main;
