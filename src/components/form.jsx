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
    const link =
      this.refs.link.value ||
      "http://hronika.info/uploads/posts/2016-12/1482503119_suschestva9.jpg";
    const name = this.refs.name.value;
    const administration = this.refs.administration.value;
    const price = this.refs.price.value;
    const available = this.refs.available.value || 3;
    const wish = this.refs.wish.value || false;

    if (link && name && administration && price && available) {
      this.props.onAdd(link, name, administration, price, available, wish);
    }
  }

  render() {
    return (
      <Container className="product-form" onSubmit={this.handleSubmit}>
        <input type="text" ref="link" placeholder="Фото" />
        <input type="text" ref="name" placeholder="Название" value="name" />
        <input
          type="text"
          ref="administration"
          placeholder="Назначение"
          value="admin"
        />
        <input type="text" ref="price" placeholder="Цена" value={6} />
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
