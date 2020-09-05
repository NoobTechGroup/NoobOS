import React from "react";
import Icon from 'Components/Icon';

import "App.css";

/**
 * @Comment This change is for presentational purpose only
 */

const Desktop = () => {
  return (
    <div className="App-header">
      <Icon type="folder" title="Documents" />
      <Icon type="js" title="script" />
      <Icon type="html" title="landing" />
      <Icon type="css" title="styles" />
      <Icon type="folder-sync-cloud" title="share folder" />
    </div>
  );
};

export default Desktop;
