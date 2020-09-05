import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Notification from "./Components/Notification";
import "./App.css";

function App() {
  return (
    <div className="App-header">
      <Notification title="Title" text="Message" position=""/>
    </div>
  );
}

export default App;
