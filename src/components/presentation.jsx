import React, { Component } from "react";
import styled from "styled-components";
import Availability from "./availability";
import product from "/home/jaguar/cosmetics/src/prod.js";

class Presentation extends Component {
  getInit;
  render() {
    return (
      <Sty>
        <Img />
        <Bod>
          <div className="name">{product[0].name}</div>
          <div className="specification">{product[0].administration}</div>
          <div className="price">{product[0].price}</div>
        </Bod>
        <Availability availability={1} />
      </Sty>
    );
  }
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
