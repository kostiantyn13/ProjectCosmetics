import React, { Component } from "react";
import Button from "material-ui/Button";

class Availability extends Component {
  constructor() {
    super();
    this.state = {
      available: 1
    };
    this.aval = this.aval.bind(this);
  }
  aval(event) {
    this.setState({
      available: 3
    });
  }
  render() {
    const { available } = this.state;
    return (
      <Button onClick={this.aval}>
        {available === 1 && "В наличии"}
        {available === 2 && "Нет в наличии"}
        {available === 3 && "Под заказ"}
      </Button>
    );
  }
}

export default Availability;
