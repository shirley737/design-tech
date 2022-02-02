import React from "react";
import "./Newsletter.scss";
import { useHistory } from "react-router-dom";

function Newsletter() {
  const history = useHistory();
  return (
    <div
      className="newsletter"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="news-title">✨ Activities</div>
      <div className="news-split">
        <div className="news-text">
          Every month, we send out a design tech newsletter to community
          members. Content includes articles, tutorials, inspirations, codebase,
          and more. Click the button to read some of the newsletters, and let us
          know if you want to be added to the email list.{" "}
        </div>
        <div
          className="newsbutton"
          onClick={() => {
            history.push("./news");
          }}
        >
          <span>Checkout our newsletter</span>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
