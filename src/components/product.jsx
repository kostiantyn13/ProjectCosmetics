import React, { Component } from "react";
import styled from "styled-components";
import Availability from "./availability";
import Img from "./product-image";

class Prod extends Component {
  render() {
    const { props } = this;
    return (
      <Container>
        <Img link={props.link} />
        {props.name}
        <br />
        {props.administration}
        <br />
        {props.price}
        <br />
        <Availability initiallyAvailable={props.available} />
      </Container>
    );
  }
}

export default Prod;

const Container = styled.div`
  float: left;
  background-color: #ffffff;
  height: 150px;
  width: calc(100% - 200px);
`;
