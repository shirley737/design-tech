import React from "react";
import "./People.scss";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import shirley from "../images/shirley.jfif";
import eric from "../images/eric.jfif";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import company from "../images/company.png";
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from "@mui/material";

function People() {
  return (
    <div
      className="people"
      id="people"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="people-title">🧑‍💻 People</div>
      <div className="people-subtitle">Meet our Leaders</div>
      <div className="stack">
        <Stack direction="row" spacing={8}>
          <Card sx={{ width: 240, height: 320, borderRadius: 2 }}>
            <CardContent>
              <Avatar
                alt="Shirley"
                src={shirley}
                sx={{ width: 120, height: 120, margin: "16px auto" }}
              />
              <div
                classsName="card-title"
                style={{ marginTop: "36px", fontSize: "20px" }}
              >
                Shirley Guo
              </div>
              <div
                classsName="card-subtitle"
                style={{
                  fontFamily: "Noto Sans, sans-serif",
                  fontSize: "14px",
                  marginTop: "4px"
                }}
              >
                Design Technologist
              </div>
            </CardContent>
            <CardActions>
              <div className="action" >
                <IconButton size="small" onClick={() => {
                  window.open("https://www.linkedin.com/in/diashirley/", "_blank");
                }}>
                  <LinkedInIcon />
                </IconButton>
                <IconButton size="small">
                  <EmailIcon />
                </IconButton>
                <IconButton size="small" onClick={() => {
                  window.open("https://github.com/shirley737", "_blank");
                }}>
                  <GitHubIcon />
                </IconButton>
              </div>
            </CardActions>
          </Card>
          <Card sx={{ width: 240, height: 320, borderRadius: 2 }}>
            <CardContent>
              <Avatar
                alt="Eric"
                src={eric}
                sx={{ width: 120, height: 120, margin: "16px auto" }}
              />
              <div
                classsName="card-title"
                style={{ marginTop: "36px", fontSize: "20px" }}
              >
                Eric Liu
              </div>
              <div
                classsName="card-subtitle"
                style={{
                  fontFamily: "Noto Sans, sans-serif",
                  fontSize: "14px",
                  marginTop: "4px"
                }}
              >
                UX Engineer
              </div>
            </CardContent>
            <CardActions>
              <div className="action">
                <IconButton size="small" onClick={() => {
                  window.open("https://www.linkedin.com/in/erc/", "_blank");
                }}>
                  <LinkedInIcon />
                </IconButton>
                <IconButton size="small">
                  <EmailIcon />
                </IconButton>
                <IconButton size="small" onClick={() => {
                  window.open("https://github.com/metonym", "_blank");
                }}>
                  <GitHubIcon /></IconButton>
              </div>
            </CardActions>
          </Card>
        </Stack>
      </div>

      <div className="people-subtitle">Meet our Members</div>
      <div className="member-align">
        <div>
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
      </div>
    </div>
  );
}

export default People;
