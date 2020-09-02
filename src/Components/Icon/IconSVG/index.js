import React from "react";

import FileTxt from "./FileTxt";
import Folder from "./Folder";

const IconSVG = (props) => {
  switch (props.name) {
    case "txt":
      return <FileTxt {...props} />;
    case "folder":
      return <Folder {...props} />;
    default:
      return;
  }
};

export default IconSVG;
