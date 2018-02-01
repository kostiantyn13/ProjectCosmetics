import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
//import Header from "components/header.jsx";

class Presentation extends Component {
  render() {
    return (
      <Sty>
        <div>Presentation</div>
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
