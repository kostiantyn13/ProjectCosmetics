import React, { Component } from "react";
import styled from "styled-components";
import Presentation from "./presentation";
import Goods from "./goods";
import Stopwatch from "./stopwatch";

class Field extends Component {
  render() {
    return (
      <Container>
        <div>
          <p>Field</p>
          <Stopwatch />
          <Presentation />
          <Goods />
        </div>
      </Container>
    );
  }
}

export default Field;

const Container = styled.div`
  height: 600px;
  margin-left: 210px;
  width: calc(100%-210px);
  background-color: white;
`;
