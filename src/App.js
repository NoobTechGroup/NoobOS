import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Desktop from "Pages/Desktop";
import Login from "Pages/Login";
import Notification from "./Components/Notification"

function App() {
  return (
    // <Router>
    //   <Route path="/login" component={Login} />
    //   <Route path="/" component={Desktop} />
    // </Router>
    <div className="App-header">
      <Notification title="Title" text="jhdsbfhbaslidfnasjndoñerjiowejirhiu23hurbubsdfhjndljfngñemnrmtglñekramñlgkmerlñkmglkmrlñnfkñjnwkejnribfwebhbfwejbfkjwnEJKNDLKemlkfmlkwamrflkmwelknglrnwlknml´kwentkçlnlwékntñlwmrñekmñlewmtlknlwkrentkjnewkjnrlkbwehbiqbwirubqwnrkwnelrnwknjl" position="TL" />
      <Notification title="Title" text="Message" position="TR" />
      <Notification title="Title" text="Message" position="BR" />
      <Notification title="Title" text="Message" position="BL" />
    </div>
  );
}

export default App;
