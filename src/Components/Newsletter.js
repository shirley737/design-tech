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
          <div className="news-title">Newsletters</div>
          Every month, we send out a design tech newsletter to community
          members. Content includes articles, tutorials, inspirations, codebase,
          and more. Click the button to read some of the newsletters, and let us
          know if you want to be added to the email list.{" "}
          <div className="news-title">Meetups</div>
          We regularly invite club members to attend our virtual meetups, with
          the plan to hold physical meetups in 2022. Activities include company
          introductions, tech talks, lightning talks and social. This is a great
          way to meet design tech hybrid people across companies.
          <div className="news-title">Conversations</div>
          Every club member loves to chat in our design tech club slack
          workspace. This is a great corner for members to gather information
          such as new technologies, job postings, and networking opportunities!
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
