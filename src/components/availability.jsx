import React, { Component } from "react";

class Availability extends Component {
  render() {
    const { available } = this.props;
    //const available = this.props.available
    return (
      <button>
        {available === 1 && "В наличии"}
        {available === 2 && "Нет в наличии"}
        {available === 3 && "Под заказ"}
      </button>
    );
  }
}

export default Availability;
