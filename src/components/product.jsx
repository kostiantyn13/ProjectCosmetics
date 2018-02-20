import React, { Components } from "react";
import styled from "styled-components";
import product from "../prod";

function Prod() {
  const { ob } = this.props;
  return (
    <Bod>
      {product[{ ob }].name}
      <br />
      {product[{ ob }].administration}
      <br />
      {product[{ ob }].price}
    </Bod>
  );
}

export default Prod;

const Bod = styled.div`
  float: left;
  background-color: #ffffff;
`;
