import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Menu_list from "./menu_list.jsx";
import Field from "./field.jsx";

class Body extends Component {
  render() {
    return (
      <Sty>
        <div>
          <p>Body</p>
          <Menu_list />
          <Field />
        </div>
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
  background-color: #c5d6d3;
`;
