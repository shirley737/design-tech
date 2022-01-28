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
import CardMedia from "@mui/material/CardMedia";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { responsiveFontSizes } from "@mui/material";

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
      <div className="people-title">People</div>
      <div className="people-subtitle">Meet the Leaders</div>
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

              <div classsName="card-title" style={{ marginTop: "10px" }}>
                Shirley Guo
              </div>
              <div
                classsName="card-subtitle"
                style={{
                  fontFamily: "Noto Sans, sans-serif",
                  fontSize: "12px",
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
              <div classsName="card-title" style={{ marginTop: "10px" }}>
                Eric Liu
              </div>
              <div
                classsName="card-subtitle"
                style={{
                  fontFamily: "Noto Sans, sans-serif",
                  fontSize: "12px",
                }}
              >
                UX Engineer
              </div>
            </CardContent>
          </Card>
        </Stack>
      </div>

      <div className="people-subtitle">Meet the Members</div>
      <div className="people-text">
        From the past nine months, the design tech club warmly welcomed over 60
        club members from both startups and influential tech companies such as
        Google, LinkedIn and Netflix. We communicate through newsletters, slacks
        and virtual meetups.
      </div>
      <br />
      <div className="people-text">
        If you want to join this design + tech hybrid community or are
        interested in knowing current members, please reach out to us!
      </div>
    </div>
  );
}

export default People;
