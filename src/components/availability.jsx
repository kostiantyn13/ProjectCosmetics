import React from "react";

function Availability(props) {
  return (
    <button>
      {props.availability === 1 && "В наличии"}
      {props.availability === 2 && "Нет в наличии"}
      {props.availability === 3 && "Под заказ"}
    </button>
  );
}

export default Availability;
