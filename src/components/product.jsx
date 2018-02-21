import React, { Components } from "react";
import styled from "styled-components";
import Availability from "./availability";
import Img from "./product-image";

function Prod(props) {
  return (
    <Bod>
      <Img link={props.link} />
      {props.name}
      <br />
      {props.administration}
      <br />
      {props.price}
      <br />
      <Availability available={props.available} />
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
