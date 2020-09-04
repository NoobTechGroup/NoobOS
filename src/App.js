import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Icon from "./Components/Icon/Icon";
import "./App.css";
import Notification from "./Components/Notification";

function App() {
  return (
    <div className="App-header">
      {/* <Icon /> */}
      {/* <span className="App-logo"> NoobOS </span> */}
      <Notification title="Title" text="Message" position=""/>
    </div>
  );
}

export default App;
