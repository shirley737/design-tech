import React from "react";
import "./People.scss";
import { useHistory } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import shirley from "../images/shirley.jfif";
import eric from "../images/eric.jfif";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import company from "../images/company.png";

function People() {
  const history = useHistory();
  return (
    <div
      className="people"
      id="people"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="people-title">🧑‍💻 Technologists</div>
      <div className="people-subtitle">Meet our Leaders</div>
      <div className="stack">
        <Stack direction="row" spacing={5}>
          <Card sx={{ width: 200 }}>
            <CardContent>
              <div className="tryCenter">
                <Avatar
                  alt="Shirley"
                  src={shirley}
                  sx={{ width: 120, height: 120, margin: "auto" }}
                />
              </div>

              <div
                classsName="card-title"
                style={{ marginTop: "10px", fontSize: "20px" }}
              >
                Shirley Guo
              </div>
              <div
                classsName="card-subtitle"
                style={{
                  fontFamily: "Noto Sans, sans-serif",
                  fontSize: "14px",
                }}
              >
                Design Technologist
              </div>
            </CardContent>
          </Card>
          <Card sx={{ width: 200 }}>
            <CardContent>
              <Avatar
                alt="Eric"
                src={eric}
                sx={{ width: 120, height: 120, margin: "auto" }}
              />
              <div
                classsName="card-title"
                style={{ marginTop: "10px", fontSize: "20px" }}
              >
                Eric Liu
              </div>
              <div
                classsName="card-subtitle"
                style={{
                  fontFamily: "Noto Sans, sans-serif",
                  fontSize: "14px",
                }}
              >
                UX Engineer
              </div>
            </CardContent>
          </Card>
        </Stack>
      </div>

      <div className="people-subtitle">Meet our Members</div>
      <div className="member-align">
        <div>
          {" "}
          <div className="people-text">
            Over the past year, the design tech club warmly welcomed 70 club
            members from both startups and influential tech companies such as
            Google, LinkedIn and Netflix. We communicate through newsletters,
            slack messages and virtual meetups.
          </div>
          <div className="people-text">
            If you want to join this community or are interested in meeting
            current members, please{" "}
            <span className="linktext">
              <a href="mailto: design.technologists@gmail.com" target="_blank">
                reach out to us!
              </a>
            </span>
          </div>
        </div>
        <div>
          <img className="member-graph" src={company} />
        </div>
      </div>
    </div>
  );
}

export default People;
