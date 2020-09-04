// Dependencies
import React from "react";

// Components

// Styles

import { ButtonStyle } from "./Styles";

const Button = (props) => {
  return (
    <ButtonStyle>
    status={props.status}  
    size={props.size}
    type={props.type}
    </ButtonStyle>
  );

};

export default Button;
