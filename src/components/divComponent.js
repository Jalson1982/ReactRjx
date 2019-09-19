import React from "react";

const divComponent = (props) => {
    function buttonFunc(...args) {
        return props.onClick(...args);
    }
    return(
        <div style={props.style} className={props.className} onClick={()=>buttonFunc(...props.args)}>{props.children}</div>
    )
}

export default divComponent;