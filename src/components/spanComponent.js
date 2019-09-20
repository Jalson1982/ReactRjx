import React from "react";

const spanComponent = (props) => {

    function spanFunc(...args) {
        return props.onClick(...args);
    }
    const functionArgs = props.args ? [...props.args] : null;
    return(
        <span style={props.style} className={props.className} onClick={()=>props.onClick ? spanFunc(functionArgs) : null}>{props.title}</span>
    )
}

export default spanComponent;