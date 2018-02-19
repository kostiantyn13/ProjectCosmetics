import React, { Component } from "react";

class Availability extends Component {
  /*propTypes = {
    availability: React.PropTypes.number.isRequired
  };*/
  render(props) {
    return (
      <button>
        {props.availability === "1" && "В наличии"}
        {props.availability === "2" && "Нет в наличии"}
        {props.availability === "3" && "Под заказ"}
      </button>
    );
  }
}

export default Availability;
