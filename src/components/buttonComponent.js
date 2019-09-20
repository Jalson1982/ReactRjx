import React from "react";

const buttonComponent = (props) => {
    function buttonFunc(...args) {
        return props.onClick(...args);
    }
    const functionArgs = props.args ? [...props.args] : null;
    return(
        <button style={props.style} className={props.className} onClick={()=>props.onClick? buttonFunc(functionArgs):null}>{props.title}</button>
    )
}

export default buttonComponent;