import React, { Component } from "react";
import styled from "styled-components";
import Timer from "./timer";

class Stopwatch extends Component {
  render() {
    return (
      <Watch>
        <Timer />
      </Watch>
    );
  }
}

export default Stopwatch;

const Watch = styled.div`
  height: 50px;
  width: 200px;
  border: 1px solid #669900;
`;
