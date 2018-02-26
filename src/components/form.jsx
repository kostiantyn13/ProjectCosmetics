import React, { Component } from "react";
import ButtonAdd from "./button-add";
import styled from "styled-components";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container className="product-form">
        <input type="text" placeholder="Фото" />
        <input type="text" placeholder="Название" />
        <input type="text" placeholder="Назначение" />
        <input type="text" placeholder="Цена" />
        <input type="text" placeholder="Наличие" />
        <input type="text" placeholder="Нравится ли?" />

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
