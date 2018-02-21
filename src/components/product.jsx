import React, { Components } from "react";
import styled from "styled-components";
import Availability from "./availability";

function Prod(props) {
  return (
    <Bod>
      {props.name}
      <br />
      {props.administration}
      <br />
      {props.price}
      <Availability available={1} />
    </Bod>
  );
}

export default Prod;

const Bod = styled.div`
  float: left;
  background-color: #ffffff;
  height: 100px;
  width: 400px;
`;
