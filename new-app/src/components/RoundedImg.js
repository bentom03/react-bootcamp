import React from "react";
import PropTypes from "prop-type";
import { render } from "@testing-library/react";

function RoundedImg () {
    return (
        <img 
            src={props.src} 
            style={{borderRadius: props.borderRadius}} 
            className="round-img"
        />
    )
}


export default RoundedImg;