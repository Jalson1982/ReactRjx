import React, { Fragment } from "react";

const conditionalComponent = (props) => {
    return(
        <Fragment >{props.dynamicVar1? props.children[1]:props.children[0]}</Fragment>
    )
}

export default conditionalComponent;