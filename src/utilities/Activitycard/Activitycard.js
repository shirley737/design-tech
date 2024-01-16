import React from "react";
import "./activity-card.scss";
import { Button } from "@mui/material";


const Activitycard = ({ vector, title, description, action, method }) => {

    return (
        <div className="activity-card" >
            <img className="image" src={vector} alt="vector" />
            <div className="title">{title}</div>
            <div className="description"> {description} </div>

            <Button className="action" onClick={method}> {action} </Button>

        </div>
    )
}

export default Activitycard; 