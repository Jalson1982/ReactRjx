import React from "react";
import Select from 'react-select';

const selecComponent= (props) => {
    return(
        <Select
        options={props.options}
        placeholder={props.placeholder}
        className={props.className}
        theme={theme => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: props.primaryColor25,
            primary: props.primaryColor,
          },
        })}
        
        
        />
    )
}

export default selecComponent;