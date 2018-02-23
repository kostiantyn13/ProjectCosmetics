import React, { Component } from "react";
import styled from "styled-components";

class Header extends Component {
  render() {
    return (
      <Container>
        <div>Header</div>
      </Container>
    );
  }
}

export default Header;

const Container = styled.div`
  height: 100px;
  width: 100%;
  border: 1px solid green;
  border-radius: 5px;
  color: #468847;
  background-color: #dff0d8;
  clear: both;
`;
