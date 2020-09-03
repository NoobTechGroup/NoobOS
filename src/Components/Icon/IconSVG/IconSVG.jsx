import React from "react";
import StyledSVGIcon from "./styles";

import { SIZES } from "../constants";

const IconSVG = ({ size, color, name, transform }) => {
  const iconSize = SIZES[size]
  return (
    <StyledSVGIcon
      src={`/icons/${name}.svg`}
      color={color}
      size={iconSize}
      transform={transform}
    />
  );
};

export default IconSVG;
