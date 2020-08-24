import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Icon from "./Components/Icon/Icon";
import "./App.css";

function App() {
  return (
    <div className="App-header">
      <Icon />
      {/* <span className="App-logo"> NoobOS </span> */}
    </div>
  );
}

export default App;
