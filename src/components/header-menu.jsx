import React, { Component } from "react";
import styled from "styled-components";
import Item from "./menu-item.jsx";

class HeaderMenu extends Component {
  render() {
    return (
      <Container>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </Container>
    );
  }
}

export default HeaderMenu;

const Container = styled.div`
  border: 1px solid black;
  height: 50px;
  width: 100%;
  background-color: #7896bf;
`;
const MenuItem = styled(Item)`
  display: inline-block;
  &:hover {
    background-color: green;
    cursor: pointer;
  }
`;
