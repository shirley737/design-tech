import React from "react";
import "./Newsletter.scss";
import { useHistory } from "react-router-dom";
import meetup from "../images/meetup.PNG";

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
          Currently, we focus on the following three activities:
          <div className="news-title">Newsletters</div>
          Every month, we send out a newsletter email to community members.
          Content includes design tech related articles, tutorials,
          inspirations, codebase, and more. Those content is generated by our
          organizers and members who want to recommend an article to other
          members.
          <div className="news-title">Meetups</div>
          We regularly invite club members to attend our Design Tech Meetups.
          Activities include company introductions, projects demos, lightning
          talks, socials and a lot more. This is a great way to meet design tech
          hybrid people across companies.
          <br />
          <br />
          Right now we only organize virtual meetups, but we plan to start
          meeting physically in 2022.
          <div className="news-title">Slack Conversations</div>
          Once accepted, every club member will be invited to our design tech
          club slack workspace. This is a great corner for members to gather
          information such as new technologies, job postings, and networking
          opportunities! We regularly maintain the slack workspace and also post
          meetup announcements and updates there.
        </div>
        <div>
          {" "}
          <div
            className="newsbutton"
            onClick={() => {
              history.push("./news");
            }}
          >
            <span>Check out newsletters</span>
          </div>
          <div>
            {" "}
            <img src={meetup} className="meetup"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;