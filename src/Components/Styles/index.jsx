// Dependencies
import React from "react";

// Components

// Styles
import { ButtonStyle } from "./styles";

const Button = (props) => {
  return (
    <ButtonStyle>
      <div>{props.prop}</div>
    </ButtonStyle>
  );
};

export default Button;
