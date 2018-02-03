import React, { Component } from "react";
import styled from "styled-components";
//import Header from "components/header.jsx";

class Header extends Component {
  render() {
    return (
      <Sty>
        <div>Header</div>
      </Sty>
    );
  }
}

export default Header;

const Sty = styled.div`
  height: 100px;
  width: 100%;
  border: 1px solid green;
  border-radius: 5px;
  color: #468847;
  background-color: #dff0d8;
  clear: both;
`;
