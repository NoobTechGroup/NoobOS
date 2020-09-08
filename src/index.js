import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ApolloProvider from "./apolloProvider.js";

import App from "./App";

ReactDOM.render(
  <ApolloProvider>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
