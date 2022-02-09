import React from "react";
import './NavTopButton.css'

export default function(props){
    return <li><button className="but desk" title={props.titulo}>
        {props.titulo}
    </button></li>
}