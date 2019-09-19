import React from "react";

import Script from 'react-load-script';

const divWithScript = (props) => {
    return(
        <div style={props.style} className={props.className} onClick={props.onClick}>
         <Script url={process.env.REACT_APP_GOOGLE_MAPS_API} onLoad={props.onLoad} />
        {props.children}
        </div>
       
    )
}

export default divWithScript;