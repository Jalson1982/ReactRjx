import React from "react";

const buttonComponent = (props) => {
    function buttonFunc(...args) {
        return props.onClick(...args);
    }
    return(
        <button style={props.style} className={props.className} onClick={()=>buttonFunc(...props.args)}>{props.title}</button>
    )
}

export default buttonComponent;