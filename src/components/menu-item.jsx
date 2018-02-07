import React, { Component } from "react";
import styled from "styled-components";

class MenuItem extends Component {
  render() {
    const { props } = this;
    return (
      <Container {...props}>
        <div>Menu Item</div>
      </Container>
    );
  }
}

export default MenuItem;

const Container = styled.div`
  border: 1px solid black;
  height: 100%;
  width: 100px;
  background-color: #7896bf;
  margin: -1px 0 -1px -1px;
`;
