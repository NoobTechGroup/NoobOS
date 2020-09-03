import React from "react";
import StyledSVGIcon from "./styles";

const IconSVG = ({ size, color, name, transform }) => {
  return (
    <StyledSVGIcon
      src={`/icons/${name}.svg`}
      color={color}
      size={size}
      transform={transform}
    />
  );
};

export default IconSVG;
