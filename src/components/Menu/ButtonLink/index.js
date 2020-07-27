import React from 'react';

function ButtonLink(props) {
    // props => { className: children(conteúdo), "parâmetro que foi passado", herf: "/" }

    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>     
    )
} 

export default ButtonLink;