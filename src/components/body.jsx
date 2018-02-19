import React, { Component } from "react";
import styled from "styled-components";
import BoxMenu from "./box-menu";
import Field from "./field";

class Body extends Component {
  render() {
    return (
      <Sty>
        <BoxMenu />
        <Field />
      </Sty>
    );
  }
}

export default Body;

const Sty = styled.div`
  height: 1000px;
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
  color: #268647;
  background-color: #eaeaea;
`;
