import React, { Fragment } from "react";

const fragmentComponent = (props) => {
    return(
        <Fragment>
         {props.children}
        </Fragment>
    )
}

export default fragmentComponent;