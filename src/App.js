import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Desktop from "Pages/Desktop";
import Login from "Pages/Login";
import Window from "./Containers/Window/index";
import { ReactComponent as IconImg } from "assets/Icons/IconImg.svg"

function App() {
  return (
    <Router>
      {/* <Route path="/login" component={Login} />
      <Route path="/" component={Desktop} /> */}
      <Window />
    </Router>
  );
}

export default App;
