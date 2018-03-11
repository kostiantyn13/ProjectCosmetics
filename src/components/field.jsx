import React, { Component } from "react";
import styled from "styled-components";
import Presentation from "./presentation";

class Field extends Component {
  render() {
    return (
      <Container>
        <div>
          <p>Field</p>
          <Presentation />
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
