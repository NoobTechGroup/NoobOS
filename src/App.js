import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Desktop from "Pages/Desktop";
import Login from "Pages/Login";

function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/" component={Desktop} />
    </Router>
  );
}

export default App;
