import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <div className="join">
      <div className="join-context">
        <div className="community">📧 Contact</div>
        <div className="contact">
          <div>
            <span className="email"> Email :</span>
            <span>
              <a href="mailto: design.technologists@gmail.com">
                {" "}
                design.technologists@gmail.com
              </a>
            </span>
          </div>
          <div>
            <span className="slack"> Slack :</span>{" "}
            <span>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScppa_I-N4kMWg1AveJfHElKcGb9pDoL-lSqjEZFGqrhZM5VQ/viewform?usp=sf_link"
                target="_blank"
              >
                Submit an interest form
              </a>
            </span>{" "}
          </div>
        </div>
        <div className="footer">
          {" "}
          Made with ❤ by the design technology club organizers.
        </div>
      </div>
    </div>
  );
}

export default Contact;
