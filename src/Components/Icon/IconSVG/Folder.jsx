import React from "react";
import { DEFAULT_DESKTOP_SIZE, SIZES } from "../constants";

const IconFolder = ({
  width = SIZES[DEFAULT_DESKTOP_SIZE].width,
  height = SIZES[DEFAULT_DESKTOP_SIZE].height,
}) => {
  return (
    <svg
      width={width}
      height={height}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 468.293 468.293"
    >
      <path
        fill="#F6C358;"
        d="M206.049,72.574V55.559c0-10.345-8.386-18.732-18.732-18.732H18.732C8.386,36.827,0,45.213,0,55.559
	v110.248h468.293v-62.013c0-10.345-8.386-18.732-18.732-18.732H218.537C211.64,85.062,206.049,79.471,206.049,72.574z"
      />
      <path
        fill="#FCD462;"
        d="M443.317,431.466H24.976C11.182,431.466,0,420.284,0,406.49V161.35h206.748
	c5.268,0,10.293-2.218,13.842-6.111l23.013-25.241c3.549-3.893,8.574-6.111,13.842-6.111h210.848V406.49
	C468.293,420.284,457.111,431.466,443.317,431.466z"
      />
    </svg>
  );
};

export default IconFolder;
