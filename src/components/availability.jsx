import React, { Component } from "react";
import Button from "material-ui/Button";

class Availability extends Component {
  render() {
    const { available } = this.props;
    return (
      <Button>
        {available === 1 && "В наличии"}
        {available === 2 && "Нет в наличии"}
        {available === 3 && "Под заказ"}
      </Button>
    );
  }
}

export default Availability;
