import React from "react";
import { gql, useQuery } from "@apollo/client";

import { cartItemsVar } from "apolloProvider.js";

import "App.css";

const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`;

const Desktop = () => {
  const { loading, error, data } = useQuery(GET_CART_ITEMS);

  if (!loading) console.log(data);
  return (
    <div className="App-header">
      Desktop...
    </div>
  );
};

export default Desktop;
