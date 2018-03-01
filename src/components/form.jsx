import React, { Component } from "react";
import ButtonAdd from "./button-add";
import styled from "styled-components";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const link = this.refs.link.value;
    const name = this.refs.name.value;
    const administration = this.refs.administration.value;
    const price = this.refs.price.value;
    const available = this.refs.available.value;
    const wish = this.refs.wish.value;
    if (!available) {
      this.available = 3;
    }
    if (!wish) {
      this.wish = false;
    }
    if (link && name && administration && price && available) {
      this.props.onAdd(link, name, administration, price, available, wish);
    }
  }

  render() {
    return (
      <Container className="product-form" onSubmit={this.handleSubmit}>
        <input type="text" ref="link" placeholder="Фото" />
        <input type="text" ref="name" placeholder="Название" />
        <input type="text" ref="administration" placeholder="Назначение" />
        <input type="text" ref="price" placeholder="Цена" />
        <input type="text" ref="available" placeholder="Наличие" />
        <input type="text" ref="wish" placeholder="Нравится ли?" />
        <ButtonAdd />
      </Container>
    );
  }
}

export default Form;

const Container = styled.form`
  height: 150px;
  width: 200px;
  padding: 20px;
`;
