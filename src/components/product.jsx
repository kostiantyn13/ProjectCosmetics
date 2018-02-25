import React, { Component } from "react";
import styled from "styled-components";
import Availability from "./availability";
import Img from "./product-image";
import Wish from "./wish";

class Prod extends Component {
  render() {
    const { props } = this;
    return (
      <Container wish={props.wish}>
        <Img link={props.link} />
        {props.name}
        <br />
        {props.administration}
        <br />
        {props.price}
        <br />
        <Availability initiallyAvailable={props.available} />
        <Wish wish={props.wish} onWish={() => props.onStatusWish(props.id)} />
      </Container>
    );
  }
}

export default Prod;

const Container = styled.div`
  float: left;
  background-color: ${props => {
    console.log(props);
    return props.wish ? props.theme.main : props.theme.mainw;
  }};
  height: 150px;
  width: calc(100% - 200px);
`;
Container.defaultProps = {
  theme: {
    main: "#ffffff",
    mainw: "#e6e6ff"
  }
};
