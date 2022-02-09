import React from "react";
import './MainNews.css';
import {Mundo, Politica, Opiniao, Ciencia, Economia, Esporte, Compartilhar} from '../utilities/Icones'

export default function(props){

    function IconeTipo(tipo){
        switch(tipo){
            case 'Mundo': return <Mundo/>; break;
            case 'Política': return <Politica/>; break;
            case 'Opinião': return <Opiniao/>; break;
            case 'Ciencia': return <Ciencia/>; break;
            case 'Economia': return <Economia/>; break;
            case 'Esporte': return <Esporte/>; break;
        }
    }

    return <article title={props.titulo} className="mainNews">
                <div style={{display: 'flex', alignItems: 'center'}}>
                   {IconeTipo(props.tipo)} <small>{props.tipo}</small> | <Compartilhar/>
                </div>
                    <img src={props.imagem} alt={props.titulo} />
                    <h3>{props.titulo}</h3>
            </article>
}