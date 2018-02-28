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
    const photo = this.refs.photo.value;
    const name = this.refs.name.value;
    if (photo && name) {
      this.props.onAdd(photo, name);
    }
  }

  render() {
    return (
      <Container className="product-form" onSubmit={this.handleSubmit}>
        <input type="text" ref="photo" placeholder="Фото" />
        <input type="text" ref="name" placeholder="Название" />
        <input type="text" ref="for" placeholder="Назначение" />
        <input type="text" ref="administration" placeholder="Цена" />
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
