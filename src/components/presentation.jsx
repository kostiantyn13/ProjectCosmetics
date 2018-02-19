import React, { Component } from "react";
import styled from "styled-components";
import Availability from "./availability";
import product from "/home/jaguar/cosmetics/src/prod.js";

function Presentation(props) {
  return (
    <Sty>
      <Img />
      <Bod avail={true}>
        <div className="name">{product[`${props.avail ? 0 : 1}`].name}</div>
        <div className="specification">
          {product[`${props.avail ? 0 : 1}`].administration}
        </div>
        <div className="price">{product[`${props.avail ? 0 : 1}`].price}</div>
      </Bod>
      <Availability availability={2} />
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
const Bod = styled.div`
  float: left;
  background-color: #ffffff;
`;
