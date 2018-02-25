import React, { Component } from "react";
import styled from "styled-components";
import Availability from "./availability";
import Img from "./product-image";
import Wish from "./wish";

class Prod extends Component {
  constructor(props) {
    super(props);
  }
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
        <Wish onWish={props.onStatusWish} />
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
