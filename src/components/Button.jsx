/* eslint-disable import/no-anonymous-default-export */
import './button.css'
import React from "react";

export default props => {
    let classificacao = 'button '
    classificacao += props.operation ? 'operation' : ''
    classificacao += props.double ? 'double' : ''
    classificacao += props.triple ? 'triple' : ''
    return(
        <button
            onClick={e => props.click(props.label)}
            className={classificacao}>
            {props.label}
        </button>
    )
}
