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
          <div className="email"><a href="mailto: design.technologists@gmail.com">Email Us</a> </div>
          <div className="slack"> <a href="https://join.slack.com/t/design-tech-community/shared_invite/zt-mfxm7znk-PMxFPJZNzaY2I_9b8HyRmQ">Join our Slack Workplace</a> </div>
        </div>

       

      </div>
      <div className= "footer"> Made with ❤ by design technology club organizers.</div>
    </div>

  );
}

export default Contact;
