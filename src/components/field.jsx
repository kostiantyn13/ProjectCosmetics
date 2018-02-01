import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Presentation from "./presentation.jsx";
import Goods from "./goods.jsx";

class Field extends Component {
  render() {
    return (
      <Sty>
        <div>
          <p>Field</p>
          <Presentation />
          <Goods />
        </div>
      </Sty>
    );
  }
}

export default Field;

const Sty = styled.div`
  height: 600px;
  margin-left: 210px;
  width: calc(100%-210px);
  background-color: white;
`;
