import React from "react";

const spanComponent = (props) => {

    function spanFunc(...args) {
        return props.onClick(...args);
    }
    return(
        <span style={props.style} className={props.className} onClick={()=>spanFunc(...props.args)}>{props.title}</span>
    )
}

export default spanComponent;