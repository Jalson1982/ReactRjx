import React from "react";

const imageComponent = (props) => {
    return(
        <img src={props.src} style={props.style} className={props.className} onClick={props.onClick} />
    )
}

export default imageComponent;