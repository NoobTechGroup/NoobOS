import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
  makeVar,
} from "@apollo/client";

export const cartItemsVar = makeVar([]);

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read() {
            return cartItemsVar();
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache,
});

const ApolloProvider = (props) => <Provider client={client} {...props} />;

export default ApolloProvider;
