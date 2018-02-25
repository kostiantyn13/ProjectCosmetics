import React, { Component } from "react";
import ButtonAdd from "./button-add";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form className="product-form">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <ButtonAdd />
      </form>
    );
  }
}

export default Form;
