import React, { Component } from "react";
import styled from "styled-components";
import Availability from "./availability";
import Prod from "./product";

function Presentation(props) {
  return (
    <Sty>
      <Img />
      <Prod ob={0} />
      <Prod ob={1} />
      <Availability available={1} />
    </Sty>
  );
}

export default Presentation;

const Sty = styled.div`
  height: 400px;
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #e3edf2;
`;
const Img = styled.div`
  width: 100px;
  height: 100px;
  float: left2;
`;
/*background: url(${props => props.product[0][0]}) no-repeat;*/
