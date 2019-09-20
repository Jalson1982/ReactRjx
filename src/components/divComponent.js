import React from "react";

const divComponent = (props) => {
    function divFunc(...args) {
        return props.onClick(...args);
    }
    const functionArgs = props.args ? [...props.args] : null;
    return(
        <div style={props.style} className={props.className} onClick={()=>props.onClick? divFunc(functionArgs):null}>{props.children}</div>
    )
}

export default divComponent;