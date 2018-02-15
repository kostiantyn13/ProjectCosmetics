import React, { Component } from "react";
import styled from "styled-components";

class Footer extends Component {
  render() {
    return (
      <Sty>
        <div>Footer</div>
      </Sty>
    );
  }
}

export default Footer;

const Sty = styled.div`
  height: 100px;
  width: 100%;
  border: 1px solid green;
  border-radius: 5px;
  color: #468847;
  background-color: #dff0d8;
  clear: both;
`;
