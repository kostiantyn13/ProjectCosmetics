import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Menu_item from "./menu_item.jsx";

class Header_menu extends Component {
  render() {
    return (
      <Sty>
        <div>
          <St>
            <div>
              <Menu_item />
            </div>
            <div>
              <Menu_item />
            </div>
            <div>
              <Menu_item />
            </div>
            <div>
              <Menu_item />
            </div>
            <div>
              <Menu_item />
            </div>
          </St>
        </div>
      </Sty>
    );
  }
}

export default Header_menu;

const Sty = styled.div`
  border: 1px solid black;
  height: 50px;
  width: 100%;
  background-color: #7896bf;
`;
const St = styled.div`
  display: inline;
  margin-right: 5px;
`;
