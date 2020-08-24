import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ApolloProvider from "./apolloProvider.js";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
