import React from "react";

const inputComponent = (props) => {
    return(
        <input className={props.className} id={props.id}  onFocus={props.onFocus}  placeholder={props.placeholder}/>
    )
}

export default inputComponent;