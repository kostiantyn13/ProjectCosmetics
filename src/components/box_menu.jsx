import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Menu_list from "./menu_list.jsx";

class Box_menu extends Component {
  render() {
    return (
      <Sty>
        <div>
          <div>
            <Menu_list />
          </div>
        </div>
      </Sty>
    );
  }
}

export default Box_menu;

const Sty = styled.div`
  border-radius: 10px;
  border: 1px solid black;
  height: 600px;
  width: 200px;
  background-color: #7896bf;
  float: left;
  box-shadow: 3px 3px 4px #6487b7;
  padding: 10px;
`;
