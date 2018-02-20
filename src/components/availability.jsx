import React, { Component } from "react";
import Button from "material-ui/Button";

class Availability extends Component {
  render() {
    const { available } = this.props;
    //const available = this.props.available
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
