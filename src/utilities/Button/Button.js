import React from "react";
import { Link } from 'react-router-dom'
import "./button.scss";


const Button = ({ content, url }) => {


    return (
        <a href={url}
            target="_blank"
            className="main-button" style={{ verticalAlign: "middle" }}>
            <span>{content}</span>
        </a>
    )
}

export default Button; 
