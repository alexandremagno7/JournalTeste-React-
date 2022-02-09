import React from "react";
import './NavMiddleButton.css'

export default function(props){
    return <li>
        <button className="navMiddleButton" title={props.titulo}>
            {props.titulo}
        </button>
    </li>
}