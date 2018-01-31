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
          <Menu_list />
          <Field />
        </div>
      </Sty>
    );
  }
}

export default Body;
const Sty = styled.div`
  height: 100%;
  weigth: 100%;
  background-color: brown;
`;
