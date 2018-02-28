import React, { Component } from "react";
import styled from "styled-components";
import product from "../prod";
import Prod from "./product";
import Form from "./form";

class Presentation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product
    };
    this.handleStatusWish = this.handleStatusWish.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleAdd(param1, param2) {
    console.log(param1 + "fffs" + param2);

    /*{
      id: 4,
      link:
        "http://lamcdn.net/the-village.ru/post_image-image/VA6rzx9pLr5trnlUg3iDbA-wide.jpg",
      name: "4Крем",
      administration: "4Для сухой кожи",
      price: "72",
      available: 2,
      wish: false
    },*/
  }
  handleStatusWish(id) {
    const wish = product.map(el => {
      if (el.id === id) {
        el.wish = !el.wish;
      }
      return el;
    });
    this.setState({ wish }); //wish: wish
  }
  render() {
    return (
      <Container>
        <Form onAdd={this.handleAdd} />
        {product.map(elem => (
          <Prod
            key={elem.id}
            wish={elem.wish}
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
