import React, { Components } from "react";
import styled from "styled-components";
import product from "../prod";
import Availability from "./availability";

function Prod(props) {
  return (
    <Bod>
      {product[props.ob].name}
      <br />
      {product[props.ob].administration}
      <br />
      {product[props.ob].price}
      <Availability available={1} />
    </Bod>
  );
}

export default Prod;

const Bod = styled.div`
  float: left;
  background-color: #ffffff;
`;
