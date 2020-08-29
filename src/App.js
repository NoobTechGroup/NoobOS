import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Desktop from "Pages/Desktop";

function App() {
  return (
    <Router>
      <Route path="/" component={Desktop} />
    </Router>
  );
}

export default App;
