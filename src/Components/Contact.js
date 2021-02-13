import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <div className="join">
      <div className="context">
        <div className="community">
          Join the community!
        </div>
        <div className="contact">
          <div><span className ="email"> Email :</span><span><a href="mailto: design.technologists@gmail.com"> design.technologists@gmail.com</a></span></div>
          <div><span className ="slack"> Slack :</span> <span><a href="https://docs.google.com/forms/d/e/1FAIpQLSdoBp0UAVcarRlqP_BuBG_gJotcEPvUbckidYeRZh22wHZbNw/viewform?usp=sf_link" target="_blank">Submit an interest form</a></span> </div>
        </div>

       

      </div>
      <div className= "footer"> Made with ❤ by the design technology club organizers.</div>
    </div>

  );
}

export default Contact;
