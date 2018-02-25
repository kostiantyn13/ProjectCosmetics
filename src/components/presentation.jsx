import React, { Component } from "react";
import styled from "styled-components";
import product from "../prod";
import Prod from "./product";

class Presentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wish: false
    };
    this.handleStatusWish = this.handleStatusWish.bind(this);
  }
  handleStatusWish(id) {
    this.setState({
      wish: !this.state.wish
    });
    console.log(id);
  }
  render() {
    return (
      <Container>
        {product.map(elem => (
          <Prod
            key={elem.id}
            id={elem.id}
            name={elem.name}
            administration={elem.administration}
            price={elem.price}
            link={elem.link}
            available={elem.available}
            onStatusWish={this.handleStatusWish}
          />
        ))}
      </Container>
    );
  }
}

export default Presentation;

const Container = styled.div`
  height: 400px;
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #e3edf2;
`;
