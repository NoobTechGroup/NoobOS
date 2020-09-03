import { ReactSVG } from "react-svg";
import styled, { css } from "styled-components";

const StyledSVGIcon = styled(ReactSVG)`
  svg {
    fill: black;
    ${({ size }) =>
      size &&
      css`
        width: ${size};
        height: ${size};
      `}
    ${({ transform }) =>
      transform &&
      css`
        transform: ${transform};
      `}
    path {
      ${({ color }) =>
        color &&
        css`
          fill: ${color};
        `}
    }
  }
`;

export default StyledSVGIcon;
