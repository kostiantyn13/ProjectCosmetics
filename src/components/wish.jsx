import React from "react";
import Button from "material-ui/Button";

const Wish = props => (
  <Button onClick={props.onWish}>
    {props.wish ? "Не нравится" : "Хочу купить"}
  </Button>
);

export default Wish;
